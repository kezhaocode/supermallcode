import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carlist: []
    },
    mutations: {
        addcart(state, payload) {
            state.carlist.push(payload)
        }
    },
    actions: {},
    modules: {}
})
