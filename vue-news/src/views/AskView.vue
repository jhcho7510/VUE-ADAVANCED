<template>
    <div>
        <list-item></list-item>
    </div>
    <!-- <ul class="news-list">
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
    </ul> -->
</template>

<script>
// import {fetchAskList} from '../api/index.js';
// import {mapGetters} from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
    components : {
        ListItem,
    }
    // computed : {
    //     ...mapGetters([
    //         'fetchedAsk'
    //     ])
    // },
    // created() {
    //     this.$store.dispatch('FETCH_ASK');
    // }
}
</script>