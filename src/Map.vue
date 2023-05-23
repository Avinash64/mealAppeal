<script setup>
import { latLng } from "leaflet";
import { onMounted, ref, defineProps, watch } from 'vue';

const props = defineProps(['lat', 'long']);
console.log(props.lat);

const samp_dat = ref([]);
</script>

<template>
  <div style="height: 100%; width: 100%">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" />
      <l-circle :lat-lng="center" :radius="50" :color="`rgb(255,0,0)`"></l-circle>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LCircle } from "@vue-leaflet/vue-leaflet";

export default {
  props: {
    lat: Number,
    long: Number
  },
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LCircle
  },
  data() {
    const lat = ref(this.lat);
    const long = ref(this.long);

    return {
      zoom: 13,
      circle: {
        center: latLng(lat.value, long.value),
        radius: 10
      },
      center: latLng(lat.value, long.value),
      url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
      withPopup: latLng(this.lat, this.long),
      currentZoom: 11.5,
      currentCenter: latLng(this.lat, this.long),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = latLng(this.lat, this.long);
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  },
  watch: {
    lat(newLat) {
      this.center = latLng(newLat, this.long);
      this.withPopup = latLng(newLat, this.long);
      this.currentCenter = latLng(newLat, this.long);
    },
    long(newLong) {
      this.center = latLng(this.lat, newLong);
      this.withPopup = latLng(this.lat, newLong);
      this.currentCenter = latLng(this.lat, newLong);
    }
  }
};
</script>
