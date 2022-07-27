<template>
  <div class="container">
    <img class="item-img" :src="props.fruit.img" />
    <div class="text-container">
      <div class="item-description">
        <h1>{{ props.fruit.name }}</h1>
        <button @click="remove(props.index)">
          <img src="../assets/bx-x.svg" />
        </button>
      </div>
      <h4>Organic</h4>
      <div class="item-price">
        <span class="weigth"> 2kg </span>
        <span class="price"> ${{ props.fruit.price }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFruitStore } from "../stores/counter";
const useFruit = useFruitStore();
const remove = useFruit.removeFromCart;
const props = defineProps({
  fruit: Object,
  index: Number,
});
</script>

<style scoped>
.container {
  width: 90%;
  height: 160px;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 3px 3px 20px 1px rgb(225, 225, 250);
  display: flex;
}
.item-img {
  padding: 20px 3px;
  height: 80%;
  width: 120px;
  aspect-ratio: 9/16;
}
.text-container {
  display: flex;
  flex-direction: column;
  padding-right: 8px;
  width: 100%;
  height: 100%;
}
.item-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -15px;
  width: 100%;
}
.item-description h1 {
  width: 100%;
}
.item-description button {
  height: 30px;
  background-color: transparent;
  border: none;
}
h4 {
  margin-top: -20px;
  font-size: 15px;
  color: gray;
}
.item-price {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
  height: 50%;
}
.weigth {
  color: gray;
}
.price {
  font-weight: bold;
}
</style>
