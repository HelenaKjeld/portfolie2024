<script setup>

  import { ref, computed } from 'vue'/* */

  import gitPortfolio from "@/modules/gitPortfolio"
  const { portfolioItems} = gitPortfolio()

  let selectedCategory = ref('') /* */

  const filteredPortfolioItems = computed (() =>{
    if (selectedCategory.value == '') {
      return portfolioItems.value
    }
    else { 
      return portfolioItems.value.filter(item => item.category.includes( selectedCategory.value ) ) }
  }) /* */

</script>

<template>
  <main>
 
    <div class="topcontainer">
       

        <button @click="selectedCategory = 'UX'"><span>UX</span></button> 
        <button @click="selectedCategory = 'Web'"><span>Web</span></button>
        <button @click="selectedCategory = 'Graphic design'"><span>Graphic design</span></button>
        <button @click="selectedCategory = 'Illustraton'"><span>Illustration</span></button>
        <button @click="selectedCategory = ''"><span>ALL</span></button>
        
        <!-- <h4>UX</h4>
        <h4>Web</h4>
        <h4>Lllustraton</h4>
        <h4>Graphic design</h4> 
        <h4>ALL</h4>-->

</div>


<!-- <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">

    <h2>{{ portfolioItem.title }}</h2>
    <h2>{{ portfolioItem.subTitle }}</h2>
    <p>{{ portfolioItem.description }}</p>
    <p>{{ portfolioItem.id }}</p>

    <p :class="portfolioItem.category[0]">{{ portfolioItem.category }}</p>

    <img :src="portfolioItem.thumbnail" alt="">
    <div v-if="portfolioItem.link">
        <a :href="portfolioItem.link">Link</a>
    </div>
    <div v-else>

    </div>
</div> -->


<div  class="boxesrow1">

    <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem.id" class="box">
        <RouterLink :to="{ path: 'project/' + portfolioItem.id}">
            <img :src="portfolioItem.thumbnail" alt="">
            <div class="content"> 
                <h4>{{ portfolioItem.title }}</h4>
                <p>{{ portfolioItem.subTitle }}</p> 
            </div>
        </RouterLink>
    </div>
</div>

  </main>
</template>

<style lang="scss" >



.topcontainer{
    color: #FF3E25;
    display: flex;
    flex-direction: row;
    justify-content:center;
    gap: 20px;
    margin-top: 5vh;
    margin-bottom: 2vh;
    font-family: "Inter", sans-serif !important;
    text-decoration: none;
    height: 35px;
    padding-bottom: 20px;
}

.topcontainer button {
    text-decoration: none;
    border: #FF3E25;
    background-color: #FF3E25;
    color: #ffffff;
    border-radius: 30px;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
}

.boxesrow1 {
    display: flex;
    flex-direction: row;
}

.box {
    height: 50vh;
    width: 25vw;
    color: rgba(0, 255, 255, 0);
    // padding-top: 2em;
    // padding-left: 3ex;
    font-family: "Inter", sans-serif;

    font-size: medium;
}

.box img{
    height: 50vh;
    width: 25vw;
    background-size: cover;
    background-position: center;
    z-index: 1;
    opacity: 50%;

}

.box:hover {
    background-color: blue;
    color: #ffffff;
    background: #ff3e25; 
}

.box a {
    color: rgba(0, 255, 255, 0);
}

.box:hover a {
    color: #ffffff;
    text-decoration: none;
}



.content{
    z-index: 4;
}

</style>