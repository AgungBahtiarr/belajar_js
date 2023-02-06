/**
 * Salah satu cara menulis kode yang baik adalah mengikuti prinsip yang disebut separation of concerns atau pemisahan masalah. 
 * Pemisahan masalah berarti mengorganisasikan kode ke dalam bagian-bagian yang berbeda berdasarkan tugas tertentu. 
 * Hal ini akan memudahkan kita kelak mencari kode yang salah jika aplikasi tidak bekerja dengan baik.
 * 
 * Method .catch() mirip seperti .then(). Namun, method ini hanya menerima satu parameter function yang digunakan untuk rejected handler. 
 * Method catch() ini akan terpanggil ketika objek promise memiliki kondisi onRejected. 
 * Berikut contoh penggunaan method .catch():
 */

checkStock()
    .then(handleSuccess)
    .catch(handleFailure);
    
// Dengan menggunakan method catch(), kita dapat menerapkan prinsip separation of concerns sekaligus membuat kodenya menjadi lebih rapi.