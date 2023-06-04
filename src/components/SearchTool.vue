<template>
  <div class="search-tools">
    <div class="input-container">
      <img src="../assets/search-regular-24.png" class="search" />
      <input class="input" type="text" placeholder="Search..." />
    </div>
    <img src="../assets/bxs-filter-alt.svg" class="filter" />
  </div>
</template>
<style scoped>
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
</style>
