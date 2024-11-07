function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuIcon = document.getElementById("menu-icon")
    dropdownMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');   
}

function searchButton(){
    const navBar = document.getElementById("nav-bar");
    navBar.classList.remove("nav-bar");
    navBar.classList.add("search")
}