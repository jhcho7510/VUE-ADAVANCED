<template>
    <div></div>
  <!-- <ul class="news-list">
      <li v-for="toto in fetchedNews" v-bind:key="toto.title" class="post">
        <div class="points">
          {{toto.points}}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="toto.url">{{toto.title}}</a>
          </p>
          <small class="link-text">
            {{toto.time_ago}} by 
          <router-link :to="`/user/${toto.user}`" class="link-text">{{toto.user}}</router-link>
          </small>
        </div>  
      </li>          
  </ul> -->
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
}
</script>


<!-- <script>
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
</script> -->