import {
    fetchNewsList, 
    fetchJobsList,
    fetchAskList, 
    fetchList, 
    fetchUserInfo, 
    fetchItemInfo} from '../api/index.js';

export default {
    // promise
    // FETCH_NEWS(context){
    //     fetchNewsList()
    //     .then(response => {
    //         console.log(response.data);
    //         context.commit('SET_NEWS',response.data);
    //         return response;

    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },

    // async
    async FETCH_NEWS(context){
        const response = await fetchNewsList();
        context.commit('SET_NEWS',response.data);
        return response;
    },    

    // promise
    // FETCH_JOBS({commit}){
    //     fetchJobsList()
    //         .then(({data}) =>{
    //             commit('SET_JOBS', data);
    //             return data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })            
    // },

    // async
    async FETCH_JOBS({commit}) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    // promise
    // FETCH_ASK(context){
    //     fetchAskList()
    //     .then(response => {
    //         context.commit('SET_ASK', response.data);
    //         return response;
    //     })
    // },

    // async
    async FETCH_ASK({commit}){
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },


    FETCH_USER({commit}, name){
        return fetchUserInfo(name)
        .then(({data}) =>{
            commit('SET_USER', data);
        })
        .catch(error => {console.log(error)});
    },
    FETCH_ITEM({commit}, itemId){
        return fetchItemInfo(itemId)
        .then(({data}) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {console.log(error)});
    },

    // #2
    // FETCH_LIST({commit}, pageName){
    //     // #3
    //     return fetchList(pageName)
    //     .then(response =>{
    //         // #4
    //         commit('SET_LIST', response.data);
    //         return response;
    //     })
    //     .catch(error => console.log(error));
    // },
    async FETCH_LIST({commit}, pageName){
        const response = await fetchList(pageName);
        commit('SET_LIST',response.data);
        return response;
    },
}

/** promise sample */
// async function fetchData() {
// 	var list = await getUserList();
// 	console.log(list);
// }

// function getUserList() {
//     return new Promise(function(resolve, reject){
// 		var userList = ['user1', 'user2', 'user3'];
// 		resolve(userList);
// 	});
// }