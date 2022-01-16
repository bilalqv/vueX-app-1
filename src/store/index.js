import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    colorCode: 'red'
  },
  mutations: {
    increment(state, num){
      state.counter += num;
    },
    decrement(state, num){
      state.counter -= num;
    },
    setColorCode(state, newColor ){
      state.colorCode = newColor
    }
  },
  actions: {
    increment({ commit }){
      fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then( res => res.json() )
      .then(data => commit('increment', data) )
      .catch(err => console.log(err) )
    },
    decrement({ commit }){
      fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then( res => res.json() )
      .then(data => commit('decrement', data) )
      .catch(err => console.log(err) )
    },
    setColorCode({commit}, newValue){
      commit('setColorCode', newValue)
    }
  },
  getters:{
    counterSqr( state ){
      return state.counter * state.counter
    }
  },

})
