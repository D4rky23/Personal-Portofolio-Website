// Header Toggle
let MenuButton = document.getElementById('MenuButton')

MenuButton.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect
let typed = new Typed('#auto-input', {
    strings: ['Full-Stack Developer!','Web Designer!', 'Student!'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
})