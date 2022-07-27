<template>
  <div class="view-card">
    <div class="buttons">
      <router-link to="/"
        ><img src="../assets/bx-chevron-left.svg" class="back-button"
      /></router-link>
      <img
        src="../assets/bx-dots-horizontal-rounded.svg"
        class="setting-button"
      />
    </div>
    <div class="img-container">
      <img :src="fruitArray[$route.params.id].img" class="main-img" />
    </div>
    <div class="card-description">
      <ItemDescription></ItemDescription>
    </div>
  </div>
</template>

<script setup>
import ItemDescription from "../components/ItemDescription.vue";
import { useFruitStore } from "../stores/counter";
const useFruit = useFruitStore();
const fruitArray = useFruit.fruits;
</script>

<style scoped>
.view-card {
  background-color: rgb(249, 249, 253);
}
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 25px;
}
.buttons img {
  width: 30px;
}
.img-container {
  display: flex;
  justify-content: center;
  margin-top: -20px;
}
.main-img {
  width: 280px;
  height: 250px;
}
</style>
