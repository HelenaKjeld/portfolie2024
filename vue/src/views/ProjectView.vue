<template>
    <div class="project">
      
      <RouterLink to ="/" >
        <button  class="back">Back</button>
      </RouterLink>

    <div class="containerbbq">
        <div class="left">
            <div class="inder_left">
                <h2>{{ specificPortfolioItem.title }}</h2>
                <h4>{{ specificPortfolioItem.subTitle }}</h4>
                <p> {{ specificPortfolioItem.description }}</p>
                <!-- <p v-for="text in specificPortfolioItem.text" :key="text"> {{ text }}</p> -->
                <p class="work_with"> {{ specificPortfolioItem.WorkWith }}</p>
            </div>

            <div class="inder_right">
              <p v-for="text in specificPortfolioItem.text" :key="text"> {{ text }}</p>
            </div>
          </div>

        <div class="right">
            <img v-for="image in specificPortfolioItem.images" :key="image"  :src="image" alt="">
            <div class="youtobe_v">
              <iframe width="560" height="315" v-for="youtube_video in specificPortfolioItem.youtube_videos" :src="`https://www.youtube.com/embed/${youtube_video}?si=Dxt2ndEtjYTv_5DU`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
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
    flex-direction: column;
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
    flex-direction:row;
    flex: 1;
    margin-left: 80px;
    margin-right: 80px;
    justify-content: space-evenly;
}

.inder_left{
  width: 800px;
}

.inder_right{
  width: 800px;
}

.work_with{
  font-weight: 350;
  font-style: italic;
}

.right{
    /* display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    flex: 1; */
    display: flex;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 6%;
}

.right img{
    width: 30vw;
    /* height: 35vh; */
    padding-bottom: 25px;
}

video{
  width: 30vw;
}

.youtobe_v{
  margin-left: 15px;
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

  .right{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
 
.back{
    margin-top: 5px;
}





}
  </style>
  