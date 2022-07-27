import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useFruitStore = defineStore("fruitStore", () => {
  const count = ref(0);
  const fruits = reactive([
    {
      name: "banana",
      price: 14.99,
      img: "https://i2.wp.com/horneandoconluz.com/wp-content/uploads/2020/01/w9Kmt1Y9.jpg?ssl=1",
      type: "fruit",
    },
    {
      name: "apple",
      price: 5.85,
      img: "https://buenazo.cronosmedia.glr.pe/original/2022/01/31/61f847d92b61d2649f3d4727.jpg",
      type: "fruit",
    },
    {
      name: "orange",
      price: 10.45,
      img: "https://static9.depositphotos.com/1642482/1148/i/600/depositphotos_11489364-stock-photo-ripe-orange.jpg",
      type: "fruit",
    },
    {
      name: "ginger",
      price: 7.05,
      img: "https://img.freepik.com/premium-photo/ginger-white-background-depth-field_253984-2691.jpg?w=2000",
      type: "vegetable",
    },
    {
      name: "brocoli",
      price: 3.99,
      img: "https://www.congresslink.org/wp-content/uploads/2016/11/brocoli.jpg",
      type: "vegetable",
    },
    {
      name: "Carrot",
      price: 8.45,
      img: "https://suministroscartago.com/wp-content/uploads/2019/12/p9.jpg",
      type: "vegetable",
    },
  ]);
  const cart = reactive([]);

  const getFruits = (index) => {
    return fruits.find((fruit) => fruits.indexOf(fruit) === index);
  };
  function addToCart(fruit) {
    cart.push(fruit);
  }
  function removeFromCart(index) {
    cart.splice(index, 1);
  }
  function sumatory() {
    count.value = 0;
    cart.forEach((fruit) => (count.value += fruit.price));
  }
  return {
    fruits,
    cart,
    getFruits,
    addToCart,
    removeFromCart,
    sumatory,
    count,
  };
});
