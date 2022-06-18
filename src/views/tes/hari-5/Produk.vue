<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
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
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
