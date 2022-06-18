<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container">
                <card shadow class="card-profile mt--300">
                    <div class="px-4">
                        
                    </div>
                </card>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--400">
                    <div class="px-4">
                        <center>
                            <h3>Data, Computed, Dan Method</h3>
                        </center>

                        <div class="mt-3">
                        <h3>{{ nama }}</h3> <h5><i>(Memanggil dengan data)</i></h5>
                        </div>

                        <div class="mt-3">
                        <h3>{{ namaLengkap }}</h3> <h5><i>(Memanggil dengan computed)</i></h5>
                        </div>

                        <div class="mt-3">
                        <h3>{{ getname() }}</h3> <h5><i>(Memanggil dengan method)</i></h5>
                        </div>

                        <center>
                        <div class="mt-2">
                        <h2>{{ bilangan }}</h2>
                        <h4>{{ infoBilangan }}</h4>
                        <p><base-button class="mb-3 mb-sm-0"
                                                 type="info" color="warning" @click='klik()'>Klik disini</base-button></p>
                        </div>
                        </center>


                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
    return {
      nama: "Akbar Ginanjar",
      menu: 'hari1-3',
      namaDepan: "Akbar",
      namaBelakang: "Ginanjar",
      bilangan: 1,
    };
  },
  methods: {
    getname: function () {
      return "Halo, " + this.nama;
    },
    klik: function () {
      this.bilangan++;
    },
  },
  computed: {
    namaLengkap: function () {
      return this.namaDepan + " " + this.namaBelakang;
    },
    infoBilangan: function () {
      return this.bilangan % 2 === 0 ? "Genap" : "Ganjil";
    },
  },
};
</script>
<style>
</style>
