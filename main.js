// Header Toggle
let MenuButton = document.getElementById('MenuButton')

MenuButton.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})