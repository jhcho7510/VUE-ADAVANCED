<template>
  <ul>
      <!-- <li v-for="toto in newsInfo" v-bind:key="toto.title"> -->
      <li v-for="toto in fetchedNews" v-bind:key="toto.title">
        <a v-bind:href="toto.url">
          {{toto.title}}
        </a>
        <small>
          {{toto.time_ago}} by 
          <router-link :to="`/user/${toto.user}`">{{toto.user}}</router-link>
        </small>
      </li>          
  </ul>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed : {
      ...mapGetters([ 
          'fetchedNews' // store(/store/index.js) getters의 fetchedNews Function과 매핑
      ]),
      newsInfo() {
          return this.$store.state.news;
      }
  },
  created() {
      this.$store.dispatch('FETCH_NEWS');
  }    
}
</script>

<style>

</style>