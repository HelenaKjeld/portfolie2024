<script setup>
import { RouterView } from 'vue-router'
import MyHeader from "./components/MyHeader.vue";

</script>

<template>
  <div class ="webborder">

  <MyHeader />
  <RouterView />
  </div>
<!-- anime text or alt -->
<!-- <Transition mode="out-in" name="slid-fade">
<RouterView/>
</Transition> -->


<!-- <RouterView v-slot="{ Component }">
  <Transition mode="out-in" name="bounce">
    <component :is="Component"></component>
  </Transition>
</RouterView>
 -->
</template>

<style lang="scss">

// .bounce-enter-active{
//   animation: bounce-in 0.8s;
// }
// .bounce-leave-active{
//   animation: bounce-out 0.8s
// }
// @keyframes bounce-in {
//   0%{
//     transform: scale(0.9);
//   }
//   50%{
//     transform: scale(0.9);
//   }
//   100%{
//     transform: scale(0.9);
//   }
// }
// @keyframes bounce-out {
//   0%{
//     transform: scale(1);
//   }
//   50%{
//     transform: scale(1.1);
//   }
//   100%{
//     transform: scale(0.9);
//     opacity: 0;
//   }
// }

.fade-enter-active, .fade-leave-active{
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slid-fade-enter-active, .slid-fade-active{
  transition: all 0.5s ease;
}

.slid-fade-enter-from, .slid-fade-leave-to {
/*   transform: translateY(20px);
  transform: translateX(20px); */
  transform: translate(-20px,20px);
  opacity: 0;
}


/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap') ;
 */
 body, #app {
  font-family: "Inter", sans-serif;
}

body {
  margin: 0;
}

/* Hvis du har style der skal være på alle sider, så smid det her */
</style>

