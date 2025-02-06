<template>
       <header>
    <nav class="navbar">
            <RouterLink to ="/">PROJECTS</RouterLink>
            <RouterLink to ="/"> <img class="logo" src="../assets/mítt_logo_Xsmall.png" alt="Logo"></RouterLink>
           
            <RouterLink to ="/about">ABOUT</RouterLink>
    </nav>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>

a{
    text-decoration: none;
}

.navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ffffff;
    padding: 10px 20px;
    margin-top: 30px;
    font-family: "Inter", sans-serif;

}

:link {
    color: black;
}

:visited{
    color: black;
}

.logo {

    max-width: 100px; 
    min-width: 50px; 
    height: auto; 
    animation-name: rotate;
    animation-duration: 1s;
}

@keyframes rotate{
    100%{ transform: rotate(360deg);}
}

</style>