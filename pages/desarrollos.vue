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
    <NotResults v-if="error==204 && !developments" code="204"/>
    <div v-else class="container">
      <SectionLoader v-if="!developments" />
      <div v-else class="row mb-5">
        <DevelopmentCard
          v-for="(item, i) in developments"
          :key="item.folio"
          :name="item.folio"
          :index="i"
          :item="item"
        />
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      developments: "_getDevelopments",
      error: "_getError",
    }),
  },
  created() {
    this.$store.dispatch("getDevelopments");
  },
};
</script>
