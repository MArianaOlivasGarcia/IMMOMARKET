<template>

    <div class="site-navbar mt-4">
      <div class="container py-1">
        <div class="row align-items-center">
          <div class="col-8 col-md-8 col-lg-4">
            <NuxtLink to="/">
              <img
                class="home-logo"
                src="@/static/images/new_immoLogoHorizontal.png"
                alt="ImmoMarket-Logo-Official"
              />
            </NuxtLink>
          </div>
          <div class="col-4 col-md-4 col-lg-8">
            <nav
              class="site-navigation text-right text-md-right"
              role="navigation"
            >
              <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                <a href="#" class="site-menu-toggle js-menu-toggle text-black"
                  ><span class="icon-menu h3"></span
                ></a>
              </div>

              <Navbar navStyle="fullScreen"/>
            </nav>
          </div>
        </div>
      </div>
    </div>


</template>

<script>
import { mapGetters } from "vuex";
export default {

  computed: {
    ...mapGetters({
      info: "_getInfoCompany",
    }),
  }
};
</script>

<style scoped>
.home-logo {
  width: 27vw;
}
@media (min-width: 991px) {
  .home-logo {
    width: 9vw;
  }
}
</style>
