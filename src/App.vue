<script setup>
import { ref } from 'vue';
const users = ref(['w', 'ww', 'eee']);
const range = ref(100)

const price = ref(0)
const location = ref('Enter location')
const restrictions = ref(["Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Shellfish-Free",
  "Halal",
  "Kosher",
  "Low-Sodium",
  "Sugar-Free",
  "Organic"]);


var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.")
  }
}

function showPosition(position) {
  console.log(`${position.coords.latitude, position.coords.longitude}`)
  location.value = `${position.coords.latitude},${position.coords.longitude}`
}

const search = () => {
  let searchData = {
    location: location.value,
    range: range.value,
    price: price.value,
    restrictions: restrictions.value
  }
  console.log(searchData)
}
</script>

<template>
  <div>
    <nav class="navbar header">
      <div class="container-fluid h-100">
        <a class="navbar-brand" routerLink="/">Meal Appeal</a>

        <span class="navbar-text">
          <button class="btn btn-primary">Search</button>
        </span>
      </div>

    </nav>

    <div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="location" aria-label="Enter location"
          aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary" @click="getLocation()" type="button">Button</button>
        </div>
      </div>
    </div>
    <div>


      <label for="customRange1" class="form-label">Range: <input v-model="range"> ft</label>
      <input type="range" v-model="range" class="form-range" id="customRange1">
    </div>
    <div>

      <label for="customRange1" class="form-label">Price: $<input v-model="price"></label>
      <input type="range" class="form-range" v-model="price" id="customRange1">
    </div>
      <label>Preferences</label>
      <div v-for="restriction, index in restrictions" class="form-check">
        <input class="form-check-input" type="checkbox" value="" :id='restriction'>
        <label class="form-check-label" :for='restriction'>
          {{ restriction }}
        </label>
      </div>

      <button class="btn btn-primary w-75" @click="search()">Search</button>

  </div>
</template>

<style scoped>
.header {
  background-color: red;
}
</style>
