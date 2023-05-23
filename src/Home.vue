<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="homePage">
    
    <nav class="navbar header">
            <div class="container-fluid h-100">
                <a class="navbar-brand" @click="router.push('/')">Meal Appeal</a>

        <span class="navbar-text">
            <button class="btn btn-primary" @click="router.push('/search')">Search</button>
        </span>
    </div>

</nav>

<h1 class="cover-heading" >Meal Appeal</h1>
        <h3 class="cover-heading" style="font-size: xx-large;">Never lose time trying to find a place to eat again</h3>
        <p class="lead">
          <button  class="btn btn-lg btn-primary" @click="router.push('/search')">Find a Place to Eat</button>
        </p>
      
<div class="footer"></div>
  </div>
  </template>
  

  
  <style scoped>
  .homePage {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url(https://static01.nyt.com/images/2022/09/29/travel/36hours-nyc11/36hours-nyc11-mobileMasterAt3x-v2.jpg);
    background-size: cover;
    background-color: rgb(212, 212, 212);
    background-blend-mode:soft-light;
    text-align: center;
  }
  .header {
  background-color: red;

  width: 100%;

}
.footer {
    background-color: red;
    height: 5vh;
    width: 100%;
}
  </style>