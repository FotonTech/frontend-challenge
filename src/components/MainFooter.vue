<template>
  <div class="main-footer flex text-center">
    <div @click="goHome">
      <font-awesome-icon icon="home" />
      <br />
      Home
    </div>
    <div>
      <font-awesome-icon icon="book" />
      <br />
      Libraries
    </div>
    <div>
      <font-awesome-icon icon="user" />
      <br />
      Profile
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
  methods: {
    goHome() {
      if (this.$route.name !== 'home')
      this.$router.push({ path:'/' })
    }
  }
}
</script>

<style lang="scss">
.main-footer {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 59px;
  z-index: 1000;
  padding: 10px 0;

  div {
    width:33.333%;
  }

  div:hover {
    cursor: pointer;
  }
}
</style>