<template>
  <ul>
    <!-- <li v-for="user in users" v-bind:key="user.title">{{user.title}}</li> -->
    <!-- <li v-for="toto in this.$store.state.ask" v-bind:key="toto.title">{{toto.title}}</li> -->
    <!-- <li v-for="toto in fetchedAsk" v-bind:key="toto.title">{{toto.title}}</li> -->
    <li v-for="toto in fetchedAsk" v-bind:key="toto.title">
        <!-- <a v-bind:href="toto.url"> -->
        <a :href="toto.url">
        {{toto.title}}
        </a>
        <small>{{toto.time_ago}}</small> by <small>{{toto.user}}</small>
    </li>        
</ul>
</template>

<script>
// import {fetchAskList} from '../api/index.js';
import { mapGetters } from 'vuex';
// import { mapState, mapGetters } from 'vuex';
export default {
    // data() {
    //     return {
    //         users:[]
    //     }
    // },
    computed: {
        ...mapGetters([
            'fetchedAsk'
    ])
        // ...mapGetters({
        //     askItems:'fetchedAsk'
        // })
        // ...mapState({
        //     ask: state => state.ask,
        // })
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
        // fetchAskList()
        // .then(response => {
        //     this.users = response.data;
        // })
        // .catch(error => {console.log(error)})        
    }
}
</script>

<style>

</style>