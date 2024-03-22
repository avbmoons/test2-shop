<template>
    <div class="good-card" v-on:click="onClick">
        <h2>{{ title }}</h2>
        <p>$ {{ price }}</p>
    </div>
</template>

<script>
export default  {
    name: 'GoodCard',
    props: {
    title: String,
    price: Number
  },
  methods: {
    onClick() {
      this.$emit('add')
    }
  }
};
</script>

<style scoped lang="scss">
.good-card{
  margin: 10px;
  width: 100px;
  height: 150px;
  border: 1px solid green;
}
</style>