<template>
<div class="about_row">
      <div class="image_of_me"><img class="MeImg" src="/src/assets/round.png" alt=""></div>
        
      <div class="text_about_me">
                <h1>Helena Kjeld</h1>
                <h3>Graphic designer, Illustrator <br />
                    & Multimediedesigner</h3>
            <p>jdjoqwdi qowdiw qliff oweif  oiejf  
                oiwef lkjeshfæo skæfj
                w peifu wkefh  owief ijfe iwefj  
                kjf dkjfls dlfwi kif s,jf f wkefj efkjew 
                dflknf
                
                ,jsnfkejb fgækwejr wækrg gtækjwr
                ekæjger 
                geækjweg gwkurg gwækjrg mgelk
                efhæwieu wfei wf wæiub
                </p>
        </div>
        <div class="contact">
            <h3>Contact</h3>
            <p>linkedin.com/in/helena-kjeld</p>
            <p> hk0209v8@hotmail.com</p>
            <p>CV: link til cv/ PDF</p>
      </div>
</div>


</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.about_row{
    margin-top: 240xp;
    padding-top: 70px;
    gap: 20px;
    margin-right: 30px;
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
}

.text_about_me h3{
    font-weight: 350;
    font-style: italic;
}



.contact{
    flex: 0,5;
}

.about_row{
    display: flex;
    justify-content: center;

}


</style>
