<template>
  <div class="flex flex-col items-center gap-6 w-full py-4">
    <div
      class="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center group"
    >
      <div
        v-if="!stream && !recordedVideoUrl"
        class="text-gray-400 flex flex-col items-center gap-2"
      >
        <i class="pi pi-camera text-3xl"></i>
        <span class="text-xs">دوربین خاموش / ویدیویی انتخاب نشده</span>
      </div>

      <video
        v-show="stream && !recordedVideoUrl"
        ref="liveVideo"
        autoplay
        playsinline
        muted
        class="w-full h-full object-cover transform scale-x-[-1]"
      ></video>

      <video
        v-if="recordedVideoUrl"
        :src="recordedVideoUrl"
        
        playsinline
        class="w-full h-full object-cover"
      ></video>

      <div
        v-if="isRecording"
        class="absolute bottom-6 bg-black/60 px-3 py-1 rounded-full text-white text-sm font-mono backdrop-blur-sm"
      >
        00:{{ formattedTime }}
      </div>
    </div>

    <div class="flex flex-col items-center gap-4 w-full">
      
      <div class="flex items-center justify-center gap-6 h-20">
        <Button
          v-if="!stream && !recordedVideoUrl"
          label="روشن کردن دوربین"
          @click="startCamera"
          class="!rounded-full !px-6 !text-sm"
        />

        <div v-if="recordedVideoUrl" class="flex gap-4 animate-fade-in">
          <button
            @click="resetRecording"
            class="size-12 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
            type="button"
            v-tooltip.top="'تلاش مجدد'"
          >
            <i class="pi pi-refresh"></i>
          </button>
          <button
            @click="confirmVideo"
            class="size-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition shadow-lg shadow-green-500/30"
            type="button"
            v-tooltip.top="'تایید ویدیو'"
          >
            <i class="pi pi-check text-xl"></i>
          </button>
        </div>

        <div
          v-if="stream && !recordedVideoUrl"
          class="relative flex items-center justify-center"
        >
          <svg class="transform -rotate-90 size-20 pointer-events-none">
            <circle
              cx="40" cy="40" r="36"
              stroke="currentColor" stroke-width="4" fill="transparent"
              class="text-gray-200 dark:text-gray-700"
            />
            <circle
              cx="40" cy="40" r="36"
              stroke="currentColor" stroke-width="4" fill="transparent"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="dashOffset"
              stroke-linecap="round"
              class="text-red-500 transition-all duration-100 ease-linear"
            />
          </svg>

          <button
            @click="toggleRecording"
            type="button"
            class="absolute inset-0 m-auto transition-all duration-300 flex items-center justify-center shadow-inner"
            :class="[
              isRecording
                ? 'size-8 bg-red-600 rounded-md'
                : 'size-14 bg-red-500 hover:bg-red-600 rounded-full'
            ]"
          >
            <span v-if="!isRecording" class="size-3 bg-white/20 rounded-full"></span>
          </button>
        </div>
      </div>

      <div v-if="!isRecording && !recordedVideoUrl" class="w-full px-4">
        <input
          type="file"
          ref="fileInputRef"
          accept="video/*"
          class="hidden"
          @change="handleFileUpload"
        />
        <Button
          label="یا انتخاب ویدیو از گالری"
          icon="pi pi-upload"
          severity="secondary"
          outlined
          class="!w-full !rounded-10 !text-sm"
          @click="triggerFileInput"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, nextTick } from 'vue'

const emit = defineEmits(['videoRecorded'])

// استیت‌ها
const liveVideo = ref(null)
const stream = ref(null)
const mediaRecorder = ref(null)
const recordedChunks = ref([])
const isRecording = ref(false)
const recordedVideoUrl = ref(null)
const recordedBlob = ref(null) // برای ویدیوی ضبط شده
const uploadedFile = ref(null) // برای ویدیوی آپلود شده
const fileInputRef = ref(null) // رفرنس اینپوت فایل

// تایمر
const MAX_TIME = 30
const timeLeft = ref(MAX_TIME)
const timerInterval = ref(null)

// محاسبات SVG
const radius = 36
const circumference = 2 * Math.PI * radius
const dashOffset = computed(
  () => circumference - ((MAX_TIME - timeLeft.value) / MAX_TIME) * circumference
)
const formattedTime = computed(() =>
  (MAX_TIME - timeLeft.value).toString().padStart(2, '0')
)

// --- ۱. آپلود فایل ---
const triggerFileInput = () => {
  fileInputRef.value.click()
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // اگر دوربین روشن بود خاموشش کن
    stopCameraStream()
    
    // ذخیره فایل و ساخت URL برای نمایش
    uploadedFile.value = file
    recordedVideoUrl.value = URL.createObjectURL(file)
    
    // پاک کردن استیت‌های ضبط (چون فایل آپلود شده)
    recordedBlob.value = null
  }
}

// --- ۲. دوربین ---
const startCamera = async () => {
  // اگر فایل آپلود شده بود، پاکش کن تا دوربین بیاد
  uploadedFile.value = null
  recordedVideoUrl.value = null
  
  try {
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 640 } },
      audio: true
    })

    await nextTick()

    if (liveVideo.value) {
      liveVideo.value.srcObject = stream.value
      liveVideo.value.onloadedmetadata = () => {
        liveVideo.value.play()
      }
    }
  } catch (err) {
    console.error(err)
    alert('لطفا دسترسی دوربین را صادر کنید.')
  }
}

// --- ۳. ضبط ---
const toggleRecording = () => isRecording.value ? stopRecording() : startRecording()

const startRecording = () => {
  recordedChunks.value = []
  timeLeft.value = MAX_TIME
  uploadedFile.value = null // اطمینان از خالی بودن فایل آپلودی

  const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
    ? 'video/webm;codecs=vp9'
    : 'video/webm'
  mediaRecorder.value = new MediaRecorder(stream.value, { mimeType })

  mediaRecorder.value.ondataavailable = e => {
    if (e.data.size > 0) recordedChunks.value.push(e.data)
  }
  mediaRecorder.value.start()
  isRecording.value = true

  timerInterval.value = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) stopRecording()
  }, 1000)
}

const stopRecording = () => {
  if (!mediaRecorder.value) return
  mediaRecorder.value.stop()
  isRecording.value = false
  clearInterval(timerInterval.value)

  mediaRecorder.value.onstop = () => {
    recordedBlob.value = new Blob(recordedChunks.value, { type: 'video/webm' })
    recordedVideoUrl.value = URL.createObjectURL(recordedBlob.value)
    stopCameraStream()
  }
}

// --- ۴. تایید و ارسال ---
const confirmVideo = () => {
  // اولویت با فایل آپلود شده است
  if (uploadedFile.value) {
    emit('videoRecorded', uploadedFile.value)
    return
  }

  // اگر فایل ضبط شده بود
  if (recordedBlob.value) {
    const file = new File([recordedBlob.value], 'identity-video.webm', {
      type: 'video/webm'
    })
    emit('videoRecorded', file)
  }
}

const resetRecording = () => {
  recordedVideoUrl.value = null
  recordedBlob.value = null
  uploadedFile.value = null
  if(fileInputRef.value) fileInputRef.value.value = '' // ریست اینپوت فایل
  
  timeLeft.value = MAX_TIME
  startCamera()
}

const stopCameraStream = () => {
  if (stream.value) {
    stream.value.getTracks().forEach(track => track.stop())
    stream.value = null
  }
}

onUnmounted(() => {
  stopCameraStream()
  clearInterval(timerInterval.value)
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>