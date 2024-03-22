<template>
    <div class="good-card">
    <h4>{{ good.product_name }}</h4>
    <p>$ {{ good.price }}</p>
    <button v-on:click="onRemove">Х</button>
  </div>
</template>

<script>
export default {
    name:'CartItem',
    props: {
    good: Object
  },
  methods: {
    onRemove() {
      this.$store.dispatch('removeFromCart', this.good);
      // this.$emit('remove', this.good);
      //console.log(good);
    }
  }
}
</script>

<style scoped lang="scss">
.good-card{
  width: 100px;
  height: 150px;
  border: 1px solid blue;
}
</style>