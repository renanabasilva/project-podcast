// function sizeChange() {
//     if (window.innerWidth >=768) {
//         itens.style.display = 'block'
//     } else {
//         itens.style.display = 'none'
//     }
// }

// function clickMenu() {
//     if (menu.style.visibility == 'visible') {
//         menu.style.visibility = 'hidden'
//         closemenu.style.visibility = 'hidden'
//     } else {
//         menu.style.visibility = 'visible'
//         closemenu.style.visibility = 'visible'
//     }
// }

// const menuBtn = document.getElementById('burger');
// const menu = document.getElementById('menu');

// menuBtn.addEventListener('click', function() {
//   menu.classList.toggle('open');
// });

const menu = document.getElementById('menu')
function clickMenu() {
    menu.classList.toggle('open');
}

// function exitMenu() {
//     menu.style.top = '-100%'
// }