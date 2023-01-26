<template>
  <div>
    <ul>
      <item>아이템1</item>
      <item>아이템2 <button>click me</button></item>
      <item>
        <div>
          아이템3
        </div>
        <img src ='./assets/endgame.png' alt="어벤져스 엔드게임" width="50px" height="50px">
      </item>
      <item>
        <div style="color: blue; font-size: 20px;">아이템4</div>
      </item>
      <!-- <item v-for="item in items"  v-bind:key="item">{{ item }}</item>  -->
      <!-- :item="item" -->
      <!-- <item>아이템 1</item>
      <item>아이템 2</item>
      <item>아이템 3</item>
      <item>아이템 4</item>
      <item>아이템 5</item> -->
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  // data() {
  //   return{
  //     items: ['아이템1','아이템2','아이템3','아이템4','아이템5'],
  //   }
  // },
}
</script>