<template>
    <gmap-map
        class="map-container"
        :center="center"
        :zoom="14"
    >
      <GmapMarker
        :position="center"
      />
    </gmap-map>
</template>

<script>

export default {
    props:{    
        mapLat:{
            type:String,
            required:true
        },
        mapLng:{
            type:String,
            required:true
        }
    },
    data() {
        return {
            // default to Montreal to keep it simple
            // change this to whatever makes sense
            center: { lat:0, lng: 0 },
            markers: [],
            places: [],
            currentPlace: null
        };
    },
    created(){
        this.center.lat=parseFloat(this.mapLat);
        this.center.lng=parseFloat(this.mapLng);
    }
};
</script>
<style >
    .map-container{
        height:  45vh;
    }
    @media screen and (max-width:1199px){
        .map-container{
            height:  50vh
        }
    }
</style>