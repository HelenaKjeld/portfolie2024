<template>
    <div class="project">
      

    <div><button class="back">Back</button></div>

    <div class="containerbbq">
        <div class="left">
            
            <div>
                <h2>Title BBQ</h2>
                <h4>exter okkko okkort</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi sit facere, autem rerum inventore? Pariatur ut vero ea aspernatur modi dignissimos nostrum! Iste quisquam doloribus pariatur! Laudantium, earum at.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi sit facere, autem rerum inventore? Pariatur ut vero ea aspernatur modi dignissimos nostrum! Iste quisquam doloribus pariatur! Laudantium, earum at.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi sit facere, autem rerum inventore? Pariatur ut vero ea aspernatur modi dignissimos nostrum! Iste quisquam doloribus pariatur! Laudantium, earum at.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi sit facere, autem rerum inventore? Pariatur ut vero ea aspernatur modi dignissimos nostrum! Iste quisquam doloribus pariatur! Laudantium, earum at.</p>
            </div>
          </div>
        <div class="right">
            <img src="/src/assets/BBQ/mockup computer og mobil.png" alt="">
            <img src="/src/assets/BBQ/a LOGO WHITE TEST black backgrund.png" alt="">
            <img src="/src/assets/BBQ/K logo black background.png" alt="">
        </div>
    </div>        


    </div>
  </template>
  
  <style scoped>



.containerbbq{
    display: flex;
    flex-direction: row;
    margin-top: 40px;
}

.back{
    text-decoration: none;
    border: #FF3E25;
    background-color: #FF3E25;
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
  