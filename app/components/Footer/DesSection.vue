<template>
  <section class="container mt-20 relative">
    <p class="overflow-hidden" :class="{ 'h-32': !showAll, 'mb-5': showAll }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laudantium
      nulla odit, qui minus autem dicta quasi nemo molestias quod expedita
      pariatur enim quidem consequuntur ipsum eaque odio inventore, non magni
      quaerat cumque similique! Voluptatibus quod officiis soluta autem deleniti
      nihil quas architecto perferendis harum velit, rem distinctio beatae dolor
      repellat error magni exercitationem nam tempora laborum deserunt itaque
      atque voluptate similique vitae. Nihil deserunt voluptates hic laudantium,
      nobis et magni eligendi vero! Suscipit deserunt ducimus voluptate est
      maxime dolore amet atque voluptatum illum, porro quo id eum nisi enim
      recusandae quos labore quaerat reiciendis ut incidunt ab adipisci eveniet
      voluptates asperiores. Illo harum ducimus placeat, cum itaque excepturi
      dolor quis debitis voluptatem sapiente, nesciunt obcaecati vel
      reprehenderit expedita ea deserunt deleniti doloribus magnam explicabo
      necessitatibus doloremque ipsum et quasi! Voluptatem sapiente velit
      aperiam? Dignissimos quibusdam repellat exercitationem saepe explicabo
      omnis velit minus commodi. Excepturi adipisci quas officia quod quam
      distinctio enim in blanditiis consequatur, maxime veritatis commodi.
      Vitae, tempore. Error, minus sit et incidunt iusto qui maiores, voluptatem
      molestias natus nostrum pariatur nesciunt ratione aperiam unde consequatur
      quam eaque sint odit dolores quae reprehenderit eum, quia asperiores hic.
      Nobis, asperiores dignissimos facilis, ex blanditiis dolore obcaecati
      impedit dolor ducimus nihil sequi aut culpa, eos magni explicabo. Vitae
      accusantium nihil modi recusandae unde similique? Alias fugit cumque,
      itaque, ratione quos quam id a, nam veritatis atque est sunt vero!
      Quibusdam, tempora quos perferendis dignissimos molestias temporibus illo.
      Exercitationem quasi esse veniam facilis. Omnis ex minus ratione labore
      laudantium accusantium dolor, distinctio provident dolore voluptatem fugit
      id eaque saepe ab quaerat nemo cum. Quam quas necessitatibus asperiores, a
      cumque aperiam! Hic consequuntur, rerum culpa placeat cumque at! Dolores
      veniam delectus, iure est nobis soluta quisquam nemo beatae alias quidem
      voluptatum error exercitationem nostrum aliquam debitis minima nam dolorum
      doloremque ipsa deleniti, labore voluptate. Hic repellendus, quis animi
      officiis saepe, repellat adipisci recusandae molestias quas quisquam
      architecto eum necessitatibus doloremque, modi vitae ab ut reiciendis
      accusamus! Dolore laboriosam architecto consequatur iure vitae optio
      veniam animi. Deleniti asperiores, earum dolore maxime, perspiciatis
      consequuntur natus molestias accusantium excepturi maiores quod quisquam.
      Laudantium, quasi. Voluptatibus commodi laboriosam quis, quam magnam harum
      eum vitae voluptate accusamus, blanditiis, consectetur in ratione iste
      magni natus dolores nulla aperiam incidunt! Itaque reiciendis ad dicta
      facere natus perferendis atque soluta. Voluptatibus, rem! Placeat
      doloremque ipsa praesentium voluptatem non ea nostrum minus. Voluptas
      obcaecati quaerat illo dicta sapiente! Praesentium, incidunt qui inventore
      quasi accusamus nostrum culpa molestias sed eaque dignissimos suscipit
      neque, perferendis pariatur perspiciatis id non consequuntur quas
      consectetur cum facere sit fuga nesciunt. Saepe rem voluptas debitis aut
      corporis voluptatum, labore nulla in autem fugit beatae. In necessitatibus
      adipisci rerum illum error fugiat nemo obcaecati voluptates iusto,
      voluptas eius accusantium rem a sequi dolorum animi ipsum itaque cumque
      quo architecto odio perferendis quae. In, reprehenderit quo. Odio ex et
      asperiores labore. Optio sunt laboriosam dolorem, dicta possimus
      necessitatibus laudantium architecto pariatur eum accusantium voluptatum
      aspernatur assumenda doloribus iste explicabo nesciunt quisquam modi,
      earum, amet nobis molestias ab alias! Odio.
    </p>
    <div
      v-if="!showAll"
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-maindark to-transparent flex justify-center items-end pb-2"
    >
      <button
        class="px-4 py-2 bg-[#EEF4FF] dark:bg-[#252525] text-[#0088FF] rounded-full flex items-center gap-2 cursor-pointer"
        @click="showAll = true"
      >
        بیشتر
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6.85858 7.4406C6.93668 7.5198 7.06332 7.5198 7.14142 7.4406L13 1.5"
            stroke="#0088FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
let showAll = ref(false)
</script>
