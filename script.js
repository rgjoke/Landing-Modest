(function() {
    let navicon = document.querySelector('.navicon');
    navicon.addEventListener('click', () => {
        navicon.classList.toggle('navicon_active');
        let menu = document.querySelector('.menu-nav');
        menu.classList.toggle('menu-nav_active');
    });
}());

  


