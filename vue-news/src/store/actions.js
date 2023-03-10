import {fetchNewsList, fetchJobsList,fetchAskList, fetchUserInfo, fetchItemInfo} from '../api/index.js';

export default {
    FETCH_NEWS(context){
        fetchNewsList()
        .then(response => {
            //console.log('----------------------------------');
            console.log(response.data);
            context.commit('SET_NEWS',response.data);

        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
            .then(({data}) =>{
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            })            
    },
    FETCH_ASK(context){
        fetchAskList()
        .then(response => {
            context.commit('SET_ASK', response.data);
        })
    },
    FETCH_USER({commit}, name){
        fetchUserInfo(name)
        .then(({data}) =>{
            commit('SET_USER', data);
        })
        .catch(error => {console.log(error)})
    },
    FETCH_ITEM({commit}, itemId){
        fetchItemInfo(itemId)
        .then(({data}) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {console.log(error)})
    },
}