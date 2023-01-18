<template>
    <!-- <ul>
        <li v-for="toto in this.$store.state.jobs" v-bind:key="toto.title">
          <a :href="toto.url">
            {{toto.title}}
          </a>
          <small>{{toto.time_ago}} , {{toto.domain}}</small> by <small>{{toto.user}}</small>
        </li>    
    </ul> -->
    <ul class="news-list">
            <!-- <li v-for="user in users" v-bind:key="user.title">{{user.title}}</li>   -->
            <li v-for="toto in fetchedJobs" v-bind:key="toto.title" class="post">
                <div class="points">
                    {{toto.points || 0}}
                </div>            
                <div>
                    <P class="news-title">
                        <a :href="toto.url">{{toto.title}}</a>
                    </P>
                    <small class="link-text">
                        {{toto.time_ago}} by
                        <!-- <router-link :to="`user/${toto.user}`" class="link-text">{{toto.domain}}</router-link> -->
                        <a :href="toto.url">{{toto.domain}}</a>
                    </small>
                </div>
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