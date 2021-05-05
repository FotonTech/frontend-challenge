<template>
  <div>
    <div class="content text-center mt-3" v-if="bookListLoading">
      <font-awesome-icon icon="circle-notch" spin />
    </div>
    <div class="content text-center mt-3" v-else-if="bookList.length === 0">
      <span class="void-search">No results for this search</span>
    </div>
    <div v-else class="search-content content">
      <book-card v-for="(book, index) of bookList" :key="index" :book="book" />
      <br />
      <infinite-loading spinner="spiral" @infinite="infiniteHandler">
        <div slot="no-more">No more books for this search</div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'SearchContent',
  components: {
    BookCard: () => import('@/components/BookCard.vue'),
    InfiniteLoading
  },
  computed: {
    bookList() {
      return this.$store.getters.bookList
    },
    bookListLoading() {
      return this.$store.getters.bookListLoading
    },
    searchParams() {
      return this.$store.getters.searchParams
    },
    page: {
      set(value) {
        this.$store.commit('SET_PAGE', value)
      },
      get() {
        return this.$store.getters.page
      }
    }
  },
  methods: {
    async infiniteHandler(state) {
      this.page += 1
      await this.$store.dispatch('getBookList', this.searchParams)
      state.loaded()
    }
  }
}
</script>

<style lang="scss">
.search-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px 15px;
  margin-top: 42px;

  & > * + * {
    margin: 10px 15px;
  }

  .infinite-loading-container {
    width: 100%;
    margin: 30px 0;
    font-style: italic;
    font-size: 14px;
  }
}

.void-search {
  font-size: 14px;
  font-style: italic;
}
</style>