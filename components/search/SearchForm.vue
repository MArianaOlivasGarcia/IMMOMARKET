<template>
  <form  v-on:submit.prevent="searchProps" class="form-search col-md-12 pt-2">
    <div class="pb-0 bg-light wow zoomIn text-center">
      <div class="container">
        <div class="row text-center">
          <h1 class=" px-3 mb-3 property-offer-type rounded col-sm-12">       ENCUENTRA EL HOGAR DE TUS SUEÑOS</h1>      
          <hr>
        </div>
      </div> 
    </div>
    <div class="row justify-content-center align-items-end">
      <!-- KEYWORD YA -->
      <div  class="col-md-3 mb-3">
        <div class="select-wrap">
          <input
            type="text"
            v-model="search.keyword"
            class="form-control d-block "
            :placeholder="$t('layout.header.search_form.keyword_input')"
          >
        </div>
      </div>
            <!-- FOLIO YA -->
      <div  class="col-md-3 mb-3">
        <div class="select-wrap">
          <input
            type="text"
            v-model="search.folio"
            placeholder="Folio"
            class="form-control d-block "
          >
        </div>
      </div>
      <!-- PRICE MIN  YA -->
      <div class="col-md-3 mb-3">
        <div class="select-wrap">
          <money
            type="text"
            class="form-control d-block "
            step="any"
            name="minprice"
            v-model="search.minPrice"
            v-bind="moneyMin"
          ></money>
        </div>
      </div>
      <!-- PRICE MAX YA -->
      <div class="col-md-3 mb-3">
        <div class="select-wrap">
          <money
            type="text"
            class="form-control d-block "
            step="any"
            name="maxprice"
            v-model="search.maxPrice"
            v-bind="moneyMax"
          ></money>
        </div>
      </div>
      <!-- PROPERTY TYPE -->
      <div v-if="!search.searchDevelopments"  class="col-md-3 mb-3">
        
        <div class="select-wrap">
          <span class="icon icon-arrow_drop_down"></span>
          <select
            name="select-type"
            id="select-type"
            v-model="search.type"
            class="form-control d-block "
          >
            <option selected value="">
              Tipo de propiedad
            </option>
            <option v-for="(type,i) in (!search.searchDevelopments)?input.types:input.typesDevs" :key="i" :index="i" :value="type.typepropertyid">{{type.typepropertyspa}}</option>
          </select>
        </div>
      </div>
      <!-- OPERATION -->
      <div v-if="!search.searchDevelopments" class="col-md-3 mb-3 ">
        <div class="select-wrap">
          <span class="icon icon-arrow_drop_down"></span>
          <select
            name="select-city"
            id="select-city"
            v-model="search.operation"
            class="form-control d-block "
          >
              <option selected value="">
                  Tipo de operación
              </option>
              <option value="1">
                {{ $t("layout.header.search_form.option_sold") }}
              </option>
              <option value="2">
                {{ $t("layout.header.search_form.option_rent") }}
              </option>
              <option value="3">
                {{ $t("layout.header.search_form.option_vacation") }}
              </option>
          </select>
        </div>
      </div>
      <!-- location -->
      <div v-if="!search.searchDevelopments"  class="col-md-3 mb-3 d-none">
        <div class="select-wrap">
          <span class="icon icon-arrow_drop_down"></span>
          <select
            name="select-city"
            id="select-city"
            class="form-control d-block "
            v-model="search.city"
          >
          <option selected value="">{{ $t("layout.header.search_form.option_select") }}</option>
            <option v-for="(city,i) in (!search.searchDevelopments)?input.cities:input.citiesDevs" :key="i" :index="i" :value="city.city">{{city.city}}</option>
          </select>
        </div>
      </div>

      <!-- Test predictions -->


      <!-- Type Search -->
      <div v-if="nameRoute!='Agent'" class="col-md-3 mb-3 text-center">

          <label class="label-switch">Buscar desarrollos: </label>
          <label class="switch span">
            <input v-model="search.searchDevelopments" @click="changeForm" type="checkbox">
            <span class="slider"></span>
          </label>


      </div>
      <!-- BUTTON -->
      <div class="col-md-3 mb-3">
        <button
          type="submit"
          class="btn btn-primary  btn-block "
        >
        {{$t('layout.header.search_form.button')}}
        </button>
      </div>
    </div>


  </form>
</template>


<script>
import { mapGetters } from "vuex";

export default {

  data() {
    return {
      address:'',
      search: {
        operation: "",
        type: "",
        typeDevs: "",
        city: "",
        keyword: "",
        minPrice: "",
        maxPrice: "",
        urbanization: "",
        beds: "",
        baths: "",
        parking: "",
        folio: "",
        searchDevelopments: false,
        location:"{}"
      },
      searching: false,
      moneyMin: {
       thousand: ",",
        prefix: "Min:$",
        precision: 0,
        masked: false,
      },
      moneyMax: {
        thousand: ",",
        prefix: "Max:$",
        precision: 0,
        masked: false,
      },
      advanced: true,
    };
  },
  computed: {
    ...mapGetters({
      input: "_getInputs",
      agent:'_getDataAgent',
    }),
    nameRoute() {
      return this.$route.name;
    },
  },
  methods: {
    searchProps() {
      this.searching = true;
      let searchForm = this.search;

      if(this.nameRoute=='Agent'){
        searchForm.user=this.agent.folio
        this.$store.dispatch("getResults", searchForm);
        return false;
      }

      this.$store.dispatch("getResults", searchForm);

      if(!this.search.searchDevelopments){
        if(this.nameRoute!='Results')
          this.$router.push('/busqueda');
      }else{
        if(this.nameRoute!='ResultsDevs')
          this.$router.push('/busqueda-desarrollos');
      }

      this.searching = false;
    },
    changeForm() {
      for(let i in this.search){
        if(i!='searchDevelopments')
        this.search[i]=""
      }
    },

    /**
    * When the location found
    * @param {Object} addressData Data of the found location
    * @param {Object} placeResultData PlaceResult object
    * @param {String} id Input container ID
    */
    getAddressData(addressData, placeResultData, id) {
        let geometry=JSON.stringify(placeResultData.geometry);
        this.search.location=geometry;
        this.address = addressData;
    }
  },
  mounted() {
      // To demonstrate functionality of exposed component functions
      // Here we make focus on the user input
      // this.$refs.address.focus();
  },
  created(){
    this.$store.dispatch("getInputs");

    if(this.nameRoute=='Developments' ||this.nameRoute=='ResultsDevs'){
      this.search.searchDevelopments=true
    }
  }
};
</script>


<style>
@media only screen and (max-width: 1200px) {
  .btn_search #search {
    margin-top: 15px;
  }
}
@media only screen and (max-width: 300px) {
  .custom-dropdown {
    width: 100%;
  }
  .custom-dropdown select {
    width: 100%;
  }
  .big {
    font-size: 13px;
  }
}


.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
    background-color: #fff;
border-radius: 5rem;
box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  -webkit-transition: .4s;
  transition: .4s;
  background-color: #fb4c6a;
transition: .4s;
border-radius: 5rem;
}

input:checked + .slider {
  background-color: #fff;
border-radius: 5rem;
box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

input:focus + .slider {
    background-color: #fff;
border-radius: 5rem;
box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.label-switch{
      margin-right: 30px;
}

</style>
