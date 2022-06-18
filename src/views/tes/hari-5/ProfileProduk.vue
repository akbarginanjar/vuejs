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
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-5 order-lg-2">
                                <div class="card-profile-image">
                                    <a target="_blank" href="https://instagram.com/akbarginanjar_">
                                        <img v-lazy="'img/theme/profile.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-6 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">{{ friend }}</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">{{ repo }}</span>
                                        <span class="description">Repository</span>
                                    </div>
                                    <div>
                                        <span class="heading">{{ followers }}</span>
                                        <span class="description">Followers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>{{ nama }}
                                <span class="font-weight-light">, {{ umur }}</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{ alamat }}</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>{{ posisi }}</div>
                            <div><i class="ni education_hat mr-2"></i>{{ alumni }}</div>
                        <br><br>
                        </div>
                    </div>
                </card>
            </div>
        </section><br><br><br><br><br><br>
        <div class="container">
                <card shadow class="card-profile" no-body>
                    <div class="px-6 container">
                        <h3 class="p-3">Produk</h3>
                        <table class="table">
                            <thead>
                                <th>No</th>
                                <th>Nama Produk</th>
                                <th>Merk</th>
                                <th>Harga</th>
                            </thead>
                            <tr v-for="data of produk">
                                <td>{{ data['no'] }}</td>
                                <td>{{ data['namaProduk'] }}</td>
                                <td>{{ data['merk'] }}</td>
                                <td>{{ data['harga'] }}</td>
                            </tr>
                        </table>
                    </div>
                </card>
            </div><br><br><br><br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nama: 'Akbar Ginanjar',
            friend: 22,
            followers: 170,
            repo: 17,
            umur: 18,
            alamat: 'Bandung, Indonesia',
            alumni: 'SMK Assalaam Bandung',
            posisi: 'Programmer - Frontend Developer',
            produk: [
                {
          "no": 1,
          "namaProduk": "Laptop",
          "merk": "Lenovo",
          "harga": "Rp. 4.000.000",
        },
        {
          "no": 2,
          "namaProduk": "Mouse",
          "merk": "Logitech",
          "harga": "Rp. 2.000.000",
        },
        {
          "no": 3,
          "namaProduk": "Keyboard",
          "merk": "Razer",
          "harga": "Rp. 3.500.000",
        },
        {
          "no": 4,
          "namaProduk": "Monitor",
          "merk": "HP",
          "harga": "Rp. 700.000",
        },
        {
          "no": 5,
          "namaProduk": "CU",
          "merk": "i9 9900K Monster",
          "harga": "Rp. 85.000.000",
        },
      ],
        }
    }
};
</script>
<style>
</style>
