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