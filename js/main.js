

let navLinkLis = document.querySelectorAll('.navlinks');
const windowPathName = window.location.pathname;

navLinkLis.forEach (navLink => {
    const navLinkPathanme = new URL(navLink.href).pathname;

    if (navLinkPathanme === windowPathName) {
        navLink.classList.add('active');
    }
});

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropDownMenu')

toggleBtn.onclick = function () {
dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars-staggered'
};
