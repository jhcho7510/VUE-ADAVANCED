import bus from '../utils/bus.js';
export default {
    mounted() {
        bus.$emit('end:spinner');
    }
    // created() {
    //     bus.$emit('start:spinner');
    //     // #1
    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //     .then(() =>{
    //       // #5  
    //       console.log('fetched');
    //       bus.$emit('end:spinner');
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },  
}