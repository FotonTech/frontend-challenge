<template>
  <div>
    <div class="content flex justify-between">
      <span class="section-title">Currently Reading</span>
      <a>All</a>
    </div>
    <div class="mt-2">
      <div :class="[$mq === 'lg' ? 'content' : '']">
        <currently-reading-card />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentlyReading',
  components: {
    CurrentlyReadingCard: () => import('./CurrentlyReadingCard.vue')
  }
}
</script>

<style>

</style>