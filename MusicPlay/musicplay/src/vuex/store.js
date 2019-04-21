import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
     count: 1
}
//声明方法来改变count的值
const mutations = {
  add (state,n) {
  if (n) {
  state.count+=n
  } else {
    state.count++
}
  },
  reduce (state) {
    state.count--
  }
}

const actions = {
  addAction(context) {
    context.commit('add',10)
  },
  reduceAction({commit}) {
    commit('reduce')
  }
}

const getters={
    count:function(){
        return state.count+=10;
    }
}

export default new Vuex.Store({
  state,mutations,getters,actions
})