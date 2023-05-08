// function sizeChange() {
//     if (window.innerWidth >=768) {
//         itens.style.display = 'block'
//     } else {
//         itens.style.display = 'none'
//     }
// }

function clickMenu() {
    if (menu.style.visibility == 'visible') {
        menu.style.visibility = 'hidden'
        closemenu.style.visibility = 'hidden'
    } else {
        menu.style.visibility = 'visible'
        closemenu.style.visibility = 'visible'
    }
}