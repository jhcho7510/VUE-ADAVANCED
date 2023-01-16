<template>
    <ul>
        <!-- <li v-for="toto in this.$store.state.jobs" v-bind:key="toto.title">{{toto.title}} -->
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
// import {fetchJobsList} from '../api/index.js';

import {mapGetters} from 'vuex'
export default {
  // data() {
  //   return {
  //     users:[],
  //   }
  // },

  computed : {
    ...mapGetters([ // store의 getter
      'fetchedJobs'
    ]),
    jobsInfo()  {
      return this.$store.state.jobs;
    }
  },

  created() {
    this.$store.dispatch('FETCH_JOBS'); // store의 actions
    // fetchJobsList()
    // .then(response => {
    //   this.users = response.data;
    // })
    // .catch(error =>console.log(error))
  }
}
</script>

<style>

</style>