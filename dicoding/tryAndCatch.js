/**
 * Untuk menangani eror pada JavaScript, gunakan try dan catch. Penulisan kode try-catch untuk menangani eror adalah seperti ini:
 *     try {
        // kode
    } catch (error) {
        // error handling
    }
 */

    try {
        console.log("Awal blok try");
        console.log("Akhir blok try");
    } catch (error) {
        console.log("Tidak terjadi eror, maka kode ini diabaikan");
    }
     
    /* output
    Awal blok try
    Akhir blok try
    */

    /**
     * Object error memilikir beberapa properties utama
     * name : Nama error yang terjadi.
     * message : Pesan tentang detail error.
     * stack : Informasi urutan kejadian yang menyebabkan error.
     * Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.
     */

    try {
        console.log("Awal blok try");   // (1)
        errorCode;                      // (2)
        console.log("Akhir blok try");  // (3)
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }

    /**
     * Try Catch Finally
     * Selain try dan catch, ada satu blok lagi yang ada dalam mekanisme error handling pada JavaScript, yaitu finally. 
     * Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
     */
    try {
        console.log("Awal blok try");
        console.log("Akhir blok try");
    } catch (error) {
        console.log("Baris ini diabaikan");
    } finally {
        console.log("Akan tetap dieksekusi");
    }