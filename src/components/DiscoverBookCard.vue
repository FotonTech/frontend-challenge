<template>
  <div>
    <div class="discoverMainCard">
      <div class="flex">
        <div class="book-info flex flex-column justify-between">
          <div>
            <p @click="searchBook(book)" class="book-title-card ellipsis">{{ book.title }}</p>
            <p class="book-subtitle-card ellipsis">{{ book.author }}</p>
          </div>
          <p class="book-info-card ellipsis"><font-awesome-icon icon="chart-bar" /> 120+ Read Now</p>
        </div>
        <div class="img-content">
          <img class="book-img" :src="book.imgCover || require('@/assets/cover-not-found.jpg')" @click="searchBook(book)" alt="book-cover">
          <img class="triangle-detail" src="@/assets/triangle-book-detail.png">
          <img class="circle-detail" src="@/assets/circle-book-detail.png">
          <img class="bar-detail" src="@/assets/bar-book-detail.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscoverBookCard',
  data: () => ({
    book: {
      id: 'if5QDwAAQBAJ',
      title: '21 lições para o século 21',
      author: 'Yuval Noah Harari',
      description: 'O novo livro do autor de Sapiens e Homo Deus explora as grandes questões do presente e o que podemos fazer para melhorá-lo. Como podemos nos proteger de guerras nucleares, cataclismos ambientais e crises tecnológicas? O que fazer sobre a epidemia de fake news ou a ameaça do terrorismo? O que devemos ensinar aos nossos filhos? Em Sapiens, Yuval Noah Harari mostrou de onde viemos; em Homo Deus, para onde vamos. 21 lições para o século 21 explora o presente e nos conduz por uma fascinante jornada pelos assuntos prementes da atualidade. Seu novo livro trata sobre o desafio de manter o foco coletivo e individual em face a mudanças frequentes e desconcertantes. Seríamos ainda capazes de entender o mundo que criamos?',
      imgCover: 'http://books.google.com/books/publisher/content?id=if5QDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70ZjK3p747nqnQ-g3EYVbhgIUDsHT8tJHTp9RRpmB9Wil-WFfXvzmTC4oi788EUwn6ZDmfqbaPzvBTcaHFR3paUpBSjh-VCKMrR3DROrUC4FMKYWbB1-duy0Tnu3beOcbdG4_dO&source=gbs_api'
    },
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
.discoverMainCard {
  padding: 20px;
  background-color: #00173D;
  background-image: url('~@/assets/oval-discover-card.png');
  background-repeat: no-repeat;
  background-position: 0% 100%; 
  color: #FEFEFE;
  border-radius: 5px;
  width: 272px;
  height: 139px;
  position: relative;

  .book-info {
    width: 100%;
    overflow: hidden;
  }

  .book-title-card {
    font-weight: bold;
    font-size: 27px;
    line-height: 36px;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .book-title-card:hover {
    text-decoration: underline;
  }

  .book-subtitle-card {
    font-size: 14px;
    font-style: italic;
  }

  .book-info-card {
    font-size: 10px;
  }

  .img-content {
    width: 100%;
    text-align: right;
  }

  .book-img {
    width: 72px;
    height: auto;
    max-height: 100px;
    cursor: pointer;
  }

  .triangle-detail {
    position: absolute;
    top: 2.73%;
    right: 25.97%;
  }

  .circle-detail {
    position: absolute;
    top: 10.07%;
    right: 40.44%;
  }

  .bar-detail {
    position: absolute;
    right: 29.72%;
    bottom: 28.42%;
  }
}
</style>