<template>
  <div v-if="data.length" class="flex flex-wrap justify-center md:space-x-4 space-x-0">
    <div v-for="item in data" :key="item.id" class="md:w-1/4">
      <ProductCart :item="item" />
    </div>
  </div>
</template>

<script>
import ProductCart from "./ProductCart.vue";
export default {
  name: "listProduct",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
//     mounted() {
//     // Logging the prop `data`
//     console.log("Data prop:", data);
//   },
  components: {
    ProductCart,
  },
};
</script>
