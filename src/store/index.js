import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    item:{}
  },
  getters:{
    getItem(){
      return store.state.item
    }
  },
  mutations:{
    SET_ITEM(state,val){
      state.item = val
    }
  }
})

export default store