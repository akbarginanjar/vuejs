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
                        <div class="row">
                            <div class="col">
                            <orang-tua>
                                <template slot="nama"></template>
                                <template class="card-text" slot="whatsapp"></template>
                                <p slot="event"></p>
                            </orang-tua>
                            </div>

                            <div class="col">
                            <orang-tua judul="Ini adalah Judul">
                                <template slot="nama">Kidam Kusnandi</template>
                                <p slot="deskripsi">Ini adalah deskripsi saya</p>
                                <p class="card-text" slot="whatsapp">
                                <strong>Kontak WA :</strong> 083-807-464-449
                                </p>
                                <p slot="event"></p>
                            </orang-tua>
                            </div>
                        </div><hr>
                        <orang-tua @changeTitle="changeTitle" v-bind:TextHeader="text">
                            <p slot="nama"></p>
                            <p slot="deskripsi"></p>
                            <p class="card-text" slot="whatsapp"></p>
                        </orang-tua>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import orangTua from './Parent.vue'
export default {
    name: "App",
  components: {
    orangTua,
  },
  data() {
    return {
      text: "Data Anak",
    };
  },
  // Methods Property
  methods: {
    changeTitle(newTitle) {
      this.text = newTitle;
    },
  },
};
</script>
<style>
</style>
