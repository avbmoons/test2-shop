import Vue from 'vue';
import Vuex from 'vuex';

// const API_URL =
//   'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

//const API_URL = 'http://127.0.0.1:3000/';
const API_URL = 'http://127.0.0.1:8080/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: [],
    filteredGoods: [],
    cart: [],
  },
  getters: {
    goods: (state) => state.filteredGoods,
    cart: (state) => state.cart,
  },
  mutations: {
    loadGoods: (state, payload) => {
      state.goods = payload;
      state.filteredGoods = payload;
    },
    loadCart: (state, payload) => {
      state.cart = payload;
    },
    add: (state, payload) => {
      state.cart.push(payload);
    },
    remove: (state, payload) => {
      const index = state.cart.findIndex(
        (item) => item.id_product === payload.id_product
      );
      state.cart.splice(index, 1);
    },
    filter: (state, payload) => {
      state.filteredGoods = payload;
    },
  },
  actions: {
    loadGoods({ commit }) {
      fetch(`${API_URL}catalogData`) //catalogData.json
        .then((request) => request.json())
        .then((data) => {
          commit('loadGoods', data);
        });
    },

    // loadCart({ commit }) {
    //   fetch(`${API_URL}getBasket.json`)
    //     .then((request) => request.json())
    //     .then((data) => {
    //       commit('loadCart', data.contents);
    //     });
    // },
    loadCart({ commit }) {
      fetch(`${API_URL}cart`)
        .then((request) => request.json())
        .then((data) => {
          commit('loadCart', data);
        });
    },

    addToCart({ commit }, good) {
      fetch(`${API_URL}addToCart`).then(() => {
        //addToBasket.json
        commit('add', good);
      });
    },
    // addToCart({ commit }, good) {
    //   fetch(`${API_URL}addToCart`),
    //     {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(state.cart),
    //     }.then(() => {
    //       //addToBasket.json
    //       commit('add', good);
    //     });
    // },

    // removeFromCart({ commit }, good) {
    //   fetch(`${API_URL}deleteFromBasket.json`).then(() => {
    //     commit('remove', good);
    //   });
    // },
    removeFromCart({ commit }, good) {
      fetch(`${API_URL}removeFromCart`).then(() => {
        commit('remove', good);
      });
    },
    search({ commit, state }, searchString) {
      const regex = new RegExp(searchString, 'i');
      commit(
        'filter',
        state.goods.filter((good) => regex.test(good.product_name))
      );
    },
  },
  modules: {},
});
