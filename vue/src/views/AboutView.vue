<template>

<div class="about_me">
      <div class="image_of_me"><img class="MeImg" src="/src/assets/round.png" alt=""></div>
        
      <div class="text_about_me">
                <h1>Helena Kjeld</h1>
                <h3>Graphic designer, Illustrator <br />
                    & Multimediedesigner</h3>
            <p>Welcome to my website! My name is Helena and I am an aspiring Multimedia Designer with background in Graphic Design and Illustration. 
              My passion is to create art with stories. I am inspired by simplistic and colorful designs. 
              I get my inspiration from food packaging designs, posters, movies, etc. 
              You are welcome to checkout my projects and have a look and hopefully something inspires you. 
              You are welcome to contact me with Email or LinkedIn. 
                </p>
        </div>
        <div class="contact">
            <h3>Contact</h3>
            <a href="https://www.linkedin.com/in/helena-kjeld/" target="_blank"> <p>linkedin.com/in/helena-kjeld</p></a>
            <a href="mailto:helenakjeld@gmail.com" ><p> helenakjeld@gmail.com</p></a>
            <a href="https://indd.adobe.com/view/c17246aa-4b45-4402-8a4e-99122b5ca0dd" target="_blank"><p>CV: link til cv/ PDF</p></a>
      </div>
</div>



<div class="video">

  <iframe width="560" height="315" src="https://www.youtube.com/embed/uYm7qFC54ok?si=ANvbNLo6ILC5t0q3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>

</template>

<style>



.about_me{
    margin-top: 240xp;
    padding-top: 70px;
    gap: 20px;
    margin-right: 30px;
    display: flex;
    flex-direction: row
}

.MeImg{
    width: 80%;
    float: right;
}

.image_of_me{
    flex: 1;
    margin-top: 10px;
}

.text_about_me{
    flex: 1;
    margin-right: 40px;
}

.text_about_me h3{
    font-weight: 350;
    font-style: italic;
    color: #e62721;
}

.text_about_me h1{
    color: #e62721;
}


.contact{
    flex: 0,5;
    color: #e62721;
}

.contact a{
  direction: none;
  color: #e62721;
}


.about_me{
    display: flex;
    justify-content: center;

}

.video{
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
}

@media screen and (max-width: 700px) {
  .about_me{
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    margin-right: 0px;
  }

  .MeImg{
    width: 80%;
  }
  .image_of_me{
    display: flex;
    justify-content: center;
    align-items: center;
}
  .text_about_me{
    margin-left: 20px;
  }
  .contact{
    margin-left: 20px;
  }
}
</style>
