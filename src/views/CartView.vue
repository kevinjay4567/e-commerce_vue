<template>
  <div class="container">
    <div class="header">
      <router-link to="/">
        <img src="../assets/bx-chevron-left.svg" />
      </router-link>
      <h1>My cart</h1>
    </div>

    <div class="cart-items">
      <CartItem
        v-for="(item, index) in cartArray"
        :key="item.id"
        :fruit="item"
        :index="index"
      ></CartItem>
      <button class="btn-checkout" v-if="cartArray.length > 0">
        {{ useFruit.count }} - Checkout
      </button>
    </div>
  </div>
</template>
<script setup>
import { watchEffect } from "vue";
import CartItem from "../components/CartItem.vue";
import { useFruitStore } from "../stores/counter";
const useFruit = useFruitStore();
const cartArray = useFruit.cart;
const total = useFruit.sumatory;
watchEffect(() => {
  total();
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  padding: 25px;
  max-width: 920px;
}
.header img {
  height: 30px;
}
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
}
.btn-checkout {
  width: 90%;
  max-width: 800px;
  height: 50px;
  background-color: rgb(71, 156, 71);
  border-radius: 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
</style>
