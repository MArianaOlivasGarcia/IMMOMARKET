<template>

<div id="banner" class="site-blocks-cover inner-page-cover overlay aos-init aos-animate parallax-banner" style="" data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center ">
          <div class="col-md-6 text-left">
            <!-- <h1 class="mb-2">{{$t(`${pageTitle}`)}}</h1> -->
            <h1 class="mb-2">{{pageTitle}}</h1>
          </div>
          <div class="col-md-6 text-right">
          <p  class="breadcrumbs">
            <span class="mr-2"><a href="/" class="homesi"> {{$t("routes.home.breadcrumb")}}</a></span
            >/ <span> {{pageTitle}}</span>
          </p>
          </div>
        </div>
      </div>
    </div>

   
</template>
<script>
export default {
    props:{
        image:{
            type:String,
        },
        pageTitle:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>

@media only screen and (max-width:991px) {
  h1{
    font-size: 2rem;
  }
}
@media only screen and (max-width:767px){
  h1{
    font-size: 1.4rem;
  }
}
.homesi{
  color:#fa002c;
  font-family: 'MontserratBold';
}
.breadcrumbs{
    font-size: 1rem !important;
  font-family: 'Montserrat';
}
#banner{
  background-image: url('/images/banner1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  position: relative;
  padding: 3px 0 50px 0 !important;
}
#banner::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(26, 26, 26, 0.5);
}
</style>
