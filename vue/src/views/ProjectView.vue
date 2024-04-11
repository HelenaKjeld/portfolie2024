<template>
    <div class="project">
      

    <div><button class="back">Back</button></div>

    <div class="containerbbq">
        <div class="col_left">
            
            <div>
                <h2>Title BBQ</h2>
                <h4>exter okkko okkort</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi sit facere, autem rerum inventore? Pariatur ut vero ea aspernatur modi dignissimos nostrum! Iste quisquam doloribus pariatur! Laudantium, earum at.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi sit facere, autem rerum inventore? Pariatur ut vero ea aspernatur modi dignissimos nostrum! Iste quisquam doloribus pariatur! Laudantium, earum at.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi sit facere, autem rerum inventore? Pariatur ut vero ea aspernatur modi dignissimos nostrum! Iste quisquam doloribus pariatur! Laudantium, earum at.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi sit facere, autem rerum inventore? Pariatur ut vero ea aspernatur modi dignissimos nostrum! Iste quisquam doloribus pariatur! Laudantium, earum at.</p>
            </div>
          </div>
        <div class="col_right">
            <img src="/src/assets/BBQ/mockup computer og mobil.png" alt="">
            <img src="/src/assets/BBQ/a LOGO WHITE TEST black backgrund.png" alt="">
            <img src="/src/assets/BBQ/K logo black background.png" alt="">
        </div>
    </div>        

    <footer>
        <img src="/src/assets/logo footer.png" class="logo_footer" alt="logo footer"> 
        
    </footer>
    </div>
  </template>
  
  <style>



.containerbbq{
    display: flex;
    margin-top: 40px;
}

.back{
    text-decoration: none;
    border: #FF3E25;
    background-color: #FF3E25;
    color: #ffffff;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    /* margin-top: 20px;
    margin-bottom: 40px;
    margin-left: 50px; */
    position: absolute;
    top:120px;
    left:20px;
}

.col_left{
    width: 99vh;
    padding-left: 80px;
    padding-right: 30px;
}

.col_right{
    width: 50vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding-left: 80px;
}

.col_right img{
    width: 35vw;
    /* height: 35vh; */
    padding-bottom: 30px;
}
  @media (min-width: 1024px) {
    .project {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  