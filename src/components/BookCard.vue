<template>
  <div class="book-card flex flex-column justify-between">
    <div>
      <img @click="searchBook(book)" class="book-cover" :src="book.imgCover || require('@/assets/cover-not-found.jpg')">
    </div>
    <div>
      <p @click="searchBook(book)" class="book-title ellipsis">{{ book.title }}</p>
      <p class="book-author ellipsis">{{ book.author === 'Unkown author' ? '' : 'by' }} {{ book.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    searchBook(book) {
      this.$store.commit('BOOK_INFO', book)
      this.$router.push({ path: `/details/${book.id}` })
    }
  }
}
</script>

<style lang="scss">
.book-card {
  width: 100px;
  overflow: hidden;

  .book-cover {
    width: 100px;
    height: auto;
    border-radius: 5px;
    cursor: pointer;
  }

  .book-title {
    margin-top: 9px;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    color: rgba(49, 49, 49, 0.8);
  }

  .book-title:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .book-author {
    margin-top: 5px;
    font-size: 10px;
    font-weight: 900;
    line-height: 12px;
    color: rgba(49, 49, 49, 0.8);
  }
}
</style>