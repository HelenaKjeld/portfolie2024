<template>

<RouterLink to ="/" >
        <button  class="back">Back</button>
      </RouterLink>


    <div class="project">
     
     
    <div class="containerbbq">


      <div class="top_tit">
              <h1 >{{ specificPortfolioItem.title }}</h1>
            </div>
      
        <div class="left">
            <div class="inder_left">
                
                <h4>{{ specificPortfolioItem.subTitle }}</h4>
                <p> {{ specificPortfolioItem.description }}</p>
                <!-- <p v-for="text in specificPortfolioItem.text" :key="text"> {{ text }}</p> -->
                <p class="work_with"> {{ specificPortfolioItem.WorkWith }}</p>
                <img class="img_tools" v-for="image in specificPortfolioItem.tools" :key="image"  :src="image" alt="">
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

.project{
  animation: 1000ms ease-out 0ms 1 slideInFromLeft;
}

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

.top_tit {
  margin-left: 80px;
  
}

.top_tit h1 {
  font-size: 5rem;
  margin-bottom: 20px;
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
    gap: 30px;
}

.inder_left{
  width: 800px;
}

.img_tools{
  width: 50px;
  margin-top: 10px;
  margin-right: 20px;
}



@keyframes slideInFromLeft {
  0% {
    transform: translateX(-20%);
    opacity: 0%;
  }
  100% {
    transform: translateX(0);
    opacity: 100%;
  }
}


.inder_right{
  width: 800px;
}

.work_with{
  font-weight: 350;
  font-style: italic;
}

.right{
    display: flex;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 6%;
}

.right img{
    width: 40vw;
    padding-bottom: 25px;
}

video{
  width: 30vw;
}

.youtobe_v {
  position: relative;
  display: block;
  width: 90%; /* width of iframe wrapper */
  height: 0;
  margin: auto;
  margin-right: -8%;
  padding: 0% 0% 56.25%; /* 16:9 ratio */
  overflow: hidden;
}
.youtobe_v iframe {
  position: absolute;
  top: 0; bottom: 0; left: 0;
  width: 100%;
  height: 100%;
  border: 0;
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
    flex-direction:column;
    margin-left: 20px;
    margin-right: 20px;
  }
  .inder_left{
    width: 80%;
  }

  .inder_right{
    width: 80%;
  }

  
  .right img{
    width: 70vw;
    padding-bottom: 20px;
  }

  .right{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .youtobe_v{
    margin-right: auto;
  }
 
.back{
    margin-top: 5px;
}





}
  </style>
  