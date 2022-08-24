<template>
  <section id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h3>{{$t(`components.error_section.${code}.title`)}}</h3>
				<h1>
          <span v-for="(number, i) in splitCode" :key="number" :index="i">{{number}}</span>
        </h1>
			</div>
      <br>
			<h2 class="mt-4">{{$t(`components.error_section.${code}.description`)}}</h2>
		</div>
	</section>
</template>
<script>
export default {
  props:{
    code:{
      typeo:String,
      require:true
    }
  },
  computed:{
    splitCode(){
      console.log(this.code);
      let stringCode= this.code.toString();
      console.log(stringCode);
      return stringCode.split("")
    }
  }
}
</script>
<style scoped>
#notfound {
  position: relative;
  height: 22rem;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.notfound {
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notfound .notfound-404 {
  position: relative;
  height: 240px;
}

.notfound .notfound-404 h1 {
  font-family: 'Montserrat', sans-serif;
  position: relative;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  color: #26262654;
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
}

.notfound .notfound-404 h1>span {
  text-shadow: -8px 0px 0px #fff;
}

.notfound .notfound-404 h3 {
  font-family: 'Cabin', sans-serif;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #26262633;
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
}

.notfound h2 {
  font-family: 'Cabin', sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #26262633;
  margin-top: 0px;
  margin-bottom: 25px;
}

@media only screen and (max-width: 767px) {
  .notfound .notfound-404 {
    height: 200px;
  }
  .notfound .notfound-404 h1 {
    font-size: 200px;
  }
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    height: 162px;
  }
  .notfound .notfound-404 h1 {
    font-size: 162px;
    height: 150px;
    line-height: 162px;
  }
  .notfound h2 {
    font-size: 16px;
  }
}
</style>