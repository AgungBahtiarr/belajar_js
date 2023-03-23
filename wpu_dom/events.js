const p3 = document.querySelector('.p3');

function ubahWarna(){
    p2.style.backgroundColor = 'blue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){ // param event, function
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textLi = document.createTextNode('item baru');
    liBaru.appendChild(textLi);
    ul.appendChild(liBaru);
    alert('ok');
})