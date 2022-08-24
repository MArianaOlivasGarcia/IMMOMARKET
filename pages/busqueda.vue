<template>
  <div>
    <div class="site-section site-section-sm pb-0">
      <div class="container">
        <div class="row">
          <!-- Search    
          ==================================================-->
          <SearchForm />
        </div>
      </div>
    </div>

    <br />
    <NotResults v-if="error == 204" code="204" />
    <div v-else class="container">
      <SectionLoader v-if="!results" />
      <div v-else class="row mb-5">
        <template v-if="!fromDevs">
          <PropertyCard
            v-for="(item, i) in results"
            :key="item.folio"
            :name="item.folio"
            :index="i"
            :item="item"
          />
        </template>
        <template v-else>
          <DevelopmentCard
            v-for="(item, i) in results"
            :key="item.folio"
            :name="item.folio"
            :index="i"
            :item="item"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  meta: {
    pageTitle: 'Resultados de Búsqueda',
    hideBanner: false,
  },
  data() {
    return {
      codeShareProperties: 0,
      revRoute: null,
      developments: false,
    };
  },
  computed: {
    ...mapGetters({
      results: "_getResults",
      error: "_getError",
    }),
    fromDevs() {
      if (this.$route.name == "ResultsDevs") {
        return true;
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next((self) => {
      self.prevRoute = from;
      if (!self.prevRoute.name) {
        self.$router.push({ name: "Home" });
      }
    });
  },
};
</script>