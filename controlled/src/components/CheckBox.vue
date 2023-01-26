<template>
  <!-- <input type="checkbox" v-model="checked"> -->
  <input type="checkbox" :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
  // props:['checkd'],
  props:['value'],
  methods:{
    toggleCheckBox(){
      this.$emit('input', !this.value);
    }
  }

}
</script>

<!--
  v-model :
    @input 이벤트
    :value 값
-->