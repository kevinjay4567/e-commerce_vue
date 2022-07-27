<template>
  <div class="container">
    <div class="item-section">
      <Item
        v-for="(fruit, index) in fruitArray"
        :key="fruit.id"
        :fruit="fruit.name"
        :img="fruit.img"
        :index="index"
        v-show="fruit.type === array"
      ></Item>
    </div>
  </div>
</template>

<script setup>
import Item from "./Item.vue";
import { useFruitStore } from "../stores/counter";
defineProps({
  array: String,
});
const useFruit = useFruitStore();
const fruitArray = useFruit.fruits;
</script>

<style scoped>
.item-section {
  display: flex;
  overflow-x: scroll;
  margin-right: 25px;
  padding-right: 15px;
  margin-left: 25px;
}
.item-section::-webkit-scrollbar {
  display: none;
}
@media (min-width: 700px) {
  .container {
    display: flex;
    justify-content: center;
  }
  .item-section {
    max-width: 800px;
  }
}
</style>
