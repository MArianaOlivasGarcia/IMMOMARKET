<template>
  <form v-on:submit.prevent="sendMail" role="form" :class="['p-4 bg-white', {'bg-white':nameRoute!='DevelopmentSections'}]">
    <!-- Name Input -->
    <div class="row justify-content-center form-group">
      <div :class="[(nameRoute=='DevelopmentSections')?'col-md-4':'col-md-12', 'mb-3 ']">
        
        <input
          type="text"
          id="fullname"
          name="name"
          required="required"
          class="form-control "
          placeholder="Nombre*"
          v-model="contactForm.name.value"
          :disabled="sent||sending"
        />
        <div v-if="!contactForm.name.status" class="invalid-feedback">Este campo es requerido.</div>
      </div>
    <!-- Email Input -->

      <div :class="[(nameRoute=='DevelopmentSections')?'col-md-4':'col-md-12', 'mb-3 ']">
        <input
          name="email"
          type="email"
          required="required"
          id="email"
          data-rule="email"
          placeholder="Correo electrónico*"
          v-model="contactForm.email.value"
          :disabled="sent||sending"
          class="form-control"
        />
        <div v-if="!contactForm.email.status" class="invalid-feedback">Este campo es requerido y debe tener el formato correcto.</div>
      </div>
    <!-- Phone Input -->

      <div :class="[(nameRoute=='DevelopmentSections')?'col-md-4':'col-md-12', 'mb-3 ']">

        <vue-tel-input
          class="form-control"
          v-model.trim="contactForm.phone.value"
          :disabled="sent||sending"
          required="required"
          v-bind="bindTelProps"
        ></vue-tel-input>
        <div v-if="!contactForm.phone.status" class="invalid-feedback">Este campo es requerido.</div>
      </div>
    <!-- Message Input -->

      <div v-if="nameRoute!='DevelopmentSections'" :class="[(nameRoute=='DevelopmentSections')?'col-md-6':'col-md-12', 'mb-3']">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          class="form-control"
          required="required"
          placeholder="Hola. Estoy interesado(a) en información sobre el CRM inmobiliario."
          data-rule="required"
          style="border-radius:1rem !important;"
          v-model="contactForm.message.value"
          :disabled="sent||sending"
        ></textarea>
        <div v-if="!contactForm.message.status" class="invalid-feedback">Este campo es requerido.</div>
      </div>
    </div>

    <!-- <VueRecaptcha
      :sitekey="$store.state.CAPTCHA_KEY"
      ref = "invisibleRecaptcha"
      @verify = "onCaptchaVerified"
      @expired = "onCaptchaExpired"
      size="invisible"
    /> -->

    <div class="row form-group">
      <div class="col-md-12">
        <button
          v-if="!sending "
          :disabled="sent"
          type="submit"
          class="btn btn-primary  py-2 px-4 rounded-0"
        >
          {{ $t("components.contact_form.button") }}
        </button>
        <div v-else>
          <SectionLoader/>
        </div>
      </div>
    </div>
    <div class="text-center">
      Este sitio está protegido por reCAPTCHA y Google
      <a
        href="https://policies.google.com/privacy"
      >Política de privacidad</a> y
      Se aplican
      <a
        href="https://policies.google.com/terms"
      >Términos de servicio</a>
      .
    </div>
  </form>
</template>


<script>
import { mapState, mapGetters } from "vuex";
// import VueRecaptcha from "vue-recaptcha";

import services from "@/store/_services";
export default {
  computed: {
    ...mapState({
      URL: (state) => state.CONTACT_URL,
      PARAMS: (state) => state.API_PARAMS,
      SITE: (state) => state.URL_SITE,
    }),
    ...mapGetters({
      companyInfo: "_getInfoCompany",
      propertyInfo: "_getProperty",
      agent: "_getDataAgent",
      devInfo: "_getDevelopment",
      unitInfo:"_getActiveUnit",
    }),
    nameRoute() {
      return this.$route.name;
    },
  },
  data() {
    return {
      url: "",
      contactForm: {
        name: {
          value: "",
          status: Boolean,
        },
        phone: {
          value: "",
          status: Boolean,
        },
        email: {
          value: "",
          status: Boolean,
        },
        message: {
          value: "",
          status: Boolean,
        },
      },
      sending: false,
      sent: false,
      bindTelProps: {
        id:"phoneContact",
        mode: "international",
        defaultCountry: "MX",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: true,
        inputOptions:{
          placeholder: "Teléfono*",
        },
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        preferredCountries: ["MX"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "off",
        name: "telephone",
        maxLen: 18,
        inputClasses: "form-control",
      },
    };
  },
  mounted() {
    this.url = this.SITE + this.$route.path;
    if(this.nameRoute=='DevelopmentSections'){
      this.contactForm.message.value=`HOLA! Me gustaría saber más sobre la siguiente unidad:
         <br/> <b>Nombre de la unidad:</b> "${this.unitInfo.name}"
         <br> <b>Folio de la unidad:</b> ${this.unitInfo.folio}
         <br> <b>Desarrollo:</b> ${this.devInfo.developmentNameEs}`;
    }
  },
  methods: {
    sendMail() {
      //Activate Loader
      this.sending = true;

      //Validate empty form
      for (let x in this.contactForm) {
        if (this.contactForm[x].value == "") {
          this.contactForm[x].status = false;
          this.sending = false;
          return false;
        }
      }

      //Validate email
      if (!this.validateEmail(this.contactForm.email.value)) {
        this.$swal.fire({
          icon: "error",
          text: "El formato del correo electrónico ingresado no es válido.",
          showConfirmButton: false,
          showCloseButton: true,
        });
        this.contactForm.email.status = false;
        this.sending = false;
        return false;
      } else {
        this.contactForm.email.status = true;
      }

      //Validate with captcha
      this.$refs.invisibleRecaptcha.execute();
    },
    validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    onCaptchaVerified() {
      var self = this;
      let config = self.PARAMS;
      var contactType;
      var agentId;

      let data = `m=mailerContact&name=${self.contactForm.name.value}&email=${self.contactForm.email.value}&phone=${self.contactForm.phone.value}&companyName=${self.companyInfo.companyName}&companyEmail=${self.companyInfo.reserveemail}&companyAddress=${self.companyInfo.address}&companyPhone=${self.companyInfo.phone}&companyLogo=${self.companyInfo.logoClean}&special=${self.$store.state.ID_COMPANY}`;
      switch (this.nameRoute) {
        case "Contact":
          contactType=1;
          agentId='';
          data += `&origin=contact&urlSite=${self.SITE}`;
          break;
        case "Property":
        case "PropertyAgent":
        case "PropertyShort":
          contactType=2;
          agentId=self.propertyInfo.agent.agentId
          data += `&folio=${self.propertyInfo.folio}&urlProp=${self.url}&agentEmail=${self.propertyInfo.agent.email}&origin=property&urlSite=${self.SITE}`;
          break;
        case "Development":
        case "DevelopmentOutName":
          contactType=3;
          agentId=self.devInfo.agentId
          data += `&folio=${self.devInfo.folio}&urlProp=${self.url}&agentEmail=${self.devInfo.agent.email}&origin=property&urlSite=${self.SITE}`;
          break;
        case "DevelopmentSections":
          contactType=2;
          agentId=self.unitInfo.contact.soldagentid
          self.url=`${self.SITE}/desarrollo-test/${self.devInfo.folio}`;
          data += `&folio=${self.devInfo.folio}&urlProp=${self.url}&agentEmail=${self.unitInfo.contact.email}&origin=property&urlSite=${self.SITE}`;
          break;
        case "Agent":
          contactType=1;
          data += `&origin=contact&bcc=${self.agent.email}&urlSite=${self.SITE}`;
          break;
      }
      config.body = data;
      //Send Mail



      services.sendMail(self.URL,config)
            .then((res)=>{
                if(res==200){

                    $("#modalUnit .close").click();
                    self.$swal.fire({
                        icon: 'success',
                        title: '¡Envio completo!',
                        text: `Gracias por contactarnos :)`,
                        showConfirmButton: false,
                        showCloseButton: true,
                    });
                    self.sending=false;
                    self.sent=true;

                    /*
                      Contact type:
                      1-Contacto gral
                      2-Propiedades
                      3-Desarrollos

                      num_desarrollo
                      propertyid
                    */
                    self.$getLocation()
                    .then(coordinates=>{
                        let contactInfo={
                            fullname:self.contactForm.name.value,
                            email:self.contactForm.email.value,
                            phone:self.contactForm.phone.value,
                            message:self.contactForm.message.value,
                            latitude:coordinates.lat,
                            longitude:coordinates.lng,
                            contacttype:contactType,
                            subContact:217,
                            contact: 25
                        }
                        if(contactType==2){
                          if(self.nameRoute=='DevelopmentSections'){
                            contactInfo.propertyid= self.unitInfo.folio;
                            contactInfo.num_desarrollo= self.devInfo.folio
                          }else{
                            contactInfo.propertyid= self.propertyInfo.folio
                          }
                        }
                        if(contactType==3) contactInfo.num_desarrollo= self.devInfo.folio;
                        if(contactType!=1) contactInfo.soldagentid= agentId
                        self.$store.dispatch('setNewContact',contactInfo);
                    })
                    .catch(()=>{
                        let contactInfo={
                            fullname:self.contactForm.name.value,
                            email:self.contactForm.email.value,
                            phone:self.contactForm.phone.value,
                            message:self.contactForm.message.value,
                            latitude:0,
                            longitude:0,
                            contacttype:contactType ,
                            subContact:217,
                            contact: 25
                        }
                        if(contactType==2){
                          if(self.nameRoute=='DevelopmentSections'){
                            contactInfo.propertyid= self.unitInfo.folio;
                            contactInfo.num_desarrollo= self.devInfo.folio
                          }else{
                            contactInfo.propertyid= self.propertyInfo.folio
                          }
                        }
                        if(contactType==3)contactInfo.num_desarrollo= self.devInfo.folio;
                        if(contactType!=1) contactInfo.soldagentid= agentId;
                        self.$store.dispatch('setNewContact',contactInfo);
                    })
                }else{
                    self.$swal.fire({
                        icon: "error",
                        text: "No se pudo completar el envio del formulario.",
                        showConfirmButton: false,
                        showCloseButton: true
                    });
                }
            });
    },
    onCaptchaExpired() {
      this.$swal.fire({
        icon: "error",
        text: "No se pudo completar el envio del formulario.",
        showConfirmButton: false,
        showCloseButton: true,
      });
      this.sending = false;
      this.$refs.invisibleRecaptcha.reset();
    },
  },
};
</script>

<style scoped>
input{
    display: inline-block;
    box-sizing: border-box;
}
textarea{
    display: inline-block;
    box-sizing: border-box;
}

.vti__dropdown{

  outline: none !important;
}

.vti__input:focus{
  border-color: #1f3c88 !important;
}

.form-group label{
  font-weight: 400;
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.1rem;
  line-height: 1.7;
}
.vue-tel-input{
  border: 1px solid #ced4da !important;
}

</style>
