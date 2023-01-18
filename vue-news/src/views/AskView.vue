<template>
    <ul class="news-list">
        <!-- <li v-for="user in users" v-bind:key="user.title">{{user.title}}</li>   -->
        <li v-for="toto in fetchedAsk" v-bind:key="toto.title" class="post">
            <div class="points">
                {{toto.points}}
            </div>            
            <div>
                <P class="news-title
                ">
                    <router-link :to="`item/${toto.id}`">{{toto.title}}</router-link>
                </P>
                <small class="link-text">
                    {{toto.time_ago}} by
                    <router-link :to="`user/${toto.user}`" class="link-text">{{toto.user}}</router-link>
                </small>
            </div>
        </li>         
    </ul>
</template>

<script>
// import {fetchAskList} from '../api/index.js';
import {mapGetters} from 'vuex';

export default {
    // data() {
    //     return {
    //         users:[],
    //     }
    // },
    computed : {
        ...mapGetters([
            'fetchedAsk'
        ])
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