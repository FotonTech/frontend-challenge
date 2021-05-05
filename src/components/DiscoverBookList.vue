<template>
  <div class="discover-book-list">
    <div class="content flex justify-between">
      <span class="section-title">Discover new book</span>
      <a>More</a>
    </div>
    <div :class="[$mq === 'lg' ? 'content pl-1 mt-1' : 'pl-1 mt-1']">
      <div class="flex items-center">
        <discover-book-card />
        <preview-book-card class="ml-1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscoverBookList',
  components: {
    DiscoverBookCard: () => import('./DiscoverBookCard.vue'),
    PreviewBookCard: () => import('./PreviewBookCard.vue')
  }
}
</script>

<style lang="scss">
.discover-book-list {
  background-image: url('~@/assets/oval-discover-bg.png');
  background-repeat: no-repeat;
  background-position: 100% 10%;
  overflow: hidden;
}
</style>