<template>
  <div class="indexBg">
  	<cube-input v-model="SearchS" :clearable="clearable" placeholder="搜索..."></cube-input>
  	<ul>
  		<li class="songSlist" v-for="item in songsData">
  			<span>{{item.name}}</span>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    	SearchS:"",
    	songsData:[],
    	clearable: {
        visible: true,
        blurHidden: true
      },
    }
  },
  created(){
  	this.searchSongs("烟花易冷")
  },
  methods:{
		searchSongs(name){
			var data = {
				type:"search",
				search_type:1,
				s:name
			};
		 	this.$api.get('getdata', data, res => {
		 		console.log(res.data.result.songs)
		 		this.songsData = res.data.result.songs;
		 	})
		}
  }
}
</script>

<style scoped>
	
</style>
