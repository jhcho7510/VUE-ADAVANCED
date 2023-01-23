<template>
  <div>
    <ul class="news-list">
        <li v-for="toto in listItems" v-bind:key="toto.title" class="post">
            <!-- 포인트영역-->
            <div class="points">
            {{toto.points || 0}}
            </div>
            
            <!-- 기타 정보 영역-->
            <div>
                <p class="news-title">
                  <template v-if="toto.domain" >
                    <a v-bind:href="toto.url">{{toto.title}}</a>
                  </template> 
                  <template v-else>
                    <router-link :to="`item/${toto.id}`">
                      {{toto.title}}
                    </router-link>
                  </template>


                </p>
                <small class="link-text">
                    {{toto.time_ago}} by 
                    <router-link 
                      v-if="toto.user" :to="`/user/${toto.user}`" class="link-text">{{toto.user}}</router-link>
                    <a v-else :href="toto.url">
                      {{toto.domain}}
                    </a>  
                </small>
            </div>  
        </li>          
    </ul>      
  </div>
</template>

<script>
export default {
  // created() {
  //     // this.$store.dispatch('FETCH_NEWS');
  //     const name = this.$route.name;
  //     let bizName = '';
  //     if(name === 'news') {
  //       bizName = 'FETCH_NEWS';
  //     }
  //     else if(name === 'ask') {
  //       bizName = 'FETCH_ASK';
  //     }
  //     if(name === 'jobs') {
  //       bizName = 'FETCH_JOBS';
  //     }
  //     this.$store.dispatch(bizName);

  // },
  computed : {

    listItems() {
      return this.$store.state.list;
        // const name = this.$route.name;
        // let stateUri = '';
        // if(name === 'news') {
        //     stateUri = this.$store.state.news;
        // } else if(name === 'ask') {
        //     stateUri = this.$store.state.ask;
        // } else if(name === 'jobs') {
        //     stateUri = this.$store.state.jobs;
        // }
        // return stateUri;
    }
    
      //   this.$store.state.news
        
    //   litsItems() {
    // // let bizName = '';
    //     if(name === 'news') {
    //         return this.$store.state.news;
    //     }
    //     else if(name === 'ask') {
    //         return this.$store.state.ask;
    //     }
    //     if(name === 'jobs') {
    //         return this.$store.state.jobs;
    //     }
    //   }
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