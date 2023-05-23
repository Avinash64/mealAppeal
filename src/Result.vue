<script setup>
import { reactive, ref, onMounted } from 'vue';
import Map from './Map.vue';
import { useRouter } from 'vue-router';

const promoted = ref(Math.random())
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
  promoted.value = Math.random()
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
  },
  {
    "name": "The Steakhouse",
    "location": {
      "latitude": 40.759784,
      "longitude": -73.977972
    },
    "menu": [
      {
        "name": "T-bone Steak",
        "price": 29.99,
        "preferences": []
      },
      {
        "name": "Grilled Salmon",
        "price": 24.99,
        "preferences": []
      }
    ]
  },
  {
    "name": "Café Italia",
    "location": {
      "latitude": 40.764593,
      "longitude": -73.981028
    },
    "menu": [
      {
        "name": "Margherita Pizza",
        "price": 14.99,
        "preferences": ["Vegetarian"]
      },
      {
        "name": "Chicken Parmesan",
        "price": 17.99,
        "preferences": []
      },
      {
        "name": "Tiramisu",
        "price": 9.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Sushi Express",
    "location": {
      "latitude": 40.756846,
      "longitude": -73.975255
    },
    "menu": [
      {
        "name": "California Roll",
        "price": 12.99,
        "preferences": []
      },
      {
        "name": "Salmon Nigiri",
        "price": 8.99,
        "preferences": []
      },
      {
        "name": "Miso Soup",
        "price": 4.99,
        "preferences": ["Vegetarian", "Vegan"]
      }
    ]
  },
  {
    "name": "Spice Fusion",
    "location": {
      "latitude": 40.762468,
      "longitude": -73.984714
    },
    "menu": [
      {
        "name": "Pad Thai",
        "price": 15.99,
        "preferences": ["Vegetarian"]
      },
      {
        "name": "Green Curry",
        "price": 16.99,
        "preferences": ["Vegetarian", "Vegan"]
      },
      {
        "name": "Mango Sticky Rice",
        "price": 8.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Bistro 52",
    "location": {
      "latitude": 40.768173,
      "longitude": -73.978954
    },
    "menu": [
      {
        "name": "Filet Mignon",
        "price": 32.99,
        "preferences": []
      },
      {
        "name": "Shrimp Scampi",
        "price": 26.99,
        "preferences": ["Shellfish-Free"]
      },
      {
        "name": "Crème Brûlée",
        "price": 10.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Taste of India",
    "location": {
      "latitude": 40.763647,
      "longitude": -73.985587
    },
    "menu": [
      {
        "name": "Butter Chicken",
        "price": 18.99,
        "preferences": []
      },
      {
        "name": "Vegetable Biryani",
        "price": 15.99,
        "preferences": ["Vegetarian", "Vegan"]
      },
      {
        "name": "Gulab Jamun",
        "price": 7.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "The Burger Bar",
    "location": {
      "latitude": 40.767427,
      "longitude": -73.979615
    },
    "menu": [
      {
        "name": "Classic Cheeseburger",
        "price": 12.99,
        "preferences": []
      },
      {
        "name": "BBQ Bacon Burger",
        "price": 14.99,
        "preferences": []
      },
      {
        "name": "Sweet Potato Fries",
        "price": 6.99,
        "preferences": ["Vegetarian", "Vegan"]
      }
    ]
  },
  {
    "name": "Noodle House",
    "location": {
      "latitude": 40.765985,
      "longitude": -73.982831
    },
    "menu": [
      {
        "name": "Beef Chow Mein",
        "price": 13.99,
        "preferences": []
      },
      {
        "name": "Vegetable Lo Mein",
        "price": 12.99,
        "preferences": ["Vegetarian", "Vegan"]
      },
      {
        "name": "Egg Drop Soup",
        "price": 4.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Pizzeria Bella",
    "location": {
      "latitude": 40.766548,
      "longitude": -73.984221
    },
    "menu": [
      {
        "name": "Pepperoni Pizza",
        "price": 14.99,
        "preferences": []
      },
      {
        "name": "Margherita Pizza",
        "price": 13.99,
        "preferences": ["Vegetarian"]
      },
      {
        "name": "Caprese Salad",
        "price": 8.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Thai Garden",
    "location": {
      "latitude": 40.765207,
      "longitude": -73.982101
    },
    "menu": [
      {
        "name": "Green Curry",
        "price": 16.99,
        "preferences": ["Vegetarian", "Vegan"]
      },
      {
        "name": "Pad See Ew",
        "price": 14.99,
        "preferences": []
      },
      {
        "name": "Mango Sticky Rice",
        "price": 7.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Taco Fiesta",
    "location": {
      "latitude": 40.766951,
      "longitude": -73.985592
    },
    "menu": [
      {
        "name": "Chicken Tacos",
        "price": 11.99,
        "preferences": []
      },
      {
        "name": "Vegetable Quesadilla",
        "price": 10.99,
        "preferences": ["Vegetarian"]
      },
      {
        "name": "Churros",
        "price": 5.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Mediterranean Delight",
    "location": {
      "latitude": 40.762163,
      "longitude": -73.979021
    },
    "menu": [
      {
        "name": "Chicken Shawarma",
        "price": 15.99,
        "preferences": []
      },
      {
        "name": "Falafel Platter",
        "price": 13.99,
        "preferences": ["Vegetarian", "Vegan"]
      },
      {
        "name": "Baklava",
        "price": 6.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Pasta Paradise",
    "location": {
      "latitude": 40.764918,
      "longitude": -73.980517
    },
    "menu": [
      {
        "name": "Chicken Alfredo",
        "price": 17.99,
        "preferences": []
      },
      {
        "name": "Vegetable Primavera",
        "price": 15.99,
        "preferences": ["Vegetarian"]
      },
      {
        "name": "Tiramisu",
        "price": 8.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Café Paris",
    "location": {
      "latitude": 40.769287,
      "longitude": -73.980656
    },
    "menu": [
      {
        "name": "Croque Monsieur",
        "price": 13.99,
        "preferences": []
      },
      {
        "name": "Quiche Lorraine",
        "price": 12.99,
        "preferences": ["Vegetarian"]
      },
      {
        "name": "Crème Brûlée",
        "price": 9.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Indian Spice",
    "location": {
      "latitude": 40.767687,
      "longitude": -73.982791
    },
    "menu": [
      {
        "name": "Butter Chicken",
        "price": 16.99,
        "preferences": []
      },
      {
        "name": "Palak Paneer",
        "price": 14.99,
        "preferences": ["Vegetarian"]
      },
      {
        "name": "Gulab Jamun",
        "price": 7.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Seafood Cove",
    "location": {
      "latitude": 40.768735,
      "longitude": -73.983621
    },
    "menu": [
      {
        "name": "Lobster Roll",
        "price": 19.99,
        "preferences": ["Shellfish-Free"]
      },
      {
        "name": "Shrimp Scampi",
        "price": 18.99,
        "preferences": []
      },
      {
        "name": "Key Lime Pie",
        "price": 7.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Mama Mia's",
    "location": {
      "latitude": 40.767328,
      "longitude": -73.984418
    },
    "menu": [
      {
        "name": "Margherita Pizza",
        "price": 13.99,
        "preferences": ["Vegetarian"]
      },
      {
        "name": "Meatball Sub",
        "price": 15.99,
        "preferences": []
      },
      {
        "name": "Cannoli",
        "price": 6.99,
        "preferences": ["Vegetarian"]
      }
    ]
  },
  {
    "name": "Taste of Japan",
    "location": {
      "latitude": 40.766582,
      "longitude": -73.984725
    },
    "menu": [
      {
        "name": "Sushi Platter",
        "price": 21.99,
        "preferences": []
      },
      {
        "name": "Chicken Teriyaki",
        "price": 16.99,
        "preferences": []
      },
      {
        "name": "Miso Soup",
        "price": 4.99,
        "preferences": ["Vegetarian", "Vegan"]
      }
    ]
  },
  {
    "name": "Veggie Delight",
    "location": {
      "latitude": 40.763986,
      "longitude": -73.985269
    },
    "menu": [
      {
        "name": "Veggie Burger",
        "price": 11.99,
        "preferences": ["Vegetarian", "Vegan"]
      },
      {
        "name": "Portobello Mushroom Sandwich",
        "price": 13.99,
        "preferences": ["Vegetarian", "Vegan"]
      },
      {
        "name": "Sweet Potato Fries",
        "price": 5.99,
        "preferences": ["Vegetarian", "Vegan"]
      }
    ]
  },
  {
    "name": "Noodle World",
    "location": {
      "latitude": 40.765396,
      "longitude": -73.986392
    },
    "menu": [
      {
        "name": "Beef Pad Thai",
        "price": 14.99,
        "preferences": []
      },
      {
        "name": "Vegetable Stir-Fry Noodles",
        "price": 12.99,
        "preferences": ["Vegetarian", "Vegan"]
      },
      {
        "name": "Spring Rolls",
        "price": 6.99,
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
  <div>

    <h1 class="title">{{ dish }}</h1>
    <div v-if="promoted > 0.8" style="color: rgb(101, 183, 97);"><span class="badge bg-success">Featured</span></div>
  </div>
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