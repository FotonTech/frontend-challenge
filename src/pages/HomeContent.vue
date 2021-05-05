<template>
  <div>
    <div class="mt-3 content flex justify-start">
      <span class="homeName">Hi, <span class="homeNameContrast">{{ userName }}</span><img class="hand-icon" src="@/assets/hand-home.png"></span>
    </div>
    <div class="mt-3">
      <discover-book-list  />
      <currently-reading-section class="mt-4" />
      <reviews-of-the-days class="mt-4" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    DiscoverBookList: () => import('../components/DiscoverBookList.vue'),
    CurrentlyReadingSection: () => import('../components/CurrentlyReadingSection.vue'),
    ReviewsOfTheDays: () => import('../components/ReviewsOfTheDays.vue')
  },
  data: () => ({
    userName: 'Mehmed Al Fatih'
  }),
  mounted() {
    this.$store.commit('SEARCH_PARAMS', '')
  }
}
</script>

<style lang="scss">
.homeName {
  font-size: 24px;

  .homeNameContrast {
    color: #EC6374;
    font-weight: 500;
  }

  .hand-icon {
    margin-left: 11px;
  }
}
</style>