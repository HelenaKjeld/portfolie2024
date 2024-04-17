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
                <p> {{ specificPortfolioItem.text }}</p>
                <p class="work_with"> {{ specificPortfolioItem.WorkWith }}</p>
                
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
    /* width: 85%; */
    /* padding-left: 80px; */
    display: flex;
    flex-direction:column;
    flex: 1;
    margin-left: 80px;
}

.work_with{
  font-weight: 350;
  font-style: italic;
}

.right{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    flex: 1;
}

.right img{
    width: 30vw;
    /* height: 35vh; */
    padding-bottom: 20px;
}

video{
  width: 30vw;
}

@media screen and (max-width: 700px) {
  .containerbbq {
    display: flex;
    flex-direction: column;
  
  }
  .left{
    margin-left: 20px;
    margin-right: 20px;
  }
  .right img{
    width: 70vw;
    padding-bottom: 20px;
  }
 
.back{
    margin-top: 5px;
}

}
  </style>
  