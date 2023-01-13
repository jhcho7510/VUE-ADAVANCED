<template>
    <ul>
        <li v-for="user in users" v-bind:key="user.title">{{user.title}}</li>
    </ul>
</template>

<script>
import {fetchJobsList} from '../api/index.js';

export default {
  data() {
    return {
      users:[],
    }
  },
  created() {
    fetchJobsList()
    .then(response => {
      this.users = response.data;
    })
    .catch(function(error){console.log(error)})
  }
}
</script>

<style>

</style>