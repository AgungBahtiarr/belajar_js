
/**
 * DOM SELECTOR
 */

// Get Ele men By ID
const judul = document.getElementById('judul');
// judul.style.color = "red";

const p1 = document.getElementsByTagName('p')[0]; // Diakses menggunakan index
// p1.style.color = "blue";
// p1[0].style.color = 'red';

const p = document.getElementsByClassName('p1');
// p1.style.color = "blue";

const li = document.querySelector("section#b p");
// li.style.color = "red";

const liList = document.querySelectorAll("section#b ul li");
// liListLength = liList.length;
 
// for(let i = 0;i<liListLength;i++){
//     liList[i].style.color = "red";
// }


/**
 * DOM MANIPULATION
 */

// judul.innerHTML = "<b>Agung Bahtiar</b>" // manipulasi value dalam tag
// judul.setAttribute("name","agung");
// judul.getAttribute("name");
// judul.removeAttribute("name");
// judul.classList.add("class", "satu");
// judul.classList.remove("satu");
// judul.classList.toggle("satu"); // mati hidup class
// judul.classList.contains("satu");
// judul.classList.replace("satu","dua");

// Buat Elemen baru
const p4 = document.createElement('p');
const textp4 = document.createTextNode("Paragraf 4");
// Rangkai Elemen baru
p4.appendChild(textp4);

// Menyimpan p4 di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(p4);

//Buat elemen baru
const liBaru = document.createElement('li');
const textLi = document.createTextNode('item baru');
liBaru.appendChild(textLi);

// seleksi parent
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
// Insert before
ul.insertBefore(liBaru, li2); // Param 1 yang akan di insert, param 2 lokasi sebelum



// Menghapus elemen
const link = sectionA.getElementsByTagName('a')[0];
sectionA.removeChild(link);


//replace
const sectionB = document.getElementById('b');
const p1B = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2 = document.createTextNode('Heading dengan h2');
h2Baru.appendChild(textH2);

sectionB.replaceChild(h2Baru, p1B);