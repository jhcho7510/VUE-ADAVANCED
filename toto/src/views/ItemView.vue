<template>
  <div>
      <section>
        <user-profile :info="fetchedItem">
          <!-- <div slot="username">{{fetchedItem.user}}</div> -->
            <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                {{fetchedItem.user}}
            </router-link>
          
          <template slot="time">{{'Postend ' + fetchedItem.time_ago}}</template>
        </user-profile>
        <!-- 질문 상세 정보 -->
          <!-- <div class="user-container">
              <div>
                  <i class="fas fa-user"></i>
              </div>
              <div class="user-description">
                  <router-link :to="`/user/${fetchedItem.user}`">
                      {{fetchedItem.user}}
                  </router-link>                     
                  <div class="time">
                      {{fetchedItem.time_ago}}
                  </div>
              </div>
          </div>                     -->
        </section>
        <section>
          <h2>{{fetchedItem.title}}</h2>
        </section>
      <section>
          <!-- 질문 댓글 -->
          <div v-html="fetchedItem.content"></div>
      </section>

  </div>
  
  <!-- <div>{{fetchedItem.title}}</div> -->
</template>

<script>
import {mapGetters} from 'vuex';  
import UserProfile from '../components/UserProfile.vue';
export default {
  components : {
    UserProfile,
  },
  computed: {
      ...mapGetters([
          'fetchedItem' // this.$store.state.item;
      ]),
  },
  
  created() {
    const itemId = this.$route.params.id;
    console.log('itemId',itemId);
    this.$store.dispatch('FETCH_ITEM',itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
<!-- <template>
  <div>{{this.$store.state.item.title}}</div>
</template>

<script>
export default {
  created() {
    const itemId = this.$route.params.id;
    console.log('itemId',itemId);
    this.$store.dispatch('FETCH_ITEM',itemId);
  }
}
</script>

<style>

</style> -->