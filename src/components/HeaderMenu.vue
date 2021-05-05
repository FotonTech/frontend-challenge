<template>
  <div class="header-menu">
    <div class="header-content content flex">
      <div @click="$router.push({ path:'/' })" class="header-option">
        Home
      </div>
      <div class="header-option">
        Libraries
      </div>
      <div class="header-option">
        Profile
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header-menu {
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 1000;

  .header-content {
    gap: 20px;
  }

  .header-option {
    width: 100px;
    cursor: pointer;
    height: 40px;
    padding: 10px 0;
    text-align: center;
  }

  .header-option:hover {
    background-color: #EC6374;
  }
}
</style>