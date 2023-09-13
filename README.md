## Knowledge base

1. Apa yang anda ketahui tentang Rest API?
> Rest API merupakan sebuah teknik, gaya, atau arsitektur dalam perangkat lunak untuk mendefinisikan aturan-aturan atau kontrak dalam membuat sebuah web service yang bertujuan untuk menghubungkan satu service dengan service lain.

2. Apa yang anda ketahui tentang Server side and Client side processing?
> Server side processing merupakan sebuah cara yang dilakukan suatu sistem untuk melakukan rendering tampilan web pada server sehingga client hanya menerima dan langsung menampilkan halaman pada browser. hal ini biasanya diimplementasikan pada cloudfront untuk melakukan cache agar mempercepat akses ke web page. Sebaliknya client side processing akan melakukan rendering page pada sisi client.

4. Apa yang anda ketahui tentang Design pattern Dependency Injection?
> Dependency Injection merupakan sebuah design pattern yang digunakan untuk membuat suatu komponen dari aplikasi tidak ketergantungan antara satu sama lain (loose coupling). Dalam angular, dengan adanya DI ini component tidak harus memuat semua service yang sudah ada melainkan hanya yang dibutuhkan pada component tersebut saja.

5. Apa yang anda ketahui tentang Typescript dan Angular framework?
> Typescript merupakan bahasa pemrograman yang dikembangkan oleh Microsoft yang berdasarkan bahasa Javascript namun memiliki fitur yang lebih banyak. Sedangkan Angular merupakan salah satu framework web application berbasis bahasa pemrograman Typescript.

6. Apa yang anda ketahui tentang Microfrontend?
> Microfrontend merupakan sebuah pendekatan dalam mendesain aplikasi frontend seperti yang sering digunakan dalam pengembangan backend menggunakan microservice dimana pada microfrontend pengembangan dilakukan secara terpisah pisah antara satu halaman dengan halaman lain. Sehingga, kompleksitas pengembangan dapat dibagi bagi sesuai dengan fitur utama yang ada dalam tiap halaman atau page.

## Design modules

Dalam suatu schenario ada requirement membuat aplikasi e-commerse seperti Tokopedia seperti berikut:

1. Catalog, pelanggan mencari product di toko
    ![catalog](imgs/catalog.png)
2. Item, bisa melihat detail informasi produk
    ![items](imgs/item.png)
3. Cart, pelanggan bisa menambahkan produk yang ingin di beli ke keranjang
    ![cart](imgs/cart.png)
4. Setelah di checkout, masuk ke list transaction
    ![list-transaction](imgs/list-transaction.png)
5. Kita juga bisa liat detail transactionya
    ![detail-transaction](imgs/detail-transaction.png)

Kemudian temen-temen buat serta jelankan component communication terkait design UI/UX tersebut. contohnya coba breakdown componenet yang ada di module catalog trus coba dijelaskan gimana comunikasinya antara module tersebut.

1. Catalog
> Dalam Catalog, terdapat beberapa component yaitu user component, user-product component, serta filter component. User component akan berkomunikasi dengan user-product component untuk menampilkan product apa saja yang dimiliki oleh user tersebut. Sedangkan filter component akan berkomunikasi dengan user-product untuk menampilkan product apa saja yang ingin ditampilkan oleh user.
2. Item
> Dalam Item, terdapat beberapa component seperti breadcrumb component, dan product-detail component. Product-detail component ini sebenarnya berinteraksi dengan component yang ada sebelumnya yaitu user-product component dimana ketika user memilih salah satu product maka product-detail component akan hanya menampilkan seluruh detail dari product yang dipilih. Kemudian breadcrumb component akan menyesuaikan datanya sesuai dengan product yang dipilih user. Selain itu terdapat juga component lain seperti checkout component, chat component, wishlist component, dan share component. Masing-masing komponent ini akan berfungsi sesuai namanya ketika user menekan tombol pada component ini.
3. Cart
> Ini merupakan cart component dimana component ini akan berinteraksi dengan user-product component, promotion component, dan checkout component. Cart component akan menerima data dari product-detail component untuk menambahkan item ke dalam list cart. Selain itu setelah user menekan tombol checkout, component ini akan berinteraksi dengan component selanjutnya yaitu checkout component.
4. Checkout
> Dalam checkout component ini, terdapat beberapa component yang sama seperti sebelumnya yaitu filter component dan user-product component. Sesuai namanya filter component ini akan berinteraksi dengan checkout component untuk menampilkan list checkout atau transaksi yang telah dilakukan oleh user. Sedangkan untuk user-product component akan berinteraksi dengan component ini untuk menampilkan product yang telah dipilih user. Apabila user menekan tombol transaction detail maka component ini akan berinteraksi dengan detial-transaction component untuk menampilkan detail transaction yang telah dilakukan user.
5. Detail Transaction
> Seperti yang dikatakan sebelumnya detail transaction ini menerima data dari checkout component untuk menampilkan detail transaction yang dipilih user. Selain itu terdapt juga component lain seperti user-product component untuk menampilkan product yang telah dibeli oleh user.

## Praktek

- Data: data yang diperoleh harus menggunakan Rest API [mockachino](https://www.mockachino.com/)
- CSS Framework: bootstrap
- Arhitecture: Monolith

## Implemented Features

- [x] Catalogue
- [x] Product details
- [x] Cart
- [x] Checkout
- [x] Checkout details