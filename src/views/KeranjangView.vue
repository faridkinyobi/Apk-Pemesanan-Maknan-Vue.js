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
          <li>Keranjang</li>
        </ol>
      </nav>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="overflow-y-auto md:overflow-y-hidden">
        <table class="w-full">
          <thead class="border-b-2 border-black text-center text-xl">
            <tr>
              <th class="px-1 py-3">no</th>
              <th class="px-1">Gambar</th>
              <th class="px-2">Makanan</th>
              <th class="px-2">Descripsi</th>
              <th class="px-2">Jumlah</th>
              <th class="px-2">Harga</th>
              <th class="px-2">Total</th>
              <th class="px-2">hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(items, index) in keranjang"
              :key="items.id"
              class="border-b-2 border-black text-center text-lg"
            >
              <td>{{ index + 1 }}</td>
              <td>
                <img
                  v-bind:src="'../assets/' + items.produts.gambar"
                  alt="gambar"
                  class="w-40 md:py-3 object-contain"
                />
              </td>
              <td class="md:px-2">{{ items.produts.nama }}</td>
              <td>{{ items.DescPesanan ? items.DescPesanan : "-" }}</td>
              <td>{{ items.JumlahPesanan }}</td>
              <td>{{ items.produts.harga }}</td>
              <td>{{ items.produts.harga * items.JumlahPesanan }}</td>
              <td>
                <button
                  class="bg-red-500 w-full h-10"
                  @click="DeteltPesanan(items.id)"
                >
                  hapus
                </button>
              </td>
            </tr>
            <tr class="font-bold text-xl">
              <td class="py-3">Total Harga:</td>
              <td>
                <strong>Rp {{ totalHarga }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <form v-on:submit.prevent class="flex flex-col space-y-2 md:w-1/3 w-full">
        <label for="Descripsi" class="text-xl">Jumlah</label>
        <input
          type="text"
          min="1"
          placeholder="Nama"
          v-model="pesan.nama"
          class="border-2 text-xl ps-4 pr-4 py-1 rounded-lg"
        />
        <label for="Descripsi" class="text-xl">Descripsi</label>
        <input
          name="descripsi"
          v-model="pesan.NomerMeja"
          cols="10"
          rows="5"
          class="border-2 text-xl ps-4 pr-4 py-1 rounded-lg"
        />
        <button
          type="submit"
          @click="Chekout()"
          class="mb-20 bg-green-600 py-2 px-10 rounded-lg focus:bg-green-700 hover:bg-green-700 text-white text-lg"
        >
          Chekout
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Keranjang",
  data() {
    return {
      keranjang: [],
      pesan: {
        nama: " ",
        NomerMeja: null,
        keranjang: null,
      },
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/keranjangs")
        .then((res) => (this.keranjang = res.data));
    },
    DeteltPesanan(id) {
      axios.delete(`http://localhost:3000/keranjangs/${id}`).then(() => {
        alert("sukses");
        this.fetchData();
      });
    },

    async Chekout() {
      if (
        !this.keranjang.length <= 0 &&
        this.pesan.NomerMeja &&
        this.pesan.nama
      ) {
        this.pesan.keranjang = this.keranjang;
        await axios
          .post(`http://localhost:3000/pesanans`, this.pesan)
          .then(() => {
            this.keranjang.map((item) => this.DeteltPesanan(item.id));
            alert("sukses");
            this.$router.push({ path: "/Sukses" });
          })
          .catch((err) => console.log(err));
      } else {
        alert("tidak boleh kosong");
      }
    },
  },
  computed: {
    totalHarga() {
      return this.keranjang.reduce((item, data) => {
        return item + data.produts.harga * data.JumlahPesanan;
      }, 0);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
</style>