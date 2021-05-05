<template>
  <div>
    <div class="currently-reading-card flex">
      <div class="flex items-center pl-1">
        <img @click="searchBook(book)" class="book-img" :src="book.imgCover || require('@/assets/cover-not-found.jpg')">
      </div>
      <div class="book-info ml-1 flex flex-column justify-between">
        <div>
          <p @click="searchBook(book)" class="book-title-card ellipsis">{{ book.title }}</p>
          <br />
          <p class="book-subtitle-card ellipsis">by {{ book.author }}</p>
        </div>
        <p class="book-info-card ellipsis"><font-awesome-icon icon="book" /> Chapter <span>2</span> from {{ book.chapters }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentlyReadingCard',
  data: () => ({
    book: {
      id: 'VKm1RC2LzJsC',
      title: 'Farenheit 451',
      author: 'RAY BRADBURY',
      description: 'Escrito após o término da Segunda Guerra Mundial, em 1953, "Fahrenheit 451", de Ray Bradubury é um texto que condena não só a opressão anti-intelectual nazista, mas principalmente o cenário dos anos 1950, revelando sua apreensão numa sociedade opressiva e comandada pelo autoritarismo do mundo pós-guerra. O livro se propõe a descrever um governo totalitário, num futuro incerto, mas próximo, que proíbe qualquer livro ou tipo de leitura, prevendo que o povo possa ficar instruído e se rebelar contra o status quo. Tudo é controlado e as pessoas só têm conhecimento dos fatos por aparelhos de TVs instalados em suas casas ou em praças ao ar livre. A leitura deixou de ser meio para aquisição de conhecimento crítico e tornou-se tão instrumental quanto a vida dos cidadãos, suficiente apenas para que saibam ler manuais e operar aparelhos.',
      imgCover: 'http://books.google.com/books/content?id=VKm1RC2LzJsC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70M9FZlrQGrOc3ssKOQFzx2xnL1FIkTDf15LsVPxnRkys7UFNUnb-E59rnjnqjfB1oMkSfN5DqY4UyKXrRz9SLR5mHwpnPWQwYYfhV5jLLLnCgMgj8vqOlexo6pB7NgBvaHyxhw&source=gbs_api'
    }
  }),
  methods: {
    searchBook(book) {
      this.$store.commit('BOOK_INFO', book)
      this.$router.push({ path: `/details/${book.id}` })
    }
  }
}
</script>

<style lang="scss">
.currently-reading-card {
  width: 331px;
  height: 100px;
  padding: 15px 0;
  background-color: #EEF5DB;
  border-radius: 0px 3px 3px 0px;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  background-image: url('~@/assets/circle-book-detail.png'), url('~@/assets/oval-curr-reading.png'), url('~@/assets/bar-book-detail.png'), url('~@/assets/oval-invisible-curr-reading.png');
  background-position: 72% -10%, 110% -60%, 107% 80%, 120% -160%;
  background-repeat: no-repeat;

  .book-info {
    width: 140px;
    overflow: hidden;
  }

  .book-img {
    width: 91px;
    height: auto;
    cursor: pointer;
  }

  .book-title-card {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .book-title-card:hover {
    text-decoration: underline;
  }

  .book-subtitle-card {
    font-size: 10px;
    color: #74776D;
  }

  .book-info-card {
    font-size: 10px;

    span {
      color: #FF6978;
    }
  }
}

</style>