const menuIcon = document.querySelector('.menu-icon');
if(menuIcon){
    const menuBody = document.querySelector('.menu-body');
    menuIcon.addEventListener('click', function(e){
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
    });
}
