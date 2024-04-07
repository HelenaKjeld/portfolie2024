<script setup>
import { RouterView } from 'vue-router'
import MyHeader from "./components/MyHeader.vue";

</script>

<template>
  <div class ="webborder">

  <MyHeader />
  <RouterView />
  </div>
</template>

<style lang="scss">

/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap') ;
 */
 body, #app {
  font-family: "Inter", sans-serif;
}
.webborder {
  margin: -10px;
}
</style>

