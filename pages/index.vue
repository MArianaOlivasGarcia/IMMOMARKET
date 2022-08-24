
<template lang="html">
	<!--<ip-search v-if="searchCompleted" :properties="propertiesFound"></ip-search>-->
	<div>
		<!-- Slider
		================================================== -->
		<HomeCarousel :items="items"/>
		
    <div class="container">
          <!-- Search    
		================================================== -->  
    <SearchForm />
    </div>


		<!-- Properties sold
		================================================== -->           
    <div>
      <div class="site-section site-section-sm pb-0 bg-light wow zoomIn text-center">
        <div class="container">
          <div class="row text-center">
            <h1 class="d-inline-block  px-3 mb-3 property-offer-type rounded col-sm-12">       Propiedades Destacadas <span> en Venta</span></h1>      
          </div>
        </div> 
      </div>
    
      <div class="site-section site-section-sm bg-light">      
        <div class="container">
          <div class="row mb-5 justify-content-center">
            <SectionLoader v-if="!propertiesv"/>
            <PropertyCard  
              v-else
              v-for="(item, i) in propertiesv"
              :key="item.folio"
              :name="item.folio"
              :index="i"
              :item="item" 
            />
          </div>	
        </div>	
      </div>   
      <div class="site-section site-section-sm pb-0 bg-light wow zoomIn">
        <div class="container">
          <div class="row text-center">
            <h1 class="d-inline-block  px-3 mb-3 property-offer-type rounded col-sm-12">       Propiedades Destacadas <span> en renta</span></h1>      
          </div>
        </div> 
      </div>
       <div class="site-section site-section-sm bg-light">      
        <div class="container">
          <div class="row mb-5 justify-content-center">
            <SectionLoader v-if="!propertiesr"/>
             <PropertyCard  
              v-else
              v-for="(item, i) in propertiesr"
              :key="item.folio"
              :name="item.folio"
              :index="i"
              :item="item" 
            />
            <div class="col-sm-12 text-center">
              <NuxtLink class="btn-moreprops" to="/propiedades">Ver más propiedades</NuxtLink>
            </div>
          </div>	
        </div>	
      </div> 
      <div class="site-section site-section-sm pb-0 bg-light wow zoomIn">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12">       
              <h1 class="d-inline-block  px-3 mb-3 property-offer-type rounded ">   Crecemos junto a los profesionales inmobiliarios de México</h1>      
            <img src="@/static/images/immoMap.png" />
            </div>
            
          </div>
        </div> 
      </div>
  
    </div> 
  </div>
</template>
<script>

import { mapGetters } from "vuex";
export default {
  async asyncData({  params, store }) {

    try {
      await store.dispatch('getPropertiesV')
      await store.dispatch('getPropertiesR')
      return  {
        // propertiesv
      }
    } catch ( err ) {
      // Redireccionar a 404
    }

  },
  head() {
    return {
     
    }
  },  
  meta: {
    pageTitle: 'Inicio',
    hideBanner: true,
  },
  computed: {
    ...mapGetters({
      items:'_getHomeSlide',
      properties:'_getHomeProperties',
      propertiesv:'_getPropertiesV',
      propertiesr:'_getPropertiesR',
      error:'_getError',
    }),
  },
  created(){
    this.$store.dispatch('getHomeSlide');
    this.$store.dispatch('getHomeProperties');
    // this.$store.dispatch('getPropertiesV');
    // this.$store.dispatch('getPropertiesR');
  }
};
</script>

<style>
  .btn-moreprops{
      font-family: 'MontserratBold';
      color: #fff;
      font-size: 1.1rem;
      padding: 10px;
      height: 50px;
      width: 90px;
      background: rgba(250,0,44,.7019607843137254);
      border-radius: 2px;
      cursor: pointer;
      border-radius: 30px;
      text-align: center;
      border: 2px solid rgba(250,0,44,.7019607843137254);
  }
  .btn-moreprops:hover{
      background: #fff;
      color: rgba(250,0,44,.7019607843137254);
      border: 2px solid rgba(250,0,44,.7019607843137254);
  }
.listing-item {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 3px;
  margin-bottom: 10px;
}
#propImg {
  width: 100%;
  height: 100%;
}
</style>


  