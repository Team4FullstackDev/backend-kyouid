# backend-kyouid

# Development

Cara Menjalankan backend pada proyek:

1. Sebelum menjalankan harap sudah melakukan instalasi mysql pada komputer
2. Dalam folder backend ada file .envExample yang berisi variable yang harus diisi sesuai dengan konfigurasi untuk menghubungkan database ke proyek nodejs. Variable tersebut akan saya jelaskan di bawah.
3. pada file .envExample ubah nama file tersebut menjadi .env.
4. jangan lupa untuk membuat database terlebih dahulu.

# tools

1. nodejs 20.0 lts

| Plugin                                                   |
| -------------------------------------------------------- |
| NODE_ENV = development                                   |
| PORT = nama port untuk menjalankan aplikasi backend 9001 |
| DATABASE = Nama Database Bebas dan harus di sesuaikan    |
| PASSWORD = Password Bebas dan harus di sesuaikan         |
| USERNAME = Password Bebas dan harus di sesuaikan         |
| HOST = localhost                                         |
| PORTDB = 3360                                            |
| SECRET_SESSION =                                         |
| REFRESH_TOKEN_SECRET =                                   |
| ACCESS_TOKEN_SECRET =                                    |

## Development

Setelah mengisi file .env langkah selanjutnya melakukan perintah berikut

# install nodejs

```sh
npm install
```

# Menjalankan Project

perintah ini berfungsi menjalankan server backend

```sh
npm run dev:server
```

# import Table

perintah ini berfungsi mengimport seluruh file table ke database.

```sh
npm run dev:model
```

# import user dan products

perintah ini berfungsi mengimport seluruh dummy user dan product ke database.

```sh
npm run dev:seed
```

# mengahapus seluruh file database

perintah ini berfungsi untuk menghapus database

```sh
npm run dev:drop
```
