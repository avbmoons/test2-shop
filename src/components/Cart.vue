<template>
    <div class="modal">
    <span class="close" v-on:click="onClose">x</span>

    <div class="goods-list">
      <!-- <CartItem
      v-for="good of cart" 
      v-bind:key="good.id_product" 
      v-bind:good="good" 
      v-on:remove="onRemove"
      ></CartItem> -->
      <CartItem
      v-for="good of cart" 
      v-bind:key="good.id_product" 
      v-bind:good="good" 
      ></CartItem>
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem'
export default {
    name:'Cart',
    components:{
        CartItem
    },
  //   props: {
  //   cart: Array
  // },
  computed:{
    cart(){
      return this.$store.getters.cart
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onRemove(good) {
      //this.$emit('remove', good)
      this.$store.dispatch('removeFromCart',good);
    }
  }
}
</script>

<style scoped lang="scss">
    .modal {
      width: 600px;
      height: 400px;
      position: absolute;
      top: 100px;
      left: calc(50% - 300px);
      border: 1px solid #ccc;
      background-color: white;
      border-radius: 4px;
      overflow: auto;
    }

    .close {
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
    }
.goods-list{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
</style>