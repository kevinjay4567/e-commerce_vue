<script setup>
import Secction from "../components/Secction.vue";
import ItemSecction from "../components/ItemSecction.vue";
</script>

<template>
  <div class="grocery-store">
    <div class="header">
      <h1>Grocery</h1>
      <router-link to="/cart"><img src="https://picsum.photos/200" class="profile" /></router-link>
    </div>
    <div class="search-tools">
      <div class="input-container">
        <img src="../assets/search-regular-24.png" class="search" />
        <input class="input" type="text" placeholder="Search..." />
      </div>
      <img src="../assets/bxs-filter-alt.svg" class="filter" />
    </div>
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
.search-tools {
  display: flex;
  justify-content: space-between;
  padding-right: 25px;
  padding-left: 25px;
}
.input-container {
  display: flex;
  align-items: center;
  background-color: rgb(237, 235, 235);
  width: 80%;
  border-radius: 10px;
  max-width: 800px;
}
.input {
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  font-size: 20px;
  margin-left: 15px;
  color: gray;
  outline: none;
}
.search {
  height: 25px;
  padding-left: 15px;
}
.filter {
  height: 25px;
  background-color: rgb(237, 235, 235);
  padding: 10px;
  border-radius: 10px;
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
