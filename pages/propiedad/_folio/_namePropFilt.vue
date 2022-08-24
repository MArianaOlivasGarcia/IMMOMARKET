<template>
<div v-if="error!=200">
  <!-- <Banner pageTitle="routes.property_not_found.page_title" image="/images/hero.jpg"/> -->
  <div class="site-section bg-light">
    <NotFound  :code="error"/>
  </div>

</div>
<Preloader v-else-if="!prop"/>
<div v-else>
  <!-- <Banner :image="prop.images[0].largefile" pageTitle="Detalles de propiedad"/> -->
  <div class="site-section site-section-sm">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- Carousel -->
           <div class="site-section site-section-sm pb-0 bg-light wow zoomIn text-left">
            <div class="container">
              <div class="row text-left">
                <h1 class="d-inline-block  px-3 mb-3 property-offer-type rounded col-sm-12" v-if="prop.propertyNameEs"> {{prop.propertyNameEs}}</h1>      
              </div>
            </div> 
          </div>
          <DetailCarousel :items="prop.images"/>

          <div class="bg-white property-body ">
            <!-- Best Information & Prices -->
            <section class="row ">
              <!-- Best Information -->
              <div class="col-md-12">
                  <ul class="property-specs-wrap row justify-content-center">
                    <li class="col-lg-4" v-if="prop.parkingTot!=0">
                      <span class="property-specs">
                        {{$t("pages.property_detail.feature_parking")}} <br> {{$t("pages.property_detail.amenities_interior")}}
                      </span>
                      <span class="porperty-specs-number">
                          <b>{{prop.parkingTot}}</b>
                      </span>
                    </li>

                    <li class="col-lg-4" v-if="prop.bedrooms!=0">
                      <span class="property-specs">
                        {{$t("pages.property_detail.feature_bedrooms")}}
                      </span>
                      <span class="property-specs-number">
                        <b>{{ prop.bedrooms }}</b>
                      </span>
                    </li>

                    <li class="col-lg-4" v-if="prop.bathrooms!=0">
                      <span class="property-specs" >
                        {{$t("pages.property_detail.feature_bathrooms")}}
                      </span>
                      <span class="property-specs-number">
                        <b>{{ prop.bathrooms }}</b>
                      </span>
                    </li>

                    <li class="col-lg-4" v-if="prop.middlebathrooms!=0">
                      <span class="property-specs" >
                        {{$t("pages.property_detail.feature_half_bathrooms")}}
                      </span>
                      <span class="property-specs-number">
                        <b>{{ prop.middlebathrooms }}</b>
                      </span>
                    </li>

                    <li class="col-lg-4" v-if="prop.m2c!=0">
                      <span class="property-specs">
                        {{$t("pages.property_detail.feature_area_cons")}}
                      </span>
                      <span class="property-specs-number">
                        <b>
                          {{ prop.m2c }} m<sup>2</sup>
                        </b>
                      </span>
                    </li>

                    <li class="col-lg-4" v-if="prop.mlot!=0">
                      <span class="property-specs" >
                        {{$t("pages.property_detail.feature_area_lot")}}
                      </span>
                      <span class="property-specs-number">
                        <b>
                          {{ prop.mlot }} m<sup>2</sup>
                        </b>
                      </span>
                    </li>
                  </ul>
              </div>
              <!-- Prices -->
              <div class="col-md-12 mt-4 prices">
                <div class="row">
                  <div v-if="prop.operation.opportunity_sold!=0" class="col-md-6">
                    <h5>
                      <b> {{prop.operation.opportunity_sold }} </b>
                    </h5>
                    <strong
                      class=" text-success h1 mb-3">
                        {{prop.prices.opportunity_sold }}
                    </strong>
                    <hr>
                  </div>

                  <div v-if="prop.operation.opportunity_rent!=0" class="col-md-6">
                    <h5>
                      <b> {{prop.operation.opportunity_rent }} </b>
                    </h5>
                    <strong
                      class=" text-success h1 mb-3">
                        {{prop.prices.opportunity_rent }}
                    </strong>
                    <hr>
                  </div>

                  <div v-if="prop.operation.sold!=0" class="col-md-6">
                    <h5>
                      <b> {{prop.operation.sold }} </b>
                    </h5>
                    <strong
                      :class="[(prop.operation.opportunity_sold!=0)?'not-price':'' ,'text-success h1 mb-3']">
                        {{prop.prices.sold }}
                    </strong>
                  </div>
                  <div v-if="prop.operation.rent!=0" class="col-md-6">
                    <h5>
                      <b> {{prop.operation.rent }} </b>
                    </h5>
                    <strong :class="[(prop.operation.opportunity_rent!=0)?'not-price':'' ,'text-success h1 mb-3']">
                        {{prop.prices.rent }}
                    </strong>
                  </div>
                </div>
              </div>

            </section>

            <!-- Genereal Info -->
            <section class="row my-5 justify-content-center">
              <div v-if="prop. address" class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                <span class="d-inline-block text-black mb-0 caption-text">
                  {{$t("pages.property_detail.feature_address")}}
                </span>
                <strong class="d-block">{{prop.address}}</strong>
              </div>
              <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                <span class="d-inline-block text-black mb-0 caption-text">Folio</span>
                <strong class="d-block">
                  <i class="fa fa-hashtag"></i>
                  {{ prop.folio }}
                </strong>
              </div>
              <div v-if="prop.referenceEs!=0" class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                <span class="d-inline-block text-black mb-0 caption-text">{{$t("pages.property_detail.references")}}</span>
                <strong class="d-block">{{prop.referenceEs }}</strong>
              </div>
            </section>

            <!-- Description -->
            <section>
              <div class="border-bottom mb-1">
                <h4 class="d-inline-block property-offer-type2">{{$t("pages.property_detail.description_prop")}}</h4>  
              </div>
                
              <div>
                <h5>Español</h5>
                <p>
                  <pre>{{ prop.descriptionEs }}</pre>
                </p>
              </div>
              <div v-if="prop.descriptionEn != 0">
                <hr>
                <h5 >English</h5>
                <p >
                  <pre>{{ prop.descriptionEn }}</pre>
                </p>
              </div>
            </section>

            <!-- Amenities -->
            <section class=" py-4" v-if="prop.interiorAmenities || prop.otherAmenities || prop.exteriorAmenities || prop.services || prop.developmentServices">
               <div class="border-bottom mb-1">
                <h4 class="d-inline-block property-offer-type2">AMENIDADES</h4>  
              </div>
              <div class="container mb-3" v-if="prop.interiorAmenities || prop.otherAmenities">
                <div class="row mb-3">
                  <div class="border-bottom mb-1">
                    <h4 class="d-inline-block property-offer-type2">{{$t("pages.property_detail.amenities_interior")}}</h4>  
                  </div>
                </div>
                <div class="row">
                  <p class="amenidades col-md-4" v-for="(item,i) in prop.interiorAmenities" :index="i" :key=i>
                    <i class="icon-check" aria-hidden="true"></i>
                    {{item}}
                  </p>
                  <p class="amenidades col-md-4" v-for="(item,i) in prop.otherAmenities" :index="i" :key=i>
                    <i class="icon-check" aria-hidden="true"></i>
                    {{item}}
                  </p>
                </div>
              </div>

              <div class="container mb-3" v-if="prop.exteriorAmenities">
                <div class="row mb-3">
                  <h4 class="h4 text-black"> {{$t("pages.property_detail.amenities_exterior")}}</h4>
                </div>
                <div class="row">
                  <p class="amenidades col-md-4" v-for="(item,i) in prop.exteriorAmenities" :index="i" :key=i>
                    <i class="icon-check" aria-hidden="true"></i>
                    {{item}}
                  </p>
                </div>
              </div>

              <div class="container mb-3" v-if="prop.developmentAmenities">
                <div class="row mb-3">
                  <h4 class="h4 text-black"> {{$t("pages.property_detail.amenities_maintenance")}}</h4>
                </div>
                <div class="row">
                  <p class="amenidades col-md-4" v-for="(item,i) in prop.developmentAmenities" :index="i" :key=i>
                    <i class="icon-check" aria-hidden="true"></i>
                    {{item}}
                  </p>
                </div>

              </div>

              <div class="container mb-3" v-if="prop.developmentServices || prop.services">
                <div class="row mb-3">
                  <h4 class="h4 text-black"> {{$t("pages.property_detail.services_prop")}}</h4>
                </div>
                <div class="row">
                  <p class="amenidades col-md-4" v-for="(item,i) in prop.developmentServices" :index="i" :key=i>
                    <i class="icon-check" aria-hidden="true"></i>
                    {{item}}
                  </p>
                  <p class="amenidades col-md-4" v-for="(item,i) in  prop.services" :index="i" :key=i>
                    <i class="icon-check" aria-hidden="true"></i>
                    {{item}}
                  </p>
                </div>
              </div>

            </section>

            <!-- Map -->
            <section class="row mb-5 " v-if="prop.latitude || prop.longitude">
              <div class="col-md-12 no-gutters mt-3">
                <div class="col-12">
                  <div class="border-bottom mb-1">
                    <h4 class="d-inline-block property-offer-type2">Ubicación</h4>  
                  </div>
                </div>
                <div class="col-12">
                  <GoogleMap :mapLat="prop.latitude" :mapLng="prop.longitude" />
                </div>
              </div>
            </section>

            <!-- Video -->
            <section class="row mb-5" v-if="prop.video">
              <div class="col-md-12 no-gutters mt-3">
                <div class="col-12">
                  <div class="border-bottom mb-1">
                    <h4 class="d-inline-block property-offer-type2">Vídeo</h4>  
                  </div>
                </div>
                <div class="col-12">
                  <iframe width="100%" height="315" :src="prop.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                  </iframe>
                </div>
              </div>
            </section>
          </div>
        </div>

        <!-- Widget Section -->
        <div class="col-lg-4">
          <div class="team-member text-center mb-0">
            <img :src="prop.company.logo" class="img-fluid rounded imagenA"/>
            <p>
              <a v-if="prop.agent.fb" :href="prop.agent.fb" class="text-black p-2"
                ><span class="icon-facebook"></span
              ></a>
              <a v-if="prop.agent.instagram" :href="prop.agent.instagram" class="text-black p-2"
                ><span class="icon-instagram"></span
              ></a>
              <a v-if="prop.agent.tweet" :href="prop.agent.tweet" class="text-black p-2"
                ><span class="icon-twitter"></span
              ></a>
              <a v-if="prop.agent.linkedin" :href="prop.agent.linkedin" class="text-black p-2"
                ><span class="icon-linkedin"></span
              ></a>
            </p>
          </div>
          <!-- Main Contact Information -->
          <div class="bg-white widget  rounded pb-1 pt-1 ">
            <div class="row text-center border-bottom mb-3">
              <h3 class="text-black text-center" >{{$t('pages.property_detail.contact_us')}}</h3>
            </div>
            <div>
              <div style="text-align: left">
                <p class="mb-0">
                  <b class="texto2"><i class="icon-phone texto2"></i> / <i class="icon-whatsapp"></i> :</b>
                  <a class="contact-links" data-toggle="tooltip" data-placement="top" title="Contactar en WhatsApp" target="_blank" :href="`https://api.whatsapp.com/send?text=${$t('pages.property_detail.share_whats_message_agent')}: ${url}&phone=52${prop.agent.cellphone}`">
                    {{prop.agent.cellphone}}
                  </a>
                </p>
                <p class="mb-4 ">
                  <b class="texto2"><i class="icon-envelope-open texto2"></i> :</b>
                  <a class="contact-links" > {{prop.agent.email}}</a>
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded text-center border pb-3 shadowspro">
            <ContactForm2/>
            <a href="https://credibox.mx/iframe2/compra.html?ref=3a90164865f389b757673ab3eafbcad9" target="_blank" class="btn btn-primary text-uppercase" >
										Cotiza Credito Hipotecario
						</a>
          </div>

          <!-- Download Files -->
          <div class="bg-white widget border rounded mt-4 shadowspro">
            <section>
              <div class="row text-center border-bottom mb-3">
                <h3 class="text-black mb-2">{{$t("pages.property_detail.share_title")}}</h3>
              </div>
              <div>
                <h6 class=" text-black"> Banners </h6>
                <ul class="buttons-content banner row justify-content-center">
                  <li v-if="prop.banner1" class="banners col-md-6">
                    <a class="button-flyer" target="_blank" :href="prop.banner1">
                      <i class="fa fa-file-image-o"></i> 1 Foto
                    </a>
                  </li>
                  <li v-if="prop.banner3" class="banners col-md-6">
                    <a class="button-flyer" target="_blank" :href="prop.banner3">
                      <i class="fa fa-file-image-o"></i> 3 Fotos
                    </a>
                  </li>
                  <li v-if="prop.banner4" class="banners col-md-6">
                    <a class="button-flyer" target="_blank" :href="prop.banner4">
                      <i class="fa fa-file-image-o"></i> 4 Fotos
                    </a>
                  </li>
                  <li v-if="prop.banner6" class="banners col-md-6">
                    <a class="button-flyer" target="_blank" :href="prop.banner6">
                      <i class="fa fa-file-image-o"></i> 6 Fotos
                    </a>
                  </li>
                </ul>
              </div>
              <div v-if="prop.flyerEs&&prop.flyerEn">
                <h6 class="text-black">Flyers</h6>
                <ul class="buttons-content banner row justify-content-center">
                  <li v-if="prop.flyerEs" class="banners col-md-6">
                    <a class="button-flyer" target="_blank" :href="prop.flyerEs">
                      <i class="fa fa-file-pdf-o"></i> FLYER ESPAÑOL
                    </a>
                  </li>
                  <li v-if="prop.flyerEn" class="banners col-md-6">
                    <a class="button-flyer" target="_blank" :href="prop.flyerEn">
                      <i class="fa fa-file-pdf-o"></i> ENGLISH FLYER
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <!-- Share -->
           <div class="bg-white widget border rounded mt-4 shadowspro">
            <section>
              <div class="row border-bottom">
                <h3 class=" text-uppercase text-black mb-2">{{$t("pages.property_detail.share_prop")}}</h3>
              </div>
              <div class="row text-center py-3 site-foote">
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
                  :href="`https://api.whatsapp.com/send?text=${$t('pages.property_detail.share_whats_message_public')}: ${url}`"
                  class="pl-3 pr-3"
                  target="_blank"
                >
                  <span class="icon-whatsapp"></span>
                </a>

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
        pageTitle: 'Detalles de propiedad',
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
      prop: "_getProperty",
       error: "_getError",
    }),
    activeLocale() {
      return this.$i18n.locale;
    },
    format(val) {
      let value = val.prop.bestprice[0];
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
      return formatPrice.slice(1);
    },
  },
  created() {
    console.log(this.$route)
    this.folio = this.$route.params.folio;
    if (this.$route.params.agentId) {
      this.agentId = this.$route.params.agentId;
    }
    let data = {
      folio: this.folio,
      agent: this.agentId,
    };
    this.$store.dispatch("getProperty", data);
    this.url = this.$store.state.URL_SITE + this.$route.path;

    //Send Data to Access
    if (process.env.NODE_ENV === "production") {
      this.$getLocation().then((coordinates) => {
        let accessData = {
          lat: coordinates.lat,
          lng: coordinates.lng,
          url: this.url,
          propertyId: this.folio,
        };

        this.$store.dispatch("setPropertyClick", accessData);
      })
      .catch(()=>{
        let accessData = {
          lat: 0,
          lng: 0,
          url: this.url,
          propertyId: this.folio,
        };

        this.$store.dispatch("setPropertyClick", accessData);
      });
    }
  }
};
</script>


<style scoped>
.contactWA {
  color: #000;
}
.contactWA:hover {
  color: #f91d43;
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
  float: left;
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
  color: #f91d43;
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
  border: 2px solid #f91d43;
  border-radius: 4px;
  padding: 7px;
  margin: 5px;

  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.button-flyer:hover {
  background: #f91d43 !important;
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
  border: 1px solid #f91d43;
  box-sizing: border-box;
}
.form-group textarea {
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #f91d43;
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
  color: #f91d43;
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
  font-family: 'Montserrat',Open Sans, sans-serif;
  font-size: 15px;
  text-align: justify;
}
.icon-phone {
  color: #f91d43;
}

.contact-links {
  color: #373737;
}

.contact-links:hover {
  color: #f91d43;
}

.btn-outline-primary:not(:disabled):not(.disabled):active,
.btn-outline-primary:not(:disabled):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff !important;
  background-color: #f91d43 !important;
  border-color: #f91d43 !important;
}
.btn-outline-primary {
  color: #000;
  background-color: #f5f5f5;
  background-image: none;
  border-bottom: solid 3px #f91d43 !important;
}
</style>
