
<template>
  <main class="mx-auto max-w-[90%] relative">
    <div
      class="h-[300px]"
      :style="{
        background: 'url(/assets/background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.5)',
      }"
    ></div>
    <h1
      class="absolute h-20 inset-0 py-24 text-center md:font-extrabold font-bold text-2xl md:text-4xl text-neutral-100 uppercase leading-loose tracking-tight"
    >
      Pesan Makanan Favorit Anda dalam Satu Klik!
    </h1>
    <div class="flex justify-around items-center my-5">
      <h2 class="text-2xl font-semibold">Besh <strong>foods</strong></h2>
      <RouterLink
        class="px-5 md:px-10 py-2 text-center border border-slate-800 rounded-xl cursor-pointer"
        to="/foods"
        >Lihat Semua
      </RouterLink>
    </div>
    <!-- card menu -->
    <div class="mt-10">
      <listProductVue :data="data" />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import listProductVue from "../components/listProduct.vue";
const data = ref([]);

const fetchData = async () => {
  try {
    const res = await axios.get("http://localhost:3000/best-products");
    data.value = res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchData);
</script>