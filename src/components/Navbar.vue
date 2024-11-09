
<template>
  <header>
    <nav class="py-4">
      <div
        class="flex justify-around items-center text-center max-w-[90%] mx-auto space-x-3 py-2 bg-blue-400"
      >
        <h1 class="text-2xl font-bold p-1 rounded-xl leading-relaxed uppercase">
          Kuliner
        </h1>
        <div class="space-x-3">
          <RouterLink class="text-neutral-100 font-medium text-lg" to="/"
            >Home</RouterLink
          >
          <RouterLink class="text-neutral-100 font-medium text-lg" to="/foods"
            >Foods</RouterLink
          >
        </div>
        <RouterLink to="/keranjang" class="flex space-x-2">
          <img src="../../public/assets/Vector.png" alt="" />
          <span class="px-1 bg-yellow-200">{{ keranjang.length }} </span>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      keranjang: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/keranjangs")
        .then((res) => (this.keranjang = res.data));
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
</style>