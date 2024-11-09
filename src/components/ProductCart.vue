
<template>
  <div class="border-2 my-4 rounded-xl space-y-3 pb-2 shadow-md">
    <div class=" max-h-44 overflow-hidden rounded-t-xl">
      <img
        v-bind:src="'../assets/' + item.gambar"
        alt="Image"
        class="object-cover"
      />
    </div>
    <!-- <h1>{{ item.gambar }}</h1> -->
    <!-- <h1>{{ item.is_ready }}</h1> -->
    <div class="space-y-2 px-5 pb-3">
      <h2 class="text-xl font-medium">{{ item.nama }}</h2>
      <p class="text-xl font-medium pb-3">Rp.{{ item.harga }}</p>
      <Router-link
        :to="'foods/' + item.id"
        class="mb-20 bg-green-600 flex items-center py-2 pl-3 space-x-2 rounded-lg focus:bg-green-700 hover:bg-green-700 text-white text-lg max-w-24"
      >
      <img src="../../public/assets/keranjangWhite.png" class=" w-auto h-5 mr-2" alt="" />
        Pesan
      </Router-link>
    </div>
  </div>
</template>

<script setup>

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
