<template>
<Preloader v-if="!dev"/>
<div v-else>
  <!-- <Banner :image="dev.images[0].largefile" pageTitle="Detalles de Desarrollo"/> -->
  <div class="site-section site-section-sm">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="site-section site-section-sm pb-0 bg-light wow zoomIn text-left">
            <div class="container">
              <div class="row text-left">
                <h1 class="d-inline-block  px-3 mb-3 property-offer-type rounded col-sm-12" v-if="dev.developmentNameEs"> {{dev.developmentNameEs}}</h1>      
              </div>
            </div> 
          </div>
          <!-- Carousel -->
          <DetailCarousel :items="dev.images"/>

          <div class="bg-white property-body ">

            <!-- Best Information & Prices -->
              <section class="row">
                <!-- Price -->
                <div class="col-md-5 prices">
                    <h5>
                      <b> {{$t("pages.development_detail.price_from")}}:  </b>
                    </h5>
                    <strong
                      class=" text-success h1 mb-3">
                        {{format}}
                    </strong>
                </div>
                <!-- Best Information -->
                <div class="col-md-7">
                  <ul class="property-specs-wrap row justify-content-center">
                    <li v-if="dev.pkFrom!=0 || dev.pkTo!=0" class="col-lg-6">
                      <span class="property-specs" >
                          {{$t("pages.property_detail.feature_parking")}}
                      </span>
                      <span  class="porperty-specs-number">
                         <b>{{(dev.pkFrom)?dev.pkFrom:''}} {{(dev.pkFrom && dev.pkTo)?' - ': ''}} {{(dev.pkTo)?dev.pkTo:''}}</b>
                      </span>
                    </li>

                    <li v-if="dev.bedFrom||dev.bedTo" class="col-lg-6">
                      <span class="property-specs" >
                        {{$t("pages.property_detail.feature_bedrooms")}}
                      </span>
                      <span class="property-specs-number">
                        <b>{{ dev.bedFrom }} {{(dev.bedTo)?`- ${dev.bedTo}`:''}} </b>
                      </span>
                    </li>

                    <li v-if="dev.bathFrom||dev.bathTo" class="col-lg-6">
                      <span class="property-specs" >
                        {{$t("pages.property_detail.feature_bathrooms")}}
                      </span>
                      <span class="property-specs-number">
                        <b>{{ dev.bathFrom }} {{(dev.bathTo)?`- ${dev.bathTo}`:''}}</b>
                      </span>
                    </li>

                    <li v-if="dev.m2cFrom||dev.m2cTo" class="col-lg-6">
                      <span class="property-specs" >
                        {{$t("pages.property_detail.feature_area_cons")}}
                      </span>
                      <span class="property-specs-number" >
                        <b>
                          {{ dev.m2cFrom }} {{(dev.m2cTo)?`- ${dev.m2cTo}`:''}} m <sup>2</sup>
                        </b>
                      </span>
                    </li>
                  </ul>
                </div>
                <br>
              </section>

              <!-- Genereal Info -->
              <section class="row mb-5 justify-content-center">
                <div v-if="dev.address" class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                  <span class="d-inline-block text-black mb-0 caption-text">
                    {{$t("pages.property_detail.feature_address")}}
                  </span>
                  <strong class="d-block">{{dev.address}}</strong>
                </div>
                <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                  <span class="d-inline-block text-black mb-0 caption-text">Folio</span>
                  <strong class="d-block">
                    <i class="fa fa-hashtag"></i>
                    {{ dev.folio }}
                  </strong>
                </div>
                <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                  <span class="d-inline-block text-black mb-0 caption-text">{{$t("pages.development_detail.units_aviable")}}</span>
                  <strong class="d-block">
                    {{ dev.unitsAviable }}
                  </strong>
                </div>
              </section>

              <!-- Genereal Info -->
              <section v-if="dev.blueprints" class="row mb-5 justify-content-center">
                    <button type="button" @click="goTo('master-plan')" class="btn btn-primary  py-2 px-4 rounded-0 go-masterplan-button"> {{$t("pages.development_detail.masterplan_title")}} </button>
              </section>

              <!-- Description -->
              <section>
                <h4 class="h4 text-black">{{$t("pages.property_detail.description_prop")}}</h4>
                <div>
                  <h5>Español</h5>
                  <p>
                    <pre>{{ dev.descriptionEs }}</pre>
                  </p>
                </div>
                <div v-if="dev.descriptionEn">
                  <hr>
                  <h5 >English</h5>
                  <p>
                    <pre>{{ dev.descriptionEn }}</pre>
                  </p>
                </div>
              </section>

              <!-- Amenities -->
              <section class="border-top pt-4" v-if=" dev.amenities || dev.services || dev.maintenance_includes">
                <div class="container mb-3" v-if="dev.amenities">
                  <div class="row mb-3">
                    <h4 class="h4 text-black">{{$t("pages.property_detail.amenities_interior")}}</h4>
                  </div>
                  <div class="row">
                    <p class="amenidades col-md-4 col-sm-6" v-for="(item,i) in dev.amenities" :index="i" :key=i>
                      <i class="icon-check" aria-hidden="true"></i>
                      {{item}}
                    </p>
                  </div>
                </div>

                <div class="container mb-3" v-if="dev.maintenance_includes">
                  <div class="row mb-3">
                    <h4 class="h4 text-black"> {{$t("pages.development_detail.maintenance_includes")}}</h4>
                  </div>
                  <div class="row">
                    <p class="amenidades col-md-4 col-sm-6" v-for="(item,i) in dev.maintenance_includes" :index="i" :key=i>
                      <i class="icon-check" aria-hidden="true"></i>
                      {{item}}
                    </p>
                  </div>
                </div>

                <div class="container mb-3" v-if="dev.services">
                  <div class="row mb-3">
                    <h4 class="h4 text-black"> {{$t("pages.property_detail.services_prop")}}</h4>
                  </div>
                  <div class="row">
                    <p class="amenidades col-md-4 col-sm-6" v-for="(item,i) in  dev.services" :index="i" :key=i>
                      <i class="icon-check" aria-hidden="true"></i>
                      {{item}}
                    </p>
                  </div>
                </div>
              </section>

              <!-- Video -->
              <section v-if="dev.video" class="row">
                <div class="col-md-12 no-gutters ">
                  <div class="col-12">
                    <h4 class="text-black mb-3">
                      Video
                    </h4>
                  </div>
                  <div class="col-12">
                    <iframe width="100%" height="315" :src="dev.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                  </div>
                </div>
              </section>
          </div>
        </div>

        <!-- Widget Section -->
        <div class="col-lg-4">
          <!-- Main Contact Information -->
          <div class="bg-white widget  rounded shadowspro ">
            <div class="row text-center border-bottom mb-3">
              <div class=" mb-1">
                <h4 class="d-inline-block property-offer-type2">{{dev.company.name}}</h4>  
              </div>
              <h3 class="text-black text-center" >{{$t('pages.development_detail.contact_us')}}</h3>
            </div>
            <div>
              <div style="text-align: center">
                <p class="mb-0">
                  <b class="texto2"><i class="icon-phone texto2"></i> / <i class="icon-whatsapp"></i> :</b>
                  <a class="contact-links" data-toggle="tooltip" data-placement="top" title="Contactar en WhatsApp" target="_blank" :href="`https://api.whatsapp.com/send?text=${$t('pages.development_detail.share_whats_message_agent')}: ${url}&phone=52${dev.agent.cellphone}`">
                    {{dev.agent.cellphone}}
                  </a>
                </p>
                <p class="mb-4 ">
                  <b class="texto2"><i class="icon-envelope-open texto2"></i> :</b>
                  <a class="contact-links" > {{dev.agent.email}}</a>
                </p>
              </div>
            </div>
          </div>
          <!-- Contact Form -->
          <div class="bg-white rounded text-center border pb-3">
            <ContactForm2/>
            <a href="https://credibox.mx/iframe2/compra.html?ref=3a90164865f389b757673ab3eafbcad9" target="_blank" class="btn btn-primary text-uppercase" >
										Cotiza Credito Hipotecario
						</a>
          </div>

          <!-- Download Files -->
          <div class="bg-white widget border rounded mt-4 shadowspro">
            <div class="row text-center border-bottom mb-3">
              <h3 class="text-black mb-2">{{$t("pages.development_detail.share_title")}}</h3>
            </div>
            <div>
              <h6 class=" text-black">  Flyers Español </h6>
              <ul class="buttons-content banner row justify-content-center">
                <li v-if="dev.flyer.flyerEs4" class="banners col-md-6 ">
                  <a class="button-flyer" target="_blank" :href="dev.flyer.flyerEs4">
                    <i class="fa fa-file-image-o"></i> 4 Fotos
                  </a>
                </li>
                <li v-if="dev.flyer.flyerEs10" class="banners col-md-6 ">
                  <a class="button-flyer" target="_blank" :href="dev.flyer.flyerEs10">
                    <i class="fa fa-file-image-o"></i> 10 Fotos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 class="text-black"> English Flyers</h6>
              <ul class="buttons-content banner row justify-content-center">
                <li v-if="dev.flyer.flyerEn4" class="banners col-md-6 ">
                  <a class="button-flyer" target="_blank" :href="dev.flyer.flyerEn4">
                    <i class="fa fa-file-pdf-o"></i> 4 Images
                  </a>
                </li>
                <li v-if="dev.flyer.flyerEn10" class="banners col-md-6 ">
                  <a class="button-flyer" target="_blank" :href="dev.flyer.flyerEn10">
                    <i class="fa fa-file-pdf-o"></i> 10 Images
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Share -->
           <div class="bg-white widget border rounded mt-4 shadowspro">
              <div class="row border-bottom">
                <h3 class="text-uppercase text-black mb-2">{{$t("pages.property_detail.share_prop")}}</h3>
              </div>
              <div class="row text-center pt-3 site-foote">
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" target="_blank" class="pl-3 pr-3">
                  <span class="icon-facebook"></span>
                </a>
                <a
                  data-toggle="tooltip" data-placement="top" title="Compartir por Twitter"
                  :href="`https://twitter.com/home?status=${url}`" target="_blank"
                  class="pl-3 pr-3"
                >
                  <span class="icon-twitter"></span>
                </a>
                <a
                  data-toggle="tooltip" data-placement="top" title="Compartir por WhatsApp"
                  :href="`https://api.whatsapp.com/send?text=${$t('pages.development_detail.share_whats_message_public')}: ${url}`"
                  class="pl-3 pr-3"
                  target="_blank"
                >
                  <span class="icon-whatsapp"></span>
                </a>

              </div>
          </div>

          <!-- Share -->
           <div v-if="dev.latitude|| dev.longitude" class="bg-white widget border rounded mt-4">
              <div class="row border-bottom">
                <h3 class="text-uppercase text-black mb-2">{{$t("pages.development_detail.map_title")}}</h3>
              </div>
              <div class="row mt-4">
                <div class="col-12 p-0">
                  <GoogleMap :mapLat="dev.latitude" :mapLng="dev.longitude" />
                </div>
              </div>
          </div>
        </div>


      </div>
      <!-- Mapper area -->
      <div v-if="dev.blueprints" id="master-plan" class="row mt-5 pt-5 border-top">
         <div class="col-md-12 ">
           <div class="bg-white ">
             <!-- Mapper -->
             <section class="row mb-5 master-plan">
                <div class="col-md-12 text-center">
                  <div class="site-section-title">
                    <h2>{{$t("pages.development_detail.masterplan_title")}}</h2>
                  </div>
                  <div class="mt-5 image-master-plan">
                    <a  class="example-image-link animated-link-dark" :href="dev.masterplan[0].image" data-lightbox="example-set" :data-title="dev.developmentNameEs">
                        <img :src="dev.masterplan[0].image" :alt="`masterplan-${dev.developmentNameEs}`" srcset="">
                    </a>
                  </div>
                  <div class="mt-5">
                    <button type="button" @click="goToSection()" class="btn btn-primary  py-2 px-4 rounded-0 go-masterplan-button"> {{$t("pages.development_detail.masterplan_section_button")}} </button>
                  </div>
                </div>
              </section>
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
  meta: {
    pageTitle: 'Detalles de Desarrollo',
    hideBanner: false,
  },  
  data() {
    return {
      folio: "",
      agentId: 0,
      url: "",
      amenities: [],
    };
  },
  computed: {
    ...mapGetters({
      dev: "_getDevelopment",
    }),
    activeLocale() {
      return this.$i18n.locale;
    },
    format(val) {
      let value = val.dev.priceFrom;
      //Formateo de decimales
      let decimalPrice = value.lastIndexOf(".");
      //Extaracción de moneda
      let currentPriceM = value.indexOf("MXN");
      let currentPriceU = value.indexOf("USD");

      // Precio formateado value.substr(currentPrice)
      let formatPrice = value.substr(0, decimalPrice) + " ";
      if (currentPriceM != "-1") {
        formatPrice += value.substr(currentPriceM);
      } else {
        formatPrice += value.substr(currentPriceU);
      }
      return '$'+formatPrice.slice(1);
    },
  },
  created() {
    this.folio = this.$route.params.folio;

    let data = {
      folio: this.folio,
    };
    this.$store.dispatch("getDevelopment", data);
    this.url = this.$store.state.URL_SITE + this.$route.path;
  },
  methods:{
    goTo(ref){
      document.getElementById(ref).scrollIntoView({block: "nearest", behavior: "smooth"});
    },
    goToSection(){
      let folio=this.folio;
      this.$router.push({name:'DevelopmentSections',params: {folio}})
    }
  }
};
</script>


<style scoped>
.contactWA {
  color: #000;
}
.contactWA:hover {
  color: #f3395f;
}
.pl-0,
.pr-3 {
  font-size: 20px;
}
h3 {
  font-size: 14px;
    letter-spacing: .1em;
}
.price {
  background-color: #9cd7d3c5;
  border-radius: 5px;
  width: 50%;
  height: auto;
  text-align: center;
}

.price h3 {
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}
.banner {
  display: block;
  margin-top: 20px !important;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.banners {
  float: none;
}
.texto1 {
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: 1rem;
  font-family: "Varela Round", "HelveticaNeue", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 18px;
}
.texto2 {
  font-size: 15px;
  line-height: 27px;
  color: #f3395f;
  font-family: "Varela Round", "HelveticaNeue", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
}
.texto3 {
  display: none;
}
.whatsappButtom {
  color: #000;
}

.fbButton {
  float: right;
}

.buttons-content {
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  text-align: center;
}

.button-flyer {
  display: block;
  color: #373737;
  width: auto;
  border: 2px solid #f3395f;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;

  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.button-flyer:hover {
  background: #f3395f !important;
  color: rgb(255, 255, 255);
  outline: none !important;
}
.agent-photo {
  width: 150px;
  text-overflow: ellipsis;
  float: none;
  display: block;
  overflow: auto;
  flex-wrap: wrap;
  white-space: normal;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: auto;
}
.imagen1 {
  width: 200px !important;
  height: 100px !important;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;

  border-radius: 1px;
  cursor: zoom-in;
}
.imagen2 {
  height: 500px;
  width: 750px !important;
  cursor: pointer;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
}

#leyendaPrecios {
  float: right;
  font-size: 11px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-bottom: 10px;
}

@media screen and (max-width: 415px) {
  .agentPhoto .email {
    display: none !important;
  }

  .show-more {
    max-height: 2000px !important;
    height: auto !important;
    overflow: initial !important;
    position: relative;
    transition: max-height 1s;
  }
}

input[type="text"],
input[type="email"],
input[type="tel"] {
  display: inline-block;
  border: 1px solid #f3395f;
  box-sizing: border-box;
}
.form-group textarea {
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #f3395f;
  box-sizing: border-box;
}
.amenidades {
  list-style: none;
  margin: 0 !important;
  width: 100%;
  display: block;
  list-style: none;
  padding: 0.5rem;
  color: #373737;
  line-height: 27px;
  font-size: 15px;
}
.amenidades i {
  color: #f3395f;
}
.not-price {
  color: #616161 !important;
  text-decoration: line-through;
}
pre {
  white-space: pre-wrap;
  height: auto;
  overflow: hidden;
  background: transparent;
  border-color: transparent;
  color: #000;
  font-family: Open Sans, sans-serif;
  font-size: 15px;
  text-align: justify;
}
.icon-phone {
  color: #f3395f;
}

.contact-links {
  color: #373737;
}

.contact-links:hover {
  color: #f3395f;
}

.btn-outline-primary:not(:disabled):not(.disabled):active,
.btn-outline-primary:not(:disabled):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff !important;
  background-color: #f3395f!important;
  border-color: #f3395f !important;
}
.btn-outline-primary {
  color: #000;
  background-color: #f5f5f5;
  background-image: none;
  border-bottom: solid 3px #f3395f!important;
}

.references{
  margin: 10px 0;
}
.references span{
  margin-left: 10px;
}
.color-reference{
  width: 3rem;
  height: 1.6rem;
  border-radius: 0.25rem;
  display: inline-block;
  vertical-align: middle;
}
.status-1{
  background: #93E945;
  border: 1px solid #86d241;
}
.status-2{
  background: #FFC848;
  border: 1px solid #f5c047;
}
.status-3{
  background: #E94545;
  border: 1px solid #CC3D3E;
}

.overall-scalable {width: 350px; height: 150px; overflow: hidden; -webkit-transition: all 1s;}
.scalable {color: #666; width: 350px; height: 150px; -webkit-transform-origin: top left; -webkit-transition: all 1s;}

.image-master-plan img{
  width: 100%;
  cursor: zoom-in;
}


.go-masterplan-button{
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  cursor: pointer;
  background-color: #fff !important;
  white-space: pre-wrap;
}
.go-masterplan-button:hover{
  background-color: #f3395f!important;
}
</style>
