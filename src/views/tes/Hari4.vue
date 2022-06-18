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
                            <h3>Directive dan Data Binding</h3>                          
                            </center>

                            <div class="mt-3">
                                <h3 v-text="nama"></h3>
                                <h5><i>(Memanggil data menggunakan Directive)</i></h5>
                            </div>

                            <div class="mt-3">
                                <h3 v-text="namaLengkap"></h3>
                                <h5><i>(Memanggil computed menggunakan Directive)</i></h5>
                            </div>

                            <div class="mt-3">
                                <h3 v-text="getName()"></h3>
                                <h5><i>(Memanggil method menggunakan Directive)</i></h5>
                            </div>

                            <div class="mt-3">
                                <h3 v-html="link"></h3>
                                <h5><i>(Memanggil data menggunakan Directive html)</i></h5>
                            </div>

                            <center>
                            <div class="mt-2">
                            <h2>{{ bilangan }}</h2>
                            <h4>{{ infoBilangan }}</h4>
                            <p><base-button class="mb-3 mb-sm-0"
                                                    type="info" color="warning" @click='klik()'>Klik disini</base-button></p>
                            </div>
                            </center><br><br>

<div class="bg-secondary container py-4">
                            <div class="form-group">
                                <h3 v-text="nama"></h3>
                                <base-input alternative type="text" v-model="nama"></base-input>
                            </div>
                            <div class="form-group">
                                <h3 v-text="namaLengkap"></h3>
                                <label>Nama depan</label>
                                <base-input alternative v-model="namaDepan"></base-input>
                            </div>
                            <div class="form-group mb-2">
                                <label>Nama belakang</label>
                                <base-input alternative v-model="namaBelakang"></base-input>
                            </div>

                            <div class="form-group">
                                <ul>
                                    <li v-for="(item, index) of bahasa">{{ index + 1 }}. {{ item }}</li>
                                </ul>
                                <h3>Bahasa Program</h3>
                                <input class="mr-2" type="checkbox" value="Java" v-model="bahasa" />Java
                                <input class="mr-2" type="checkbox" value="PHP" v-model="bahasa" />PHP
                                <input class="mr-2" type="checkbox" value="C#" v-model="bahasa" />C#
                                <input class="mr-2" type="checkbox" value="Javascript" v-model="bahasa" />Javascript
                                <input class="mr-2" type="checkbox" value="HTML + CSS" v-model="bahasa" />HTML + CSS
                                <input class="mr-2" type="checkbox" value="Vue JS" v-model="bahasa" />Vue JS
                            </div>
</div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import BaseInput from '../../components/BaseInput.vue';
export default {
  components: { BaseInput },
    data() {
        return {
            nama: 'Akbar Ginanjar',
            namaDepan: 'Akbar',
            menu: 'hari4',
            namaBelakang: 'Ginanjar',
            link: '<a href="https://instagram.com/akbarginanjar_/">Akbar Ginanjar</a>',
            bilangan: 1,
            bahasa: []
        }
    },
    methods: {
        getName: function() {
            return "Halo, " + this.nama
        },
        klik: function () {
        this.bilangan++;
    },
    },
    computed: {
            namaLengkap: function() {
                return this.namaDepan + " "+ this.namaBelakang
        },
        infoBilangan: function() {
            return this.bilangan % 2 === 0 ? 'genap ' : ' ganjil'
        }
    }
};
</script>
<style>
</style>
