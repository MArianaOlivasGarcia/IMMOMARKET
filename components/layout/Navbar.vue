<template>
    <ul :class="(navStyle=='mobile')?'site-nav-wrap':'site-menu js-clone-nav d-none d-lg-block'">
        <li class="animated-link-dark"><NuxtLink to="/">{{ $t("layout.nav.home") }}</NuxtLink></li>
        <li class="animated-link-dark"><NuxtLink to="/propiedades?pagina=1">{{ $t("layout.nav.properties") }}</NuxtLink></li>
        <li class="animated-link-dark"><NuxtLink to="/contacto">{{$t("layout.nav.contact") }}</NuxtLink></li>
    </ul>
</template>
<script>


export default {
    props:{
        navStyle:{
            type:String,
            required:true
        }
    }
}
</script>