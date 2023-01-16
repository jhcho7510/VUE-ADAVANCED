<template>
  <div>{{this.$store.state.item.title}}</div>
</template>

<script>
export default {
  created() {
    const itemId = this.$route.params.id;
    console.log('itemId',itemId);
    this.$store.dispatch('FETCH_ITEM',itemId);
  }
}
</script>

<style>

</style>