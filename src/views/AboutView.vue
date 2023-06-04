<script setup>
import { useProduct } from "../stores/products.js";
import { onMounted } from "vue";

const productStore = useProduct();

onMounted(async () => {
  await productStore.getProducts();
});
</script>
<template>
  <h1>About page</h1>
  <ul>
    <li v-for="product in productStore.products" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>
