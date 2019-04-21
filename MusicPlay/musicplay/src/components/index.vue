<template>
  <div class="bg">
    <input type="text" v-model="userName"/>
    <input type="text" v-model="passWord"/>
    <p v-text="urlDate"></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      userName:"",
      passWord:"",
    }
  },
  watch:{
  	userName(a,b){
  		console.log(a)
  	}
  },
  computed:{
  	urlDate(){
  		return this.userName +"&"+ this.passWord;
  	}
  },
  created(){
  	
  },
  methods:{
//	searchSongs(name){
//		var data = {
//			type:"search",
//			search_type:1,
//			s:name
//		};
//		var url = "/api";
//		this.axios.get(url,{parms:data}).then((res) =>{
//			console.log(res)
//		})
//	}
  }
}
</script>

<style scoped>

</style>
