<template>
    <ul>
        <!-- <li v-for="user in users" v-bind:key="user.title">{{user.title}}</li> -->
        <li v-for="toto in this.$store.state.news" v-bind:key="toto.title">
          <a v-bind:href="toto.url">
            {{toto.title}}
          </a>
          <small>
            {{toto.time_ago}} by 
            <!-- {{toto.user}} -->
            <!-- <router-link v-bind:to="'/user/'+ toto.user">{{toto.user}}</router-link> -->
            <router-link :to="`/user/${toto.user}`">{{toto.user}}</router-link>
          </small>
        </li>    
    </ul>
</template>

<script>

//import { fetchNewsList } from '../api/index.js'
import {mapGetters} from 'vuex'
export default {
  // data() {
  //   return {
  //     users:[]
  //   }
  // },
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    // fetchNewsList()
    // .then(response => {
    //   console.log(response);
    //   this.users = response.data;
    // })
    // .catch(error => console.log(error))

  }
}
</script>

<style>

</style>