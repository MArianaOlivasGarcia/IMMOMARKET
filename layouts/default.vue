

<template lang="html">
  <div>
    <div class="site-wrap">
      <div class="site-mobile-menu">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body">
          <Navbar navStyle="mobile"/>
        </div>
      </div>
      <Header/>
    </div>
    <Banner v-if="!$route.meta.hideBanner" :pageTitle="$route.meta.pageTitle" image="@/static/images/hero.jpg"/>
    <Nuxt />
    <Footer/>
  </div>      
  <!-- <Preloader v-else/>   -->
</template>
<script>


export default {
  data(){
    return{
      loader:true
    }
  },
  methods:{
    checkCookie(keyName){
      let confirmCookie = this.$cookies.get(keyName);

      if(!confirmCookie){
        this.createCookie(keyName, 1, 365);
        this.$store.dispatch('setNewVisit');
      }else{
        this.$store.dispatch('setConcurrentVisit');
      }
    },

    createCookie(name, value, expirate) {
      var d = new Date();
      d.setTime(d.getTime() + (expirate*24*60*60*1000));
      var expires = "expires="+d.toUTCString();
      //create
      this.$cookies.set(name, value, expires);
    }
  },

  created(){
    var self=this;
    let state=this.$store.state;
  
    this.$store.dispatch('getInfoCompany');
    this.$store.dispatch('getCompanyMetadata');

    setTimeout(()=>{
      this.loader=false
    },2000);
    
    //Visits Control
    if (process.env.NODE_ENV === 'production') {
      this.checkCookie('countVisit');
      window.addEventListener('unload', function () {
        if (!navigator.sendBeacon) return;

        let url = state.API_URL;
        // Create the data to send
        var data = {
          companyid:  self.$store.state.ID_COMPANY,
          live: '0'
        };
        //var data = "companyid=" + self.$store.state.ID_COMPANY + "&live=0" ;
        var blob = new Blob([JSON.stringify(data)], {
          type: 'application/json'
        });
        
        // Send the beacon
        navigator.sendBeacon(url, blob);

        // Log the data and result
        //console.log("sendBeacon: URL = ", url, "; data = ", data, "; status = ", status);
      });
    }
    
  }
};
</script>
<style>

  .watermark{ 
    /*background:transparent url('./assets/images/logoImmo/immoCRMLogo.png') no-repeat;
    */
    background-size: contain;
    background-repeat:no-repeat;
    background-position: center;
    
    object-position: center;
    position: absolute;
    width: 100%;
  }
  .watermark{
    opacity: 0.9;
  }
</style>
