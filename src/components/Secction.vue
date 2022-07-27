<template>
  <div class="father">
    <div class="container">
      <h3 class="text">{{ title }}</h3>
      <a href="#" class="link">View More</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.text {
  padding-left: 25px;
  font-size: 15px;
}
.link {
  padding-right: 35px;
  font-size: 12px;
  text-decoration: none;
  color: green;
}
@media (min-width: 700px) {
  .container {
    width: 55%;
    display: flex;
    justify-content: space-around;
    gap: 200px;
  }
  .father {
    display: flex;
    justify-content: center;
  }
}
</style>
