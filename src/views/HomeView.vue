<script setup>
import Secction from "../components/Secction.vue";
import ItemSecction from "../components/ItemSecction.vue";
import SearchTool from "../components/SearchTool.vue";
</script>

<template>
  <div class="grocery-store">
    <div class="header">
      <h1>Grocery</h1>
      <router-link to="/cart"
        ><img src="https://picsum.photos/200" class="profile"
      /></router-link>
    </div>
    <SearchTool />
    <div class="promo-container">
      <img src="https://picsum.photos/id/10/400/200" class="promo" />
    </div>
    <Secction title="Fruits"></Secction>
    <ItemSecction array="fruit"></ItemSecction>
    <Secction title="Vegetables"></Secction>
    <ItemSecction array="vegetable"></ItemSecction>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
}
.profile {
  height: 45px;
  border-radius: 30%;
}

.promo-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  margin-top: 20px;
}
.promo {
  border-radius: 10px;
  width: 87%;
  max-width: 800px;
}
@media (min-width: 700px) {
  .search-tools {
    justify-content: center;
    gap: 10px;
  }
}
</style>
