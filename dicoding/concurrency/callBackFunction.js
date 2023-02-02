/**
 * bagaimana menangani suatu nilai yang didapatkan secara asynchronous pada program yang berjalan secara synchronous. 
 *
 * const orderCoffee = () => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}
 
const coffee = orderCoffee();
console.log(coffee);
 
/* output
Sedang membuat kopi, silakan tunggu...
null
*/

/**
 * 
 * Apa itu callback function? Mari kita bayangkan kembali ketika memesan kopi. 
 * Pada kasus ini mungkin terdapat dua aksi yang bisa kita lakukan:
 * 
 * (Synchronous) Kita tetap menunggu di kasir sampai kopi datang.
 * (Asynchronous) Kita menunggu di meja setelah memesan kopi. 
 * Selanjutnya kopi akan diantarkan oleh pelayan. 
 * Sehingga, kita tidak perlu menunggu di kasir dan dapat melakukan pekerjaan lain.
 * 
 * pada JavaScript, pelayan ini berperan layaknya callback function. 
 * Ia diperintahkan pada sebuah fungsi asynchronous kemudian akan dipanggil/digunakan ketika tugas itu selesai.
 * 
 */

/**
 * Bagaimana cara menerapkannya dalam kode? Pertama, 
 */

const orderCoffee = callback => { // kita tambahkan parameter dengan nama callback pada fungsi asynchronous.
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => { // panggil atau gunakan callback yang diisikan dengan data yang akan dibawa (coffee) ketika task selesai dilakukan.
        coffee = "Kopi sudah jadi!";
        callback(coffee); // Setelah menggunakan callback, fungsi tidak perlu lagi mengembalikan nilai. Sehingga, kita bisa menghapus kode return coffee;
    }, 3000);
}
 
 
orderCoffee(coffee => { // cara menjalankan fungsi callback
    console.log(coffee);
});
 
 
/* output
Sedang membuat kopi, silakan tunggu...
---- setelah 3 detik ----
Kopi sudah jadi!
*/


/**
 * Call Back Hell
 * 
 * Kita sudah mengetahui bahwa callback dibutuhkan untuk mendapatkan nilai yang berasal dari asynchronous function. 
 * Lantas bagaimana jika terdapat proses yang saling bergantung satu sama lain? Contohnya, 
 * untuk membuat kue tahapan yang perlu kita lakukan adalah:
 * 
 * Menyiapkan bahan
 * Membuat adonan
 * Memasukkan adonan ke cetakan
 * Memanggang adonan
 * 
 * Jika seluruh tahapan tersebut berjalan secara synchronous, mungkin kita bisa melakukannya seperti ini:
 *
 * function makeACake(...rawIngredients) {
        const ingredients = collectIngredients(rawIngredients);
        dough = makeTheDough(ingredients);
        pouredDough = pourDough(dough);
        cake = bakeACake(pouredDough);
        console.log(cake);
    }

    Secara Async maka

        function makeACake(...rawIngredients) {
        collectIngredients(rawIngredients, function(ingredients) {
            makeTheDough(ingredients, function(dough) {
                pourDough(dough, function(pouredDough) {
                    bakeACake(pouredDough, function(cake) {
                        console.log(cake);
                    })
                })
            })
        });
    }

    Callback hell terjadi karena banyak sekali callback function yang bersarang karena 
    saling membutuhkan satu sama lain. Sehingga,
 */