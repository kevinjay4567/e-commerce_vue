import { supabase } from "../supabase.js";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProduct = defineStore("productStore", () => {
  const products = ref([]);

  async function getProducts() {
    const { data } = await supabase.from("products").select();
    products.value = data;
  }

  return { products, getProducts };
});
