<template>
  <div class="main-page">
    <div v-if="$mq !== 'md'">
      <header-menu />
    </div>
    <div class="content header">
      <input-search />
    </div>
    <div>
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <div v-if="$mq === 'md'">
      <main-footer />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    InputSearch: () => import('../components/InputSearch.vue'),
    MainFooter: () => import('../components/MainFooter.vue'),
    HeaderMenu: () => import('../components/HeaderMenu.vue')
  }
}
</script>

<style lang="scss">
.main-page {
  padding-bottom: 65px;

  .header {
    margin-top: 50px;
  }
}
</style>