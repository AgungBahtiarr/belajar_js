
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