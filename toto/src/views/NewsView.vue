<template>
  <ul class="news-list">
      <!-- <li v-for="toto in newsInfo" v-bind:key="toto.title"> -->
      <li v-for="toto in fetchedNews" v-bind:key="toto.title" class="post">
        <!-- 포인트영역-->
        <div class="points">
          {{toto.points}}
        </div>
        
        <!-- 기타 정보 영역-->
        <div>
          <p class="news-title">
            <a v-bind:href="toto.url">{{toto.title}}</a>
          </p>
          <small class="link-text">
            by 
          <router-link :to="`/user/${toto.user}`" class="link-text">{{toto.user}}</router-link>
          </small>
        </div>  

        <!-- <a v-bind:href="toto.url">
          {{toto.title}}
        </a>
        <small>
          {{toto.time_ago}} by 
          <router-link :to="`/user/${toto.user}`">{{toto.user}}</router-link>
        </small> -->
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

<style scoped>
  .news-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid#eee;
  }
  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }
  .news-title {
    margin: 0;
  }
  .link-text{
    color: #828282;
  }
</style>