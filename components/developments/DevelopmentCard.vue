<template>
  <div class="col-md-6 col-lg-4 mb-4">
    <div class="property-entry h-100">
      <a @click="goToDevelopment()" class="property-thumbnail">
        <div class="offer-type-wrap">
          <span class="offer-type bg-danger">#{{ item.folio }}</span>
        </div>
        <div v-if="info.imageLogo" class="watermark" :style="'background-image:url('+info.imageLogo+'); '"> </div>
        <img
          id="propImg"
          :src="item.image.smallphoto"
          :alt="item.image.alt"
          :title="item.image.title"
          class="img-fluid"
        />
      </a>
      <div class="p-4 property-body">
        <h2 class="property-title">
          <a @click="goToDevelopment()">{{ item.developmentNameEs }}</a>
        </h2>
        <span class="property-location d-block mb-3"
          ><span class="property-icon icon-room"></span>
          {{ item.address }}</span
        >
        <strong class="property-price text-primary mb-3 d-block text-success"
          >{{ $t("components.development_card.since") }}
          {{ item.priceFrom }}</strong
        >
        <b id="leyendaPrecios" class="property-specs-wrap mb-3 mb-lg-0">{{
          $t("components.property_card.legend")
        }}</b>
        <hr />

        <ul
          class="property-specs-wrap mb-3 mb-lg-0"
          v-if="
            item.m2From != 0 ||
            item.m2To != 0 ||
            item.bedFrom != 0 ||
            item.bathFrom != 0
          "
        >
          <li v-if="item.bedFrom > 0">
            <span class="property-specs">{{
              $t("components.development_card.bedrooms")
            }}</span>
            <span class="property-specs-number">{{ item.bedFrom }} </span>
          </li>
          <li v-if="item.bathFrom > 0">
            <span class="property-specs">{{
              $t("components.development_card.bathrooms")
            }}</span>
            <span class="property-specs-number">
              {{ item.bathFrom }}
            </span>
          </li>
          <li v-if="item.m2From != 0 || item.m2To != 0">
            <span class="property-specs">{{
              $t("components.development_card.construction")
            }}</span>

            <span class="property-specs-number" v-if="item.m2From != 0">
              {{ item.m2From }} m <sup>2</sup>c</span
            >
            <span class="property-specs-number" v-else-if="item.m2To != 0">
              {{ item.m2To }} m<sup>2</sup>c</span
            >
          </li>
        </ul>


      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import services from "@/store/_services";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
   computed:{
    ...mapGetters({
      info:'_getInfoCompany',
    }),
  },
  methods: {
    goToDevelopment() {
      let nameDevFilt = services.normalize(this.item.developmentNameEs);
      let folio = this.item.folio;
      this.$router.push(`/desarrollo/${folio}/${nameDevFilt}`)

      // this.$router.push({
      //   name: "Development",
      //   params: {
      //     folio,
      //     nameDevFilt,
      //   },
      // });
    },
  },
};
</script>

<style scoped>
.not-price {
  color: red !important;
  text-decoration: line-through;
}
img {
  width: 100%;
}
#propImg {
  height: 250px;
  width: 350px;
  cursor: pointer;
}
@media (max-width: 767px) {
  #contain_tarjet_property {
    width: 65%;
  }
  #propImg {
    height: auto;
    width: 100%;
  }
}
@media (max-width: 520px) {
  #contain_tarjet_property {
    width: 100%;
  }
}
#leyendaPrecios {
  color: #000;
  font-size: 9px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.bg-danger {
  background-color: #ef4b4a !important;
}

.watermark{
    height: 250px;
    width: 100%;
    background-size: 30%;
    z-index: 1;
    cursor: pointer;
}

.watermark{
  opacity: .6;
}
</style>
