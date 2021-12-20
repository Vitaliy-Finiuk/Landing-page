const menuIcon = document.querySelector('.menu_icon');
if(menuIcon){
    const menuBody = document.querySelector('.menu_body');
    menuIcon.addEventListener('click', function(e){
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
    });
}
