import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news:[],
        jobs:[],
        ask:[],
        user:{},
        item:{},
        list:[],
    },
    getters: {
        fetchedNews(state){
            return state.news;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedUser(state) {
            return state.user;
        },
        fetchedItem(state) {
            return state.item;
        }        

    },
    mutations: mutations,
    actions: actions,
})