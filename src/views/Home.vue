<template>
  <div class="page">
    <h1>Home page</h1>
    <header>
      <Search></Search>
      <button class="cart-button" type="button" v-on:click="onToggleCart">Корзина</button>
    </header>
    <main>
      <GoodsList></GoodsList>
    </main>
    <Cart 
      v-bind:isVisibleCart="isVisibleCart"
      v-on:close="onToggleCart" 
      v-if="isVisibleCart">
  </Cart>
  </div>
</template>

<script>
import Search from '../components/Search.vue';
import GoodsList from '../components/GoodsList.vue';
import Cart from '../components/Cart.vue';

// const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
// @ is an alias to /src
export default {
  name:'Home',
  components:{
    Search,
    GoodsList,
    Cart,
  },
  data() {
    return{
    // goods: [],
    // filteredGoods: [],
    // cart: [],
    isVisibleCart: false      
    }

  },
  methods: {
    // loadGoods() {
    //   fetch(`${API_URL}catalogData.json`)
    //     .then((request) => request.json())
    //     .then((data) => {
    //       this.goods = data;
    //       this.filteredGoods = data;
    //     })
    // },
    // loadCart() {
    //   fetch(`${API_URL}getBasket.json`)
    //     .then((request) => request.json())
    //     .then((data) => {
    //       this.cart = data.contents;
    //     })
    // },
    // addToCart(good) {
    //   fetch(`${API_URL}addToBasket.json`)
    //     .then(() => {
    //       this.cart.push(good)
    //     })
    // },
    // removeFromCart(good) {
    //   fetch(`${API_URL}deleteFromBasket.json`)
    //     .then(() => {
    //       const index = this.cart.findIndex((item) => item.id_product === good.id_product)
    //       this.cart.splice(index, 1)
    //     })
    // },
    // onSearch(searchString) {
    //   const regex = new RegExp(searchString, 'i');
    //   this.filteredGoods = this.goods.filter((good) => regex.test(good.product_name))
    // },
    onToggleCart() {
      this.isVisibleCart = !this.isVisibleCart
    }
  },
  mounted() {
    this.$store.dispatch('loadGoods');
    this.$store.dispatch('loadCart');
    // this.loadGoods();
    // this.loadCart();
  }
}

</script>

<style lang="scss" scoped>
header {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
    // .modal {
    //   width: 600px;
    //   height: 400px;
    //   position: absolute;
    //   top: 100px;
    //   left: calc(50% - 300px);
    //   border: 1px solid #ccc;
    //   background-color: white;
    //   border-radius: 4px;
    //   overflow: auto;
    // }

    // .close {
    //   position: absolute;
    //   top: 5px;
    //   right: 5px;
    // }
</style>
