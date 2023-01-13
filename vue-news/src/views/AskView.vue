<template>
    <ul>
        <li v-for="user in users" v-bind:key="user.title">{{user.title}}</li>  
    </ul>
</template>

<script>
import {fetchAskList} from '../api/index.js';

export default {
    data() {
        return {
            users:[],
        }
    },
    created() {
        fetchAskList()
        .then(response => {
            this.users = response.data;
        })
        .catch(error => {console.log(error)})
    }
}
</script>

<style>

</style>