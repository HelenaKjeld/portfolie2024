<script setup></script>

<template>
  <main>
 
    <div class="topcontainer">
        <!-- <a href="#" class="">UX</a> -->
         <!-- <h3 @click="selectedCategory = 'UX'">UX</h3> 
         <h3 @click="selectedCategory = 'Wed'">Wed</h3>
         <h3 @click="selectedCategory = 'Lllustraton'">Lllustraton</h3>
         <h3 @click="selectedCategory = 'Graphic design'">Graphic design</h3>
         <h3 @click="selectedCategory = ''">ALL</h3> -->

        <button @click="selectedCategory = 'UX'"><h3>UX</h3></button> 
        <button @click="selectedCategory = 'Web'"><h3>Web</h3></button>
        <button @click="selectedCategory = 'Lllustraton'"><h3>Lllustraton</h3></button>
        <button @click="selectedCategory = 'Graphic design'"><h3>Graphic design</h3></button>
        <button @click="selectedCategory = ''"><h3>ALL</h3></button>
        
        <!-- <h4>UX</h4>
        <h4>Web</h4>
        <h4>Lllustraton</h4>
        <h4>Graphic design</h4> 
        <h4>ALL</h4>-->

</div>

<div class="boxesrow1">
    <div class="box box1">
        <div class="content"> 
            <h4>text og okkurt</h4>
            <p>Duck</p> 
        </div>
    </div>
    <div class="box box2"><h4>text og okkurt</h4><p>Duck</p></div>
    <div class="box box3"><h4>text og okkurt</h4><p>Duck</p></div>
    <div class="box box4"><h4>text og okkurt</h4><p>Duck</p></div>

</div>

<div class="boxesrow2">
    <div class="box box5"><h4>text og okkurt</h4><p>Duck</p></div>
    <div class="box box6"><h4>text og okkurt</h4><p>Duck</p></div>
    <div class="box box7"><h4>text og okkurt</h4><p>Duck</p></div>
    <div class="box box8"><h4>text og okkurt</h4><p>Duck</p></div>
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
}

.topcontainer button {
    text-decoration: none;
    border: #FF3E25;
    background-color: #FF3E25;
    color: #ffffff;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
}

.boxesrow1 {
    display: flex;
    flex-direction: row;
}

.box {
    height: 50vh;
    width: 25vw;
    color: rgba(0, 255, 255, 0);
    padding-top: 2em;
    padding-left: 3ex;
    font-family: "Inter", sans-serif;
    background-size: cover;
    background-position: center;
    font-size: medium;
}

.box:hover {
    background-color: blue;
    color: #ffffff;
    background: #ff3e25; 
}


.content{
    z-index: 2;
}



.box1{
    background-color: rgb(224, 36, 36);
    background-image: url("img/1.jpg");
}


.box2{
    background-color: rgb(196, 208, 29);
    background-image: url("img/4.jpg");
}

.box3{
    background-color: rgb(39, 209, 36);
}

.box4{
    background-color: rgb(22, 198, 198);
}

.boxesrow2 {
    display: flex;
    flex-direction: row;
}

.box5{
    background-color: rgb(36, 83, 224);
}

.box6{
    background-color: rgb(110, 29, 208);
}

.box7{
    background-color: rgb(209, 36, 198);
}

.box8{
    background-color: rgb(198, 22, 89);
}

</style>