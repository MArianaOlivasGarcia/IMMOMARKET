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
    <NotResults v-if="error==204 && !properties" code="204"/>
    <div v-else class="container">
      <SectionLoader v-if="!properties" />
      <div v-else class="row mb-5">
        <PropertyCard
          v-for="(item, i) in properties"
          :key="item.folio"
          :name="item.folio"
          :index="i"
          :item="item"
        />
      </div>
      <div class="pagination-row col-sm-12 text-center mt-3">
                    <a  v-if="pagina != 1"
                      @click="changePageNumber( pagina - 1)" class="arrow-pag"><i class="fas fa-chevron-left"></i></a>
                    <span v-for="(item , index) of pages" :key="index">
                        <a v-if="(pagina - (inter_pg - index)) > 0 && index < total_pg" 
                        v-on:click.prevent="changePageNumber(pagina - (inter_pg - index))" 
                        :class="[(pagina - (inter_pg - index) == pagina ) ? 'active' : null, 'page ']" :id="`page${index}`">

                        {{pagina - (inter_pg - index)}} </a>  
                    </span>
                    <a  v-if="pagina != lastPage"
                    @click="changePageNumber(  ++pagina )" class="arrow-pag"><i class="fas fa-chevron-right"></i></a>
                  </div>
    </div>
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    meta: {
      pageTitle: 'Propiedades',
      hideBanner: false,
    },
    async asyncData() {

      return {

      }

    },  
  data() {
    return {
      codeShareProperties: 0,
      pag:1,
      pagina: this.$route.query.pagina,
     // paginas a mostrar:
      total_pg: 10,
      inter_pg: 4,
      pagesAux: [],
      lastPage: 0,
    };
  },
  computed: {
    ...mapGetters({
      properties: "_getProperties",
       error: "_getError",
      pages: "_getPages",
      totalPag: "_getTotalPag",
    }),
  },
   created() {
    if (this.$route.params.codeShareProperties) {
      this.codeShareProperties = this.$route.params.codeShareProperties;
    }
    // console.log('paginadeluser', this.$route.query.pagina)
    var currentPage;
    currentPage =  this.$route.query.pagina;
    this.$store.dispatch("getProperties", {'codeShareProperties' :this.codeShareProperties, 'numeroPaginas':currentPage, 'offset':6});
    var $this = this;
      $this.pagesAux = $this.pages;
      //declarando el num de la ultima pagina
      this.lastPage = this.totalPag;
     // console.log('ULTIMAPAGINA', this.lastPage)

      const numPage = this.$route.query.pagina;
        if ( numPage ) {
                this.pagina  = Number( numPage )
            }
    
      },
  methods: {
    changePageNumber(numPage){	
         this.pagina = numPage
          this.$router.push({
              path: "/propiedades",
              query: {
                  pagina: this.pagina,
              }
          })
          //  this.$store.dispatch("getProperties");
          var currentPage;
          currentPage =  this.$route.query.pagina;
          this.$store.dispatch("getProperties", {'codeShareProperties' :this.codeShareProperties, 'numeroPaginas':currentPage, 'offset':6});
          var $this = this;
            $this.pagesAux = $this.pages;
        //para que suba cada vez que de a una nueva pagina
        window.scroll(0,0)
        //Eliminar las ultimas paginas cuando llega al final
        if ( this.pagina == this.lastPage){
            $("#page3").hide();
            $("#page4").hide();
            //para testear 
            // alert('iguales', )
            // console.log('butterflies',this.pagesAux[3])
        } 
        else{
          $("#page3").show();
          $("#page4").show();
        }
    },
  }
};
</script>
<style scoped>
  .form-search{
    margin-top: 0px !important;
  }
.pagination-row a.active {
  background-color: rgb(251, 76, 107);
  border-color: transparent;
  color: #fff;
}
.pagination-row a{
  font-size:15px !important;
}
.pagination-row a.arrow-pag{
  color:rgb(251, 76, 107);
}
.pagination-row a.active:hover {
  background-color: rgb(251, 76, 107);
  border-color: transparent;
  color: #fff;
}

@keyframes animate{
  0%{
    box-shadow: 0 0 0 0 rgba(0, 129, 209, 0.7);
  }
  40%{
    box-shadow: 0 0 0 20px rgba(0,206,209, 0);
  }
  80%{
    box-shadow: 0 0 0 20px rgba(0,206,209, 0);
  }
  100%{
    box-shadow: 0 0 0 rgba(0,206,209, 0);
  }
}
.pagination-row a{
  border-radius: 0.475rem;
  height: 2.5rem;
  min-width: 2.5rem;
  font-weight: 500;
  font-size: 1.5rem;
  padding: 0.375rem 0.75rem;
  border: 0 solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  font-weight: bold;
  color:#5E6278;
  cursor:pointer;
}
.pagination-row a:hover{
  background-color: #F1FAFF;
  border-color: transparent;
  transition: color 0.2s ease, background-color 0.2s ease;
  color:rgb(251, 76, 107);
}
</style>