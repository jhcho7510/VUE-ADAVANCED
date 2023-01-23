<template>
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <slot name="username">
                <!--상위컴포넌트에서 정의 할 영역-->        
            </slot>                    
            <!-- <div>{{userInfo.id}}</div> -->
            <!-- <div>{{info.id}}</div> props style -->
            <!-- <router-link :to="`/user/${fetchedItem.user}`">
                {{userInfo.id}}
            </router-link>                      -->
            <div class="time">
                <slot name="time">
                    <!--상위컴포넌트에서 정의 할 영역-->        
                </slot>
                
                
                <!-- {{userInfo.created}} -->
                <!-- {{info.created}} props style -->
            </div>
            <slot name="karma"></slot>
        </div>
    </div>   
</template>

<script>
export default {
    // -- pros style --
    props: { 
        info: Object
    },
    // computed: {
    //     userInfo() {
    //         console.log(this.$store.state.user);
    //         return this.$store.state.user;
    //     },
    // },
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