<template>
  <div>
    <input v-model="searchParams" class="searchInput" placeholder="Search book" type="text" />
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  data: () => ({
    timeout: {}
  }),
  watch: {
    searchParams() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        if (!this.searchParams) return
        if (this.$route.name !== 'search') {
          this.$router.push({ path: '/search' })
        }
        this.$store.dispatch('getBookList', this.searchParams)
      }, 1000)
    }
  },
  computed: {
    bookList() {
      return this.$store.getters.bookList
    },
    searchParams: {
      get() {
        return this.$store.getters.searchParams
      },
      set(value) {
        this.$store.commit('SEARCH_PARAMS', value)
      }
    }
  }
}
</script>

<style lang="scss">
.searchInput {
  padding: 10px 20px;
  padding-left: 40px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  background-color: #FDFCFC;
  background-image: url('~@/assets/search-icon.png');
  background-position: 18px 15px;
  background-repeat: no-repeat;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
}

.searchInput::placeholder {
  color: #54565A;
  font-size: 16px;
}
</style>