<template>
    <div class="project">
      
      <RouterLink to ="/" >
        <button  class="back">Back</button>
      </RouterLink>

    <div class="containerbbq">
        <div class="left">
            
            <div>
                <h2>{{ specificPortfolioItem.title }}</h2>
                <h4>{{ specificPortfolioItem.subTitle }}</h4>
                <p> {{ specificPortfolioItem.description }}</p>
                
            </div>
          </div>
        <div class="right">
            <img v-for="image in specificPortfolioItem.images" :key="image"  :src="image" alt="">
            <video v-for="video in specificPortfolioItem.videos" controls autoplay muted loop :key="video" :src="video"></video>
        </div>
    </div>        


    </div>
  </template>

<script setup>
import {ref} from 'vue'
import { useRoute } from 'vue-router'
import gitPortfolio from '@/modules/gitPortfolio'
const {portfolioItems} = gitPortfolio()
const route = useRoute()
const id = ref(route.params.id)


const specificPortfolioItem = portfolioItems.value.find(item => item.id == id.value)



</script>
  
  <style scoped>



.containerbbq{
    display: flex;
    flex-direction: row;
    margin-top: 40px;
}

.back{
    text-decoration: none;
    border: #e62721;
    background-color: #e62721;
    color: #ffffff;
    height: 35px;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: -10px;
    margin-bottom: 50px;
    margin-left: 50px;
    position: absolute;
    top:120px;
    left:20px;
    cursor: pointer;
}

.left{
    width: 85%;
    padding-left: 80px;
    flex: 1;
}

.right{
    width: 2%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    flex: 1;
}

.right img{
    width: 45vw;
    /* height: 35vh; */
    padding-bottom: 20px;
}
  /* @media (min-width: 1024px) {
    .project {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  </style>
  