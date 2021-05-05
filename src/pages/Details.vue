<template>
  <div class="book-details">
    <div v-if="bookLoading">
      <div class="loading details-header content text-center">
        <font-awesome-icon icon="circle-notch" spin size="3x" />
      </div>
    </div>
    <div class="not-found details-header content text-center" v-else-if="!book || book.constructor !== Object || Object.keys(book).length === 0">
      <span>Not found</span>
    </div>
    <div v-else>
      <div class="details-header text-center">
        <span @click="$router.go(-1)" class="btn-back"><font-awesome-icon icon="arrow-left" /></span>
        <img v-if="!bookLoading" class="book-cover" :src="book.imgCover || require('@/assets/cover-not-found.jpg')" alt="book-cover">
      </div>
      <div class="details-content content">
        <p class="book-title">{{ book.title }}</p>
        <p class="book-author">{{ book.author }}</p>
        <p class="book-description" v-html="book.description"></p>
      </div>
      <details-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  components: {
    DetailsFooter: () => import('@/components/DetailsFooter.vue')
  },
  computed: {
    book() {
      return this.$store.getters.bookInfo
    },
    bookLoading() {
      return this.$store.getters.bookInfoLoading
    },
    routeParams() {
      return this.$route.params.bookId
    }
  },
  watch: {
    routeParams(params) {
      if (params) {
        this.$store.dispatch('searchBookById', params)
      }
    }
  },
  mounted() {
    if (this.routeParams && !this.book) {
      this.$store.dispatch('searchBookById', this.routeParams)
    }
  }
}
</script>

<style lang="scss">
.book-details {
  background-color: #f2f2f2;
  padding-bottom: 20px;
  .details-header {
    position: relative;
    height: 282px;
    background-color: #FFF6E5;
    background-image: url('~@/assets/oval-md-details.png'), url('~@/assets/oval-sm-details.png'), url('~@/assets/circle-details.png'), url('~@/assets/filled-blue-circle.png'), url('~@/assets/filled-pink-circle.png');
    background-position: 100% 0%, 73% 96%, 74% 33%, 22% 53%, 11% 47%;
    background-repeat: no-repeat;
    border-radius: 0 0 150px 0;

    .book-cover {
      height: 229px;
      width: auto;
      margin-top: 84px;
      border-radius: 5px;
      box-shadow: 0px 20px 20px rgba(121, 141, 67, 0.115084);;
    }

    .btn-back {
      position: absolute;
      left: 33px;
      top: 55px;
      cursor: pointer;
    }

    @media only screen and (min-width : 850px) {
      .btn-back {
        left: 20%;
      }
    }
  }

  .not-found {
    padding-top: 190px;
    font-style: italic;
  }

  .loading {
    padding-top: 170px;
  }

  .details-content {
    margin-top: 67px;

    .book-title {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 1.5px;
      font-weight: bold;
    }

    .book-author {
      margin-top: 7px;
      color: #FF6978;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.67px;
    }

    .book-description {
      margin-top: 10px;
      color: rgba(49, 49, 49, 0.6);
      font-size: 14px;
      line-height: 25px;
      letter-spacing: 0.2px;
    }
  }
}
</style>