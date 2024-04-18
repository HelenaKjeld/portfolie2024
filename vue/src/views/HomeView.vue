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

  const categories=[
  {
        category : "UX",
        title : "UX"
    },
    {
        category : "Web",
        title : "Web"
    },
    {
        category : "Graphic design",
        title : "Graphic design"
    },
    {
        category : "Illustration",
        title : "Illustration"
    },
    {
        category : "",
        title : "ALL"
    },
  ]

</script>

<template>
  <main>
 
<div class="topcontainer">
    
        <button v-for="item in categories" :key="item.title"  
        :class="[
            {selected: selectedCategory === item.category},
            {unselected: selectedCategory != item.category},
        ]" 
        @click="selectedCategory = item.category"
        >
        {{ item.title }}
        </button>
</div>

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
    color: #e62721;
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
    border-radius: 30px;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    border-style: solid;
    border-width: 2px;
}

.selected{
    color: #e62721;
    background-color: #ffffff;
    border: #e62721;

}

.unselected{
    border: #e62721;
    background-color: #e62721;
    color: #ffffff;
}

.boxesrow1 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.box {
    height: 50vh;
    width: auto;
    color: rgba(0, 255, 255, 0);
    font-family: "Inter", sans-serif;
    font-size: medium;
    position: relative;
    overflow: hidden;
}


.box img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    position: absolute;
    z-index: -5;
}

.box:hover {
    color: #ffffff;
    background: #e62721; 
    // background: #ff3e25; 
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
    padding-top: 2em;
    padding-left: 3ex;
    height: 100%;
}



@media screen and (max-width: 700px) {
    .topcontainer{
    margin-left: 20px;
    margin-right: 20px;
    gap: 10px;
    }

  .boxesrow1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
 
  .box{
    width: 50vW;
    height: 25vh;
  }


}

@media screen and (max-width: 500px) {
  .boxesrow1 {
    display: grid;
    grid-template-columns: auto auto;
  }
 

}

</style>