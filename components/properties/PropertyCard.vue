<template>
  <div :class="[(nameRoute!='Agent')?'col-lg-4':'col-lg-6',  'mb-4 col-md-6']">
    <div class="property-entry h-100">
      <a
        @click="goToProperty(item.folio, item.namePropertyEs)"
        class="property-thumbnail"
      >
        <div class="offer-type-wrap">
          <span class="offer-type bg-danger">{{ item.bestOperation }}</span>
        </div>

        <!-- <div v-if="info.imageLogo" class="watermark" :style="'background-image:url('+info.imageLogo+'); '"> </div> -->

        <img
          :src="item.smallphoto"
          id="propImg"
          :alt="item.alt"
          :title="item.namePropertyEs + '-IMAGE'"
          class="img-fluid"
        />
      </a>

      <div class="p-4 property-body">
        <h2 class="property-title">
          <a
            v-if="item.namePropertyEs"
            @click="goToProperty(item.folio, item.namePropertyEs)"
          >
            {{ item.namePropertyEs }}</a
          >
        </h2>
        <span class="property-location d-block mb-1 " v-if="item.city"
          ><span class="property-icon icon-room"></span>
          {{ item.city }} <span v-if="item.state"> , {{item.state }}</span> </span
        > 
        
        <div class="quantity" v-if="item.m2c !=0 || item.bedrooms !=0 || item.bathrooms !=0" >
						<ul>
							<li v-if="item.m2c !=0 " ><i class="fas fa-crop"></i>  {{ item.m2c }} m<sup>2</sup></li>		    		
							<li v-if="item.bedrooms !=0"><i class="fas fa-bed"></i>  {{ item.bedrooms }}</li>
							<li v-if="item.bathrooms !=0"><i class="fas fa-bath"></i>  {{ item.bathrooms }}</li>
						</ul>						
				</div>
        <b id="leyendaPrecios" class="property-specs-wrap mb-2 mb-lg-0">{{$t("components.property_card.legend")}}</b>
        <hr />

        <!-- <ul
          class="property-specs-wrap mb-3 mb-lg-0"
          v-if="
            item.m2c != 0 ||
            item.mlot != 0 ||
            item.bedrooms != 0 ||
            item.bathrooms != 0
          "
        >
          <li v-if="item.bedrooms > 0">
            <span class="property-specs" >{{
              $t("components.property_card.bedrooms")
            }}</span>
            <span class="property-specs-number">{{ item.bedrooms }} </span>
          </li>
          <li v-if="item.bathrooms > 0">
            <span class="property-specs">{{
              $t("components.property_card.bathrooms")
            }}</span>
            <span class="property-specs-number">
              {{ item.bathrooms }}
            </span>
          </li>
          <li v-if="item.m2c != 0 || item.mlot != 0">
            <span class="property-specs">{{
              $t("components.property_card.construction")
            }}</span>

            <span class="property-specs-number" v-if="item.m2c != 0">
              {{ item.m2c }} m <sup>2</sup>c</span
            >
            <span class="property-specs-number" v-else-if="item.mlot != 0">
              {{ item.mlot }} m<sup>2</sup>c</span
            >
          </li>
        </ul> -->
       <div class="row">
          <div class="col-sm-12">
          <span class="property-price text-primary mb-3 d-block ">{{item.bestPrice | format}}</span>
        </div>
       </div>
        <div class="row">
          <div class="col-sm-12 company-info text-right">
          <img :src="item.company.logo" :alt="item.company.name">
          <span  >{{item.company.name}}</span>
          
        </div>
       
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import services from "@/store/_services";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mainPrice: 0,
      secondPrice: 0,
      mainOperation: 0,
      secondOperation: 0,
    };
  },
  computed:{
    ...mapGetters({
      info:'_getInfoCompany',
      agent:'_getDataAgent',
    }),
    nameRoute() {
      return this.$route.name;
    },
  },
  filters: {
    truncate: function(str) {
      return str.substring(0, 125) + "...";
    },
    areaFormat:function(value) {
      return numeral(value).format("0,0");
    },
    format: function(value) {
      //Formateo de decimales
      let decimalPrice = value.lastIndexOf(".");
      //Extaracción de moneda
      let currentPriceM = value.indexOf("MXN");
      let currentPriceU = value.indexOf("USD");

      // Precio formateado value.substr(currentPrice)
      let formatPrice=value.substr(0,decimalPrice)+" ";
      if(currentPriceM!='-1'){
        formatPrice+= value.substr(currentPriceM)
      }else{
        formatPrice+= value.substr(currentPriceU)
      }

      return formatPrice;
      //return numeral(value).format("0,0");
    }
  },
  methods: {
    goToProperty() {
      let namePropFilt = services.normalize(this.item.namePropertyEs);
      let folio = this.item.folio;
      let namePage="Property";
      let params;

      if (this.nameRoute=='Agent') {
        namePage="PropertyAgent";
        params={
          folio,
          agentId:this.agent.folio
        }
      }else{
        params={
          folio,
          namePropFilt
        }
      }

    this.$router.push(`/propiedad/${folio}/${namePropFilt}`)
      // this.$router.push({
      //   name: namePage,
      //   params:params
      // });
    },
  },
  created() {
    /* For Base Template*/
    let prices = this.item.prices;
    let operations = this.item.operations;
    if (prices.opportunity_sold) {
      this.mainPrice = prices.opportunity_sold;
      this.mainOperation = operations.opportunity_sold;
      this.secondPrice = prices.sold;
      this.secondOperation = operations.sold;
    } else if (prices.opportunity_rent) {
      this.mainPrice = prices.opportunity_rent;
      this.mainOperation = operations.opportunity_rent;
      this.secondPrice = prices.rent;
      this.secondOperation = operations.rent;
    } else if (prices.sold) {
      this.mainPrice = prices.sold;
      this.mainOperation = operations.sold;
    } else if (prices.rent) {
      this.mainPrice = prices.rent;
      this.mainOperation = operations.rent;
    }
  },
};
</script>

<style scoped>
.company-info img {
  width: 10% !important;
  height: 40% !important;
  object-fit: contain;
}
.company-info span{
  font-family: "MontserratBold", sans-serif;
  font-size: 12.5px;
  color: #000 !important;
}
.property-price{
  float: left;
  font-family: "MontserratBold", sans-serif;
  font-size: 15px;
  color: #000 !important;
  border-bottom: 2px solid rgb(251, 76, 107);
  padding:0% 10px;
}
.quantity {
  display: flex;
  margin-left: -8px;
  margin-right: -8px;
}
.quantity > ul {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  margin-bottom: 0px;
  padding: 0;
}
.quantity ul li {
  display: inline-block;
  font-weight: 500;
  padding: 0 8px;
  font-size:13px;
  color:#000;
}
.quantity i{
  font-size: 15px;
  margin: 10px;
  color:#000;
}
sup {
  top: -.5em;
}
.not-price {
  color: red !important;
  text-decoration: line-through;
}
img {
  width: 100%;
}
#propImg {
  height: 250px;
  width: 350px;
  cursor: pointer;
}
@media (max-width: 767px) {
  #contain_tarjet_property {
    width: 65%;
  }
  #propImg {
    height: auto;
    width: 100%;
  }
}
@media (max-width: 520px) {
  #contain_tarjet_property {
    width: 100%;
  }
}
#leyendaPrecios {
  color: #000;
  font-size: 9px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.bg-danger {
  background-color: #000 !important;
}

.watermark{
    height: 250px;
    width: 100%;
    background-size: 30%;
    z-index: 1;
    cursor: pointer;
}

.watermark{
  opacity: .6;
}
</style>
