export default function () {
  let dark = useState('theme', () => false)

  function switchTheme () {
    let localDark = JSON.parse(localStorage.getItem('dark'))

    localStorage.setItem('dark', !localDark)
    document.documentElement.classList.toggle('dark')

    dark.value = !dark.value
  }

  onMounted(() => {
    if (JSON.parse(localStorage.getItem('dark')))
      document.documentElement.classList.add('dark')

    dark.value = JSON.parse(localStorage.getItem('dark'))
  })

  return { dark, switchTheme }
}
