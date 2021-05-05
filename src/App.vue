<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #F2F2F2;
  color: #3F4043;
}

a {
  text-decoration: none;
  color: #4ABDF1;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

.mt-1 {
  margin-top: 10px;
}

.mt-2 {
  margin-top: 20px;
}

.mt-3 {
  margin-top: 30px;
}

.mt-4 {
  margin-top: 40px;
}

.mt-5 {
  margin-top: 50px;
}

.mt-6 {
  margin-top: 60px;
}

.ml-1 {
  margin-left: 10px;
}

.pl-1 {
  padding-left: 20px;
}

.text-center {
  text-align: center;
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.justify-start {
  justify-content: start;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.content {
  padding: 0 20px;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.section-title {
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.5px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media only screen and (min-width : 850px) {
  .content {
    padding: 0 20%;
  }
}
</style>
