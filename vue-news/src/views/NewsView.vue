<template>
    <ul>
        <li v-for="user in users" v-bind:key="user.title">{{user.title}}</li>
    </ul>
</template>

<script>
import {fetchNewsList} from '../api/index.js';

export default {
    data() {
        return {
            users:[]
        }
    },
    created() {
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        fetchNewsList()
        .then(response => {
            console.log(response)
            this.users = response.data;
         })
        .catch(function(error){console.log(error)})

    }    
}
</script>

<style>

</style>