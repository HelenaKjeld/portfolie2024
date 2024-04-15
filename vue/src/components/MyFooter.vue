<template>
    <footer>
        <img src="/src/assets/logo_footer.png" class="logo_footer" alt="logo footer"> 
        
        <div class="footerlinks">
                <div class="links_footer"> 
                        <img src="/src/assets/icons/email_red.png" alt="">
                        <a href="hk0209v8@hotmail.com"> hk0209v8@hotmail.com </a> 
                </div>
                <div class="links_footer">
                        <img src="/src/assets/icons/linkin_red.png" alt="">
                        <a href="https://www.linkedin.com/in/helena-kjeld/"> linkedin</a> 
                </div>
                <div class="links_footer">
                        <img src="/src/assets/icons/instagram_red.png" alt=""> 
                        <a href="https://www.instagram.com/provo_art/?hl=da"> instagram</a> 
                </div>
        </div>
    
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

footer{
    display: flex;
    flex-direction: row;
  
}


.logo_footer{
    height: 20%;
    width: 20%;
}

.footerlinks{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex: 1;
    margin-top: 50px;
}

a{
    text-decoration: none;
    color: #e62721;
}

.links_footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

}

.links_footer img{
    width: 30px;

}


</style>