/**
 * Promise merupakan sebuah objek yang digunakan untuk membuat sebuah 
 * komputasi (kode) ditangguhkan dan berjalan secara asynchronous [5]. 
 * Untuk membuat objek promise, kita gunakan keyword new diikuti dengan constructor dari Promise:
 * 
 * Di dalam constructor Promise, kita perlu menetapkan resolver function atau bisa disebut executor function. 
 * Fungsi tersebut akan dijalankan secara otomatis ketika constructor Promise dipanggil.
 * 
 * 
 *     const executorFunction = (resolve, reject) => {
        const isCoffeeMakerReady = true;
        if (isCoffeeMakerReady) {
            resolve("Kopi berhasil dibuat");
        } else {
            reject("Mesin kopi tidak bisa digunakan");
        }
    }
     
     
    const makeCoffee = () => {
        return new Promise(executorFunction);
    }
    const coffeePromise = makeCoffee();
    console.log(coffeePromise);
     
     
    output
    Promise { 'Kopi berhasil dibuat' }
*/

/**
 * Executor function memiliki dua parameter, yaitu resolve dan reject yang berupa fungsi. 
 * Berikut penjelasan detailnya:
   
 * resolve() adalah parameter pertama pada executor function. 
   Parameter ini merupakan fungsi yang dapat menerima satu parameter. 
   Biasanya kita gunakan untuk mengirimkan data ketika promise berhasil dilakukan. 
   Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi fulfilled.

 * reject() adalah parameter kedua pada executor function. 
   Parameter ini merupakan fungsi yang dapat menerima satu parameter dan digunakan untuk memberikan alasan kenapa Promise tidak dapat terpenuhi. 
   Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi rejected.
   
 */