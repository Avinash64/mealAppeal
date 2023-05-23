<script setup>
import { reactive, ref, onMounted } from 'vue';
import Map from './Map.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const search = () => {
    return {
  "location": "41.0895249,-73.8419063",
  "range": 100,
  "price": 0,
  "restrictions": ["Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Shellfish-Free",
  "Halal",
  "Kosher",
  "Low-Sodium",
  "Sugar-Free",
  "Organic"]
}
}
const restaurantName = ref('Name');
const dish = ref('dish');
const price = ref(100);
const distance = ref(100);
const lat = ref(0);
const long = ref(0);
const preferences = ref(['Preferances']);


function getRandomRestaurant(jsonData) {
  // Parse the JSON data
  const restaurants = jsonData;

  // Select a random restaurant
  const randomRestaurantIndex = Math.floor(Math.random() * restaurants.length);
  const randomRestaurant = restaurants[randomRestaurantIndex];

  // Select a random menu item from the selected restaurant
  const randomMenuItemIndex = Math.floor(Math.random() * randomRestaurant.menu.length);
  const randomMenuItem = randomRestaurant.menu[randomMenuItemIndex];

  // Extract the restaurant coordinates
  const { latitude, longitude } = randomRestaurant.location;

  // Return the selected restaurant and menu item as an object


  restaurantName.value = randomRestaurant.name
  dish.value =  randomMenuItem.name
  price.value = randomMenuItem.price
  preferences.value = randomMenuItem.preferences
  lat.value = latitude
  long.value = longitude
  // Return the selected restaurant and menu item as an object
  return {
    latitude: latitude,
    longitude: longitude,
    restaurant: randomRestaurant.name,
    menuItem: randomMenuItem.name,
    price: randomMenuItem.price,
    preferences: randomMenuItem.preferences,
  };
}

const places = ref([
{
    "name": "Joe's Pizza",
    "location": {
      "latitude": 40.730610,
      "longitude": -73.986679
    },
    "menu": [
      {
        "name": "Classic Margherita",
        "price": 9.99,
        "preferences": ["Vegetarian", "Nut-Free"]
      },
      {
        "name": "Pepperoni Supreme",
        "price": 11.99,
        "preferences": ["Dairy-Free", "Shellfish-Free"]
      },
      {
        "name": "Garlic Knots",
        "price": 4.99,
        "preferences": ["Vegetarian", "Vegan"]
      }
    ]
  },
  {
    "name": "Burger Joint",
    "location": {
      "latitude": 40.728993,
      "longitude": -73.993416
    },
    "menu": [
      {
        "name": "Classic Cheeseburger",
        "price": 12.99,
        "preferences": ["Halal", "Kosher"]
      },
      {
        "name": "Bacon BBQ Burger",
        "price": 14.99,
        "preferences": ["Nut-Free"]
      },
      {
        "name": "Truffle Parmesan Fries",
        "price": 6.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Sushi Samba",
    "location": {
      "latitude": 40.742210,
      "longitude": -74.002553
    },
    "menu": [
      {
        "name": "Samba Roll",
        "price": 16.99,
        "preferences": ["Shellfish-Free"]
      },
      {
        "name": "Rainbow Sashimi",
        "price": 18.99,
        "preferences": ["Gluten-Free", "Dairy-Free"]
      },
      {
        "name": "Miso Black Cod",
        "price": 22.99,
        "preferences": ["Halal"]
      }
    ]
  },
  {
    "name": "Mama's Pasta",
    "location": {
      "latitude": 40.733011,
      "longitude": -73.997325
    },
    "menu": [
      {
        "name": "Spaghetti Bolognese",
        "price": 13.99,
        "preferences": ["Sugar-Free"]
      },
      {
        "name": "Fettuccine Alfredo",
        "price": 15.99,
        "preferences": ["Vegetarian"]
      },
      {
        "name": "Tiramisu",
        "price": 7.99,
        "preferences": ["Vegetarian", "Sugar-Free"]
      }
    ]
  },
  {
    "name": "Taco City",
    "location": {
      "latitude": 40.736057,
      "longitude": -73.991935
    },
    "menu": [
      {
        "name": "Carnitas Tacos",
        "price": 9.99,
        "preferences": ["Gluten-Free", "Dairy-Free"]
      },
      {
        "name": "Grilled Chicken Burrito",
        "price": 11.99,
        "preferences": ["Nut-Free", "Shellfish-Free"]
      },
      {
        "name": "Chips and Guacamole",
        "price": 5.99,
        "preferences": ["Vegetarian", "Vegan"]
      }
    ]
  }
]

)
getRandomRestaurant(places.value)
onMounted(() => {

}

)
</script>

<template>
    <div class="page">

        <nav class="navbar header">
            <div class="container-fluid h-100">
                <a class="navbar-brand" @click="router.push('/')" >Meal Appeal</a>

        <span class="navbar-text">
            <button class="btn btn-primary" @click="router.push('/search')">Search</button>
        </span>
    </div>
    
</nav>
<div class="results">
  <h1 class="title">{{ dish }}</h1>
  <div class="menu-item">
      <h2>{{ restaurantName }}</h2>
        <div class="price">{{price}}</div>
        <div class="preferances">{{preferences}}</div>
    </div>
    <div class="map">
        <Map v-bind:lat="lat" v-bind:long="long"></Map>
    </div>
    <button class="btn btn-primary w-75" @click="console.log(getRandomRestaurant(places))">Search Again</button>
    
</div>
<div class="footer"></div>
</div>
</template>

<style scoped>
.map {
    width: 100vw;
    max-width: 50vh;
    height: 100vw;
    max-height: 50vh;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.header {
  background-color: red;
  width: 100%;
}

.page {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #e8e8e8 ;
}

.results {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.footer {
    background-color: red;
    height: 5%;
    width: 100%;
}
</style>