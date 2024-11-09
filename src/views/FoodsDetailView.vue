<template>
  <div class="max-w-[90%] mx-auto">
    <div>
      <nav class="py-4 md:py-10 text-xl">
        <ol class="flex space-x-1 md:space-x-4">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <span>/</span>
          <li>
            <router-link to="/foods">Foods</router-link>
          </li>
          <span>/</span>
          <li>Foods Order</li>
        </ol>
      </nav>
    </div>
    <div
      class="flex flex-wrap md:flex-nowrap max-w-[80%] mx-auto md:space-x-6 justify-center"
    >
      <img
        v-bind:src="'../assets/' + data.gambar"
        alt=""
        class="md:max-w-[50%] rounded-xl object-contain"
      />
      <div class="w-full space-y-3">
        <h1 class="text-3xl font-bold">{{ data.nama }}</h1>
        <hr />
        <p class="text-xl font-semibold">
          Harga: <strong>Rp.{{ data.harga }} </strong>
        </p>
        <form
          action="submit"
          v-on:submit.prevent
          class="flex flex-col space-y-2"
        >
          <label for="Descripsi" class="text-xl">Jumlah</label>
          <input
            type="number"
            min="1"
            placeholder="Jumlah"
            v-model="pesan.JumlahPesanan"
            class="border-2 text-xl ps-4 pr-4 py-1 rounded-lg"
          />
          <label for="Descripsi" class="text-xl">Descripsi</label>
          <textarea
            name="descripsi"
            v-model="pesan.DescPesanan"
            cols="10"
            rows="5"
            class="border-2 text-xl ps-4 pr-4 py-1 rounded-lg"
          ></textarea>
          <button
            type="submit"
            @click="Pemesanan()"
            class="mb-20 bg-green-600 flex items-center justify-center py-2 px-10 rounded-lg focus:bg-green-700 hover:bg-green-700 text-white text-lg"
          >
          <img src="../../public/assets/keranjangWhite.png" class=" w-auto h-5 mr-2" alt="" />
            Pesan
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      pesan: {
        JumlahPesanan: null,
        DescPesanan: "",
        produts: null,
      },
    };
  },
  methods: {
    Pemesanan() {
      if (this.pesan.JumlahPesanan) {
        this.pesan.produts = this.data;
        axios.post(`http://localhost:3000/keranjangs/`, this.pesan).then(() => {
          alert("sukses"), this.$router.push({ path: "/Keranjang" });
        });
      } else {
        alert("jumlah harus di isi");
      }
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/products/${this.$route.params.id}`)
      .then((res) => (this.data = res.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>