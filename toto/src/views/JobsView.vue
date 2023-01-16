<template>
    <ul>
        <!-- <li v-for="user in users" v-bind:key="user.title">{{user.title}}</li> -->
        <li v-for="toto in this.$store.state.jobs" v-bind:key="toto.title">
          <a :href="toto.url">
            {{toto.title}}
          </a>
          <small>{{toto.time_ago}} , {{toto.domain}}</small> by <small>{{toto.user}}</small>
        </li>    
    </ul>  
</template>

<script>
// import {fetchJobsList} from '../api/index.js'
import {mapGetters} from 'vuex';
export default {
    
	/******************************************************/
	/*
	 * data의 'users' 속성을 정의해서 쓰는 대신 STORE를 이용해 처리하며,
	   처리시 store의 'getter'를 이용해서 데이터에 접근한다.
	   Vuex에 'mapGetters'를 통해 getter로 접근해서 ./store/index.js에 정의되어 있는 'fetchdJobs' 
	       getters:{
              fetchedNews(state){ ...
		에 접근한다.	  
	 */
	// data() {
    //     return {
    //         users: []
    //     }
    // },
    computed : {
        ...mapGetters([
            'fetchdJobs'
        ])
    },
	/******************************************************/
    created() {
        this.$store.dispatch('FETCH_JOBS');
        // fetchJobsList()
        // //axios.get('https://api.hnpwa.com/v0/jobs/1.json')
        // .then(response =>{
        //     this.users = response.data                
        // })
        // .catch(error => console.log(error))
    }
}
</script>

<style>

</style>