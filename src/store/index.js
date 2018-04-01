import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        one: 1,
        two: 2
    },
    getters: {
        one(state, getters) {
            return state.one
        },
        two(state, getters) {
            return state.two
        }
    },
    mutations: {
        inc(state, val) {
            state.one += val;
        }
    },
    actions: {
        send({commit, state}) {
            // api --> val --> commit()
            console.log('state.two', state.two);
            commit('inc', 3);
        }
    },
    modules: {
        asdsad: {
            namespaced: true,
            state: {
                three: 3,
                one: 1.1
            },
            getters: {
                one(state, getters, rootState, rootGetters) {
                    return state.one
                },
                three(state) {
                    return state.three
                },
                sum(state, getters, rootState, rootGetters) {
                    return state.one + rootGetters.one
                },
            },
            mutations: {},
            actions: {
                send(context) {
                    console.log("context", context);
                }
            },
            modules: {}
        }
    },
    strict: true, //fasle

})
