<template>
  <div>
    <div class="site-section" id="contact">
      <div class="container">
        <div class="row">
          <SearchForm/>
            <h1 class="d-inline-block  px-3 mb-3 property-offer-type rounded col-sm-12 border-bottom pb-4 text-center">  CONTÁCTANOS</h1>      
          <div class="col-sm-2"></div>
          <div class="col-md-12  col-lg-offset-2 col-lg-8  mb-5">
            <ContactForm/>
          </div>
          <div class="col-lg-4 d-none">
            <div class="p-4 mb-3 bg-white">
              <h3 class="h6 text-black mb-3 text-uppercase">{{$t("pages.contact.contact_info")}}</h3>
              <p v-if="info.address" class="mb-0 font-weight-bold">{{$t("pages.contact.company_address")}}</p>
              <p v-if="info.address" class="mb-4">
                {{info.address}}
              </p>

              <p v-if="info.reserveemail" class="mb-0 font-weight-bold">{{$t("pages.contact.company_email")}}</p>
              <p v-if="info.reserveemail" class="mb-4">
                <a :href="`mailto:${info.reserveemail}`">{{
                info.reserveemail
              }}</a>
              </p>
              
              <p v-if="info.phone || info.reservephone" class="mb-0 font-weight-bold">{{$t("pages.contact.company_phone")}}</p>
              <p v-if="info.phone || info.reservephone">
                <a v-if="info.phone" :href="`tel:${info.phone}`">
                  {{ info.phone }}
                </a>
                <br>
                <a v-if="info.reservephone" :href="`tel:${info.reservephone}`">
                  {{ info.reservephone }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    meta: {
      pageTitle: 'Contacto',
      hideBanner: false,
    },
    computed:{
        ...mapGetters({
            info:'_getInfoCompany'
        }),
    },
};
</script>
<style scoped>
 #contact .form-search{
    margin-top: 0px !important;
  }
</style>