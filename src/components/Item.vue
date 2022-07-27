<template>
  <div class="item-container">
    <router-link :to="{ name: 'about', params: { id: index } }"
      ><img :src="img" class="item-image"
    /></router-link>
    <div class="description-container">
      <h4 class="title-description">{{ name }}</h4>
      <p class="description">Organic</p>
    </div>
    <div class="price-container">
      <h4>${{ price }}</h4>
      <button class="btn-add" @click="addToCart(fruit)">+</button>
    </div>
  </div>
</template>

<script setup>
import { useFruitStore } from "../stores/counter";
const useFruit = useFruitStore();
const addToCart = useFruit.addToCart;
const getFruit = useFruit.getFruits;
const { price, name, img } = getFruit(props.index);
const fruit = getFruit(props.index);

const props = defineProps({
  index: Number,
});
</script>

<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
  min-width: 130px;
  height: 220px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-left: 20px;
  box-shadow: 3px 3px 20px 1px rgb(225, 225, 250);
  margin-left: 25px;
}
.item-image {
  height: 100px;
  width: 80%;
}
.description-container {
  display: flex;
  flex-direction: column;
  max-height: 30%;
  max-width: 70%;
}
.title-description {
  font-size: 16px;
}
.description {
  font-size: 10px;
  margin-top: -15px;
}

.price-container {
  max-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-add {
  margin-right: 10px;
  padding: 3px 12px;
  background-color: rgb(85, 182, 85);
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 30px;
}
.btn-add:hover {
  background-color: rgb(0, 128, 0);
}
.card-link {
  max-height: 50%;
}
</style>
