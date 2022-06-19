<template>
    <div class="" style="background: rgb(86,0,143);
background: linear-gradient(90deg, rgba(86,0,143,1) 0%, rgba(210,73,255,1) 69%, rgba(205,0,255,1) 100%);">
        <section class=" my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
            </div>
        </section><br><br><br><br>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--400">
                    <div class="px-4">
                        <center>
                        <h3>Props, Slot dan Custom Event</h3>
                        </center>
                        <div style="margin-top: 20px">
                        <div class="card">
                            <div class="card-body">

                            <hr />

                            <h4 class="card-title">
                                <slot name="nama">Nama Default</slot>
                            </h4>

                            <p class="card-text">
                                <slot name="deskripsi">Deskripsi Default</slot>
                            </p>

                            <hr />

                            <slot name="whatsapp">WA Default</slot>
                            </div>
                        </div>
                        </div>
                        <slot name="event">
                        <div>
                            <h2>{{ TextHeader }}</h2>
                            <base-button type="info" v-on:click="changeText">Kirim</base-button>
                        </div>
                        </slot>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    props: ["judul", "TextHeader"],
  // Data Property
  data() {
    return {
      text: "Data Orang Tua",
    };
  },
  // Methods Property
  methods: {
    changeText() {
      this.$emit("changeTitle", this.text);
    },
  },
  // Emits Property
  emits: ["changeTitle"],
};
</script>
<style>
</style>
