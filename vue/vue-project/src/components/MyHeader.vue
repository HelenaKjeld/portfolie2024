<template>
       <header>
    <nav class="navbar">
        <div class="left">
            <RouterLink to ="/">PROJECTS</RouterLink>
        </div>
            <img class="logo" src="../assets/mítt_logo_Xsmall.png" alt="Logo">
        <div class="right">
            <RouterLink to ="/about">ABOUT</RouterLink>
        </div>
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

.logo {
    width: 50%; /* Adjust the width as necessary, it scales with the viewport */
    max-width: 100px; /* Maximum size of the logo */
    min-width: 50px; /* Minimum size of the logo */
    height: auto; /* Keeps the aspect ratio intact */
}

</style>