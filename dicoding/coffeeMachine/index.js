/**
 * Dalam inisialisasi variabel coffeeStock (nama variabel bebas kita tentukan), 
 * kita gunakan method require() dengan memberikan parameter lokasi berkas state.js. 
 * Dengan begitu variabel coffeeStock akan memiliki nilai module.exports yang sama pada berkas state.js. 
 * Setelah mendapatkan nilainya, kita bebas menggunakannya seperti variabel lokal pada umumnya.
 */

/**
 * NOTES
 * 
 * Tips: Jika kita menggunakan lokasi yang relatif (dapat berubah/dipindahkan), 
 * pastikan awali dengan menuliskan ./. Contohnya, berkas index.js dan state.js berada 
 * pada folder yang sama, maka kita cukup menuliskannya dengan ./state.js.
 */

/**
 * Cara mengimport beberapa nilai sekaligus dengan tanda {}
 */
const {coffeeStock, isCoffeeMachineReady} = require('./state');

const makeCoffee = (type, miligram) => {
    if(coffeeStock[type]>=miligram && isCoffeeMachineReady){
        console.log("Kope Berhasil Dibuat")
    }else{
        console.log("Stock Kopi Habis")
    }
}

makeCoffee("arabica", 20)