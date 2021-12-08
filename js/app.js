function toggleMenu() {
    // target menu for cleaner code
    const menu = document.getElementById('menu')

    // whether or not #menu has the class hidden
    const menuIsHidden = menu.classList.contains('hidden')

    if (menuIsHidden === true) menu.classList.remove('hidden')
    else menu.classList.add('hidden')   
}
