# Academic and E-Learning System

> Academic and E-Learning System dibuat untuk menyelesaikan tugas akhir sebagai syarat untuk mendapatkan gelar S.T

Sistem ini dipecah menjadi 3 bagian yaitu `Academic`, `E-Learning`, dan `Auth`. Ke-3 sistem ini diintegrasikan dengan menggunakan NGINX dan dibungkus menggunakan Docker

## Features

### Academic
- [x] Melihat notifikasi terbaru
- [x] Mengambil mata kuliah
- [x] Melihat materi kuliah yang sudah disetujui
- [x] Melihat peminjaman alat

### E-Learning
- [x] Melihat info mata kuliah terbaru
- [x] Membaca materi
- [x] Mengirim tugas
- [x] Mengerjakan kuis
- [ ] Diskusi per mata kuliah

## Installation

1. Clone repo ini menggunakan `HTTPS` atau `SSH`
2. Install dependencies pada `Auth`
    ```sh
    cd frontend
    cd auth
    npm install
    ```
3. Install dependencies pada `Academic`
    ```sh
    cd frontend
    cd academic
    npm install
    ```
    
4. Install dependencies pada `E-Learning`
    ```sh
    cd frontend
    cd elearning
    npm install
    ```

5. Build Docker Container 
    > Sementara ini build docker image belum dapat dilakukan secara otomatis, maka kita perlu build React JS satu per satu kemudian build docker image

    **Build `Auth`**
    ```sh
    cd frontend
    cd auth
    npm run build
    ```
    
    **Build `Academic`**
    ```sh
    cd frontend
    cd academic
    npm run build
    ```

    **Build `E-learning`**
    ```sh
    cd frontend
    cd elearning
    npm run build
    ```
    
    **Build Docker Image**
    ```sh
    docker build --tag skripsi-integration-system:1.0 .
    ```
    
    Setelah docker berhasil dibuild, maka langkah selanjutnya yaitu membuat container 
    
    ```sh
    docker container create --name integration-system -p 8080:80 skripsi-integration-system:1.0
    ```
    
    > **Port `8080` (expose port) dapat diganti jika bentrok dengan environtment development yang lain di PC anda**
    
    Jalankan container
    ```sh
    docker container start integration-system
    ```
    
    Akses url pada browser [http://localhost:8080/auth/login](http://localhost:8080/auth/login)
    
