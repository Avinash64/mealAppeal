<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const users = ref(['w', 'ww', 'eee']);
const range = ref(100)

const price = ref(100)
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
//   location.value = `${position.coords.latitude},${position.coords.longitude}`
location.value = '40.71493611396789, -74.00209432381132'
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
  <div class="searchPage">
    <nav class="navbar header">
      <div class="container-fluid h-100">
        <a class="navbar-brand" @click="router.push('/')">Meal Appeal</a>

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
          <button class="btn btn-primary" @click="getLocation()" type="button">GPS</button>
        </div>
      </div>
    </div>
    <div>


      <label for="customRange1" class="form-label  r2">Range: <input class='form-control w-75' v-model="range"> ft</label>
      <input type="range" v-model="range" class="form-range" id="customRange1">
    </div>
    <div>

      <label for="customRange1" class="form-label  r2">Price: $<input class='form-control w-75' v-model="price"></label>
      <input type="range" class="form-range" v-model="price" id="customRange1">
    </div>
    <div> 
        
        <label>Preferences</label>
        <div v-for="restriction, index in restrictions" class="form-check">
            <input class="form-check-input" type="checkbox" value="" :id='restriction'>
            <label class="form-check-label" :for='restriction'>
                {{ restriction }}
            </label>
        </div>
    </div>
        
      <button class="btn btn-primary w-75" @click="search(); router.push('result')">Search</button>

      <div class="footer"></div>
  </div>
</template>

<style scoped>

.r2 {
    display: flex;
    align-items: center;
}

.header {
  background-color: red;

  width: 100%;

}
.footer {
    background-color: red;
    height: 5%;
    width: 100%;
}

.searchPage {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #e8e8e8 ;
}
</style>
