
<template>
  <main class="my-10 mx-auto max-w-[90%]">
    <div class="flex justify-around items-center">
      <h2 class="text-2xl font-semibold">list <strong>foods</strong></h2>
      <input
        type="text"
        v-model="search"
        @keyup="searchData"
        placeholder="search"
        class="w-1/3 ps-4 pe-4 placeholder:text-xl py-1 border-2 border-neutral-900 rounded-lg"
      />
    </div>
    <div class="mt-10">
      <listProductVue :data="data" />
    </div>
  </main>
</template>

<script>
import axios from "axios";
import listProductVue from "../components/listProduct.vue";

export default {
  name: "Foods",
  components: {
    listProductVue,
  },
  data() {
    return {
      data: [],
      search: "",
    };
  },
  // methods: {
  //   searchData() {
  //       axios.get(`http://localhost:3000/products?nama=${this.search}`)
  //       .then((res) => (this.data = res.data))
  //       .catch((error) => console.log(error));
  //   },
  // },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => (this.data = res.data))
      .catch((error) => console.log(error));
  },
};
</script>