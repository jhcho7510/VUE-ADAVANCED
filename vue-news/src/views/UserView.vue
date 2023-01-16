<template>
    <div>
      user
        <p>name : {{userInfo.id}}</p>
        <p>karma: {{userInfo.karma}}</p>
        <p>created : {{userInfo.created}}</p>
        <p>{{userInfo.about}}</p>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    computed: {
        userInfo() {
            console.log(this.$store.state.user);
            return this.$store.state.user;
        },
    },
    created() {
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
        this.$store.dispatch('FETCH_USER',userName)
    }
}
</script>

<style>

</style>