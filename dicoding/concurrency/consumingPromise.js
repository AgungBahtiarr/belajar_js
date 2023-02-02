/**
 * Consuming Promises
 * 
 * status awal dari Promise adalah pending. 
 * Kemudian, akan ada dua kemungkinan yang terjadi, fulfilled atau rejected.
 * Untuk menangani hasil dari Promise, kita gunakan method .then(). 
 * Jika kita terjemahkan, “then” berarti “kemudian”, 
 * sehingga kurang lebih kita memerintahkan JavaScript seperti ini: “Jika janji saya sudah selesai, kemudian lakukan ...”. 
 * Jika dituliskan dalam bentuk kode akan seperti berikut:
 * 
 *  const myPromise = new Promise(executorFunction);
    myPromise.then(onFullfilled, onRejected);
 */

    const stock = {
        coffeeBeans: 250,
        water: 1000,
    }
     
    const checkStock = () => {
        return new Promise((resolve, reject) => {
            if (stock.coffeeBeans >= 16 && stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi");
            } else {
                reject("Stok tidak cukup");
            }
        });
    };
    
    // untuk menangani masing-masing status resolve dan reject.
    const handleSuccess = resolvedValue => {
        console.log(resolvedValue);
    }
     
    const handleFailure = rejectionReason => {
        console.log(rejectionReason);
    }
     
    // panggil method .then() pada checkStock() untuk menangani hasil yang dikembalikan dari promise.
    checkStock().then(handleSuccess, handleFailure);

/**
 * NOTES *
 * 
 * checkStock() merupakan fungsi yang mengembalikan promise dan akan menghasilkan resolve() dengan membawa nilai “Stok cukup. Bisa membuat kopi”.
 * Lalu kita mendeklarasikan fungsi handleSuccess() dan handleFailure() yang mencetak nilai dari parameternya.
 * Kemudian kita memanggil method .then() dari checkStock. Isi parameter then() dengan dua fungsi handler yang telah kita buat sebelumnya.
 * Parameter pertama berisi fungsi handleSuccess untuk menangani kondisi ketika promise berstatus resolve. Parameter kedua berisi fungsi handleFailure yang menangani ketika promise berstatus reject.
 */