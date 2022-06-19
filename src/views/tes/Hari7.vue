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
                            <h3>Axios</h3>
                        </center>

                                <section class="section section-lg pt-lg-0 mt--200"><br><br><br><br>
                                <br><br><br><br><br><br>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 mb-1" v-for="item of posts" :key="item.id">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <label for="">Kode Barang :</label>
                                    <h4 class="text-warning text-uppercase">{{ item.kode_barang }}</h4>
                                    <h6>Nama Barang : {{ item.nama_barang }}</h6>
                                    <h6>Jenis Barang : {{ item.jenis }}</h6>
                                    <h6>Satuas Barang : {{ item.satuan }}</h6>
                                    <base-button v-b-popover.hover.bottom="'Disini total stok barang tersisa ' + item.stok"
                         title="Data Barang" tag="a" href="#" type="warning" class="mt-4">
                                        Stok : {{ item.stok }}
                                    </base-button>
                                </card><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
import { VBPopover } from "bootstrap-vue/esm/directives/popover/popover";

export default {
    directives: {
    BPopover: VBPopover,
    },
    data() {
        return {
            posts: [],
        }
  },

  async mounted() {
      const response = await axios.get("http://pengadaan-barang00.herokuapp.com/api/barang");
      this.posts = response.data.data;
  }
};
</script>
<style>
</style>
