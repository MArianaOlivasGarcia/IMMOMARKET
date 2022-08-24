<template>
    <section id="detailCarousel">
        <VueAgile v-if="items.length>0" ref="main" :fade="true" :dots="false" class="contain-slide" >
            <div v-for="(slide,i) in items" :key="slide.folio" :index="i" class="slide">
                <img  class="card-img image-slide-back" :src="slide.largefile" :alt="slide.alt"/>
                <a class="example-image-link card-img-overlay slide-img-overlay cc_pointer" :href="slide.largefile" @click="(origin=='Home')?goToProperty(slide.folio,slide.propertyNameEs):''" data-lightbox="example-set" :data-title="slide.alt">
                    <img class="image-slide" :src="slide.largefile" :alt="slide.alt"/>

                    <!-- <div v-if="info.imageLogo" class="watermark" :style="'background-image:url('+info.imageLogo+'); '"> </div> -->
                </a>
            </div>

            <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
            <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
        </VueAgile>

        <SectionLoader v-else/>

        <div class="container">
            <div class="lightbox-button-custom row">
                <br>
                <b class="col-lg-4 offset-md-8 text-right">
                    <a v-for="(photo,i) in items" :key="photo.alt" :index="i" class="example-image-link animated-link-dark" :href="photo.largefile" data-lightbox="example-set" :data-title="photo.alt">
                        <span v-if="i==0"> {{ $t("components.detail_carousel.lightbox") }} <i class='fas fa-expand'> </i> </span>
                    </a>
                </b>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    components: {
        VueAgile: () => ( process.client ?
                import('@/node_modules/vue-agile/src/Agile.vue')
                : Promise.resolve({ render: (h) => h('div') }))
    },
    props:{
        items:{
            type:Array,
            required:true
        }
    },
    computed: {
        ...mapGetters({
            info:'_getInfoCompany',
        })
    },
    methods:{
        goToProperty(folio,namePropertyEs){
            let namePropFilt=services.normalize(namePropertyEs);
            this.$router.push({
                name: 'Property',
                params: {
                    folio,
                    namePropFilt
                }
            });
        }
    },
    created(){
        this.origin=this.$route.name;
    }
}
</script>

<style >
    #detailCarousel .watermark{
        height: 40vh;
        margin-top: -40vh;
    }
    #detailCarousel .image-slide{
        object-fit: contain;
        object-position: center;
        height: 40vh;
        width: 100%;
        filter:alpha(opacity=90);
        opacity: 90;
    }
    #detailCarousel .image-slide-back{
        filter: blur(20px);
        -webkit-filter: blur(20px);
        height:  40vh;
    }
    #detailCarousel .slide-img-overlay{
        padding: 0 !important;
    }
    #detailCarousel .slide:hover .slide-caption{
        display: block;
    }
    #detailCarousel .slide-caption{
        display: none;
        margin-top: -130px;
        position: sticky;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }
    #detailCarousel .slide-caption h3{
        position: relative;
        font-size: 2rem;
        color: #fff !important;
    }
    #detailCarousel .slide-caption #folio{
        margin-left: 100px;
        float: left;
        color: #fff;
        font-size: 1rem;
    }
    #detailCarousel .background-caption{
        height: 130px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.383);
        position: absolute;
        padding: 2rem;
    }

    @media only screen and (max-width:991px){
        #detailCarousel .image-slide,
        #detailCarousel .image-slide-back,
        #detailCarousel .watermark{
            height:30vh;
        }
        #detailCarousel .watermark{
            margin-top: -30vh;
        }
        #detailCarousel  .slide-caption{
            display: block;
            margin-top: -15%;
        }
        #detailCarousel .slide-caption #folio{
            margin-left: 80px;
            font-size: 0.8rem;
        }
        #detailCarousel .background-caption{
            height:auto;
            padding: 1rem;
        }
        #detailCarousel .agile__nav-button{
            margin: -18vh ​20px !important;
        }
        #detailCarousel .slide-caption h3{
            font-size: 1.5rem;
        }
    }

    @media only screen and (max-width:767px){
        #detailCarousel .slide-caption{
            margin-top: -90px;
        }
        #detailCarousel .agile__nav-button{
            margin: -16vh 20px !important;
        }
        #detailCarousel .slide-caption h3{
            font-size: .8rem;
        }
        #detailCarousel .slide-caption #folio{
            float: none;
            margin: auto;
        }
    }

    #detailCarousel .agile__nav-button {
        margin: -22vh 40px !important;
        z-index: 9;
       background: rgba(0, 0, 0, 0.15);
border: none;
        border-radius: 100%;
        height: 40px;
        width: 40px;
        z-index: 1;
        color: #f91d43;
font-size: 1.5rem;
    }
    #detailCarousel .agile__nav-button:hover{
        color: #fff;
        background: rgba(0, 0, 0, 0.534);
    }
    #detailCarousel a{
        color: rgba(0, 0, 0, 0.6) !important;
    }

    #detailCarousel .watermark{
        height: 100%;
        background-size: 15%;
    }

    #detailCarousel .watermark{
    opacity: .6;
    }

</style>
