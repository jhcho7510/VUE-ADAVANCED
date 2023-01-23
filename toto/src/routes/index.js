
import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from "../views/ItemView.vue"; // import ItemView from "@/views/ItemView.vue";
// import createListView from '../views/CreateListView.js'; // High Order Component -> component depth가 증가하는 문제점을 가지고 있다.

import bus from '../utils/bus.js';
import {store} from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/news'
        },
        {
            path:'/news', // url 주소
            name: 'news',
            component:NewsView, // url 주소로 갔을 때 표시될 컴포넌트(페이지)
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) =>{
                bus.$emit('start:spinner');
                // #1
                store.dispatch('FETCH_LIST', to.name)
                .then(() =>{
                  // #5  
                  console.log('fetched');
                //   bus.$emit('end:spinner');
                  next();
                })
                .catch((error) => {
                  console.log(error);
                });                
                // console.log('to', to);
                // console.log('from', from);
                // console.log(next);

                next();
            }
        },
        {
            path:'/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
            beforeEnter : (to, from, next) =>{
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                  });  
            }
        },
        {
            path:'/jobs',
            name: 'jobs',
            component:JobsView,
            // component: createListView('JobsView'),
            beforeEnter : (to, from, next) =>{
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                  });  
            }            
        },
        {
            path:'/user/:id',
            component: UserView,
        },
        {
            path:'/item/:id',
            component: ItemView,
        }
    ]
})