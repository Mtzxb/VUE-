<template>
  <div id="app">
	  <Header></Header>
	    <router-view></router-view>
	  <Footer></Footer>
  </div>
</template>

<script>
	import Header from "./components/head.vue"
	import Footer from "./components/foot.vue"
	export default {
	  name: 'App',
		components: {
		  Header,
		  Footer,
		}
	}
</script>

<style>

</style>
