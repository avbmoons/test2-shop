<template>
    <div class="goods-list">
    <GoodCard 
      v-for="good of list" 
      v-bind:key="good.id_product"
      v-bind:title="good.product_name"
      v-bind:price="good.price"
      v-on:add="onAdd(good)"
    ></GoodCard>
  </div>
</template>

<script>
import GoodCard from './GoodCard.vue'
export default {
    name:'GoodsList',
    components:{
        GoodCard
    },
    computed:{
    list(){
      return this.$store.getters.goods
    }
  },
  //   props: {
  //   list: Array
  // },
  methods: {
    onAdd(good) {
      //this.$emit('add', good)
      this.$store.dispatch('addToCart',good);
    }
  }
}
</script>

<style scoped lang="scss">
.goods-list{
  width: 90vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: auto;
  border: 1px solid red;

}
</style>