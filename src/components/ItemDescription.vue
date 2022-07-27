<template>
  <div class="father">
    <div class="container">
      <div class="price-container">
        <span class="price">${{ fruitArray[$route.params.id].price }}</span>
        <button class="favorite-btn">
          <img src="../assets/bxs-heart.svg" />
        </button>
      </div>
      <h2 class="name-item">{{ fruitArray[$route.params.id].name }}</h2>
      <div class="rating-container">
        <span class="rating"
          ><img src="../assets/bxs-star.svg" /> 4,8 Rating</span
        ><span class="comments"
          ><img src="../assets/bxs-comment-detail.svg" />7 comments</span
        >
      </div>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quod
        eligendi dolore voluptas dolor. Mollitia tenetur illo quam vitae
        aspernatur? Ratione architecto fuga, laboriosam a reiciendis
      </p>
      <button class="btn-add">+ Add to cart</button>
    </div>
  </div>
</template>

<script setup>
import { useFruitStore } from "../stores/counter";
const useFruit = useFruitStore();
const fruitArray = useFruit.fruits;
</script>

<style scoped>
.container {
  position: relative;
  border-radius: 10px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
  box-shadow: 0px -1px 10px 1.5px rgb(216, 216, 218);
  z-index: 1;
  max-width: 600px;
}
.price-container {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
.price {
  height: 25px;
  width: 80px;
  border-radius: 10px;
  text-align: center;
  background-color: greenyellow;
  color: green;
  font-weight: bold;
  padding-top: 3px;
}
.favorite-btn {
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  border: none;
  background-color: rgb(239, 126, 145);
}
.rating-container {
  display: flex;
}
.rating {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: gray;
}
.rating img {
  width: 20%;
  margin-right: 4px;
}
.comments {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: gray;
  margin-left: 45px;
}
.comments img {
  width: 20%;
  margin-right: 4px;
}
.description {
  color: gray;
}
.btn-add {
  border-radius: 10px;
  background-color: green;
  padding: 10px;
  width: 100%;
  border: none;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
}
@media (min-width: 600px) {
  .father {
    display: flex;
    justify-content: center;
  }
}
</style>
