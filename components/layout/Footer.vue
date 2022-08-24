<template>
  <footer class="site-footer" v-if="info">
    <div class="container-fluid">
      <div class="row">
        <!-- Logo -->
        <div class="col-lg-3 text-center align-content-logo">
          <div>
            <div class="logo_foot mb-4">
              <NuxtLink to="/">
                   <img
                class="logo"
                src="@/static/images/new_immoLogoHorizontal.png"
                alt="ImmoMarket-Logo-Official"
              />
              </NuxtLink>
            </div>
              <h3 class="top-texts">EL MEJOR CRM INMOBILIARIO DE MÉXICO</h3>
            <!-- Follow Us -->

            <div class="row mt-5">
              <div class="col-lg-12">
                <h3 class="top-texts">SÍGUENOS:</h3>
                <a v-if="info.fb" :href="info.fb" class="pl-0 pr-3"
                  ><span class="icon-facebook"></span
                ></a>
                <a v-if="info.tw" :href="info.tw" class="pl-3 pr-3"
                  ><span class="icon-twitter"></span
                ></a>
                <a v-if="info.instagram" :href="info.instagram" class="pl-3 pr-3"
                  ><span class="icon-instagram"></span
                ></a>
                <a v-if="info.youtube" :href="info.youtube" class="pl-3 pr-3"
                  ><span class="icon-youtube"></span
                ></a>
                <a v-if="info.linkedin" :href="info.linkedin" class="pl-3 pr-3"
                  ><span class="icon-linkedin"></span
                ></a>
              </div>
            </div>

          </div>
        </div>
<!-- Contact -->
        <div class=" mt-5 col-lg-6 col-sm-6 col-12 ">
          <div class="row">
            <div class="col-md-12">
              <h3 class="footer-heading mb-4">
                Información de IMMO CRM 360
              </h3>
            </div>
            <div class="col-lg-12">
              <div class="row">
                <div v-if="info.address" class="col-lg-4">
                  <p>
                    <b> {{$t("layout.footer.company_address")}}</b>
                  </p>
                  <p class="contact-text mb-4">
                    {{info.address}}
                  </p>
                </div>

                <div v-if="info.phone" class="col-lg-3">
                  <p>
                    <b>
                      Teléfono de Oficina
                    </b>
                  </p>

                  <!-- <a
                    class="contact-links"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Contáctenos"
                    :href="'tel:+52' + info.phone"
                    target="_blank"
                  >
                    {{ info.phone }}
                  </a> -->
                  <a
                    v-if="info.reservephone"
                    class="contact-links"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Contáctenos"
                    :href="'tel:+52' + info.reservephone"
                    target="_blank"
                  >
                    {{ info.reservephone }}
                  </a>
                </div>
                <div v-if="info.reserveemail" class="col-lg-5">
                  <p>
                    <b>
                      {{$t("layout.footer.company_email")}}
                    </b>
                  </p>
                  <a
                    class="contact-links"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Contáctenos"
                    href="mailto:hola@immocrm360.com.mx"
                    target="_blank"
                  >
                  hola@immocrm360.com.mx
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Menu -->
        <div class="col-lg-3 col-sm-6 mt-5 col-12">
          <div class="row">
            <div class="col-md-12">
              <h3 class="footer-heading mb-4">{{$t("layout.footer.menu_title")}}</h3>
            </div>
            <div class="col-lg-12">
              <div class="row">
                <ul class=" col-lg-6 col-6 list-unstyled">
                  <li><NuxtLink to="/"> {{$t("layout.nav.home")}}</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/desarrollos">{{$t("layout.nav.developments")}}</NuxtLink>
                  </li>
<!-- 
                  <li>
                    <NuxtLink to="/nosotros">{{
                      $t("layout.nav.about.title")
                    }}</NuxtLink>
                  </li> -->
                  <li>
                   <a  href="https://www.mi.immocrm360.com.mx/" target="_blank">Acceder a IMMOCRM360</a>
                  </li>
                </ul>
                <ul class=" col-lg-6 col-6 list-unstyled">
                  <li>
                    <NuxtLink to="/propiedades?pagina=1">{{$t("layout.nav.properties")}}</NuxtLink>
                  </li>
<!-- 
                  <li>
                    <NuxtLink to="/agentes">{{
                      $t("layout.nav.agents")
                    }}</NuxtLink>
                  </li>-->
                  <li> 
                    <NuxtLink to="/contacto">{{$t("layout.nav.contact")}}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        

      </div>
    </div>
    <div class="container copyright">
      <div class="row pt-5 text-center">
        <div class="col-sm-6">
          <p>
            {{info.companyName}}<sup>&copy;</sup>  {{year}} | {{$t("layout.footer.copyright")}}
          </p>
        </div>
        <div class="col-sm-6">
          <p>
            Powered with <i class="far fa-heart"></i> & <i class="fas fa-mug-hot"></i> by <a href="https://www.immocrm360.com.mx/" target="_blank">IMMO CRM 360<sup>&copy;</sup></a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      year: "",
    };
  },
  computed: {
    ...mapGetters({
      info: "_getInfoCompany",
    }),
  },
  created() {
    console.log("create footer");
    let d = new Date();
    this.year = d.getFullYear();
  },
};
</script>

<style scoped>
.logo {
  width: 35%;
}
.top-texts{
  color:#000;
  font-size: 1rem;
font-family: 'MontserratBold';
}
.logo_foot {
  margin-top: 5%;
}
.contact-links{
      flex-wrap: wrap;
    overflow-wrap: anywhere;
}
@media only screen and (max-width:991px){
  .logo {
    width: auto;
    max-height: 150px;
  }
}
.align-content-logo{
  display: flex;
  align-items: center;
}
</style>
