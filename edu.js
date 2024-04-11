const btn=document.getElementsByClassName('hamburger-2')[0];
const navbar=document.getElementsByClassName('side-nav')[0];
const move=document.getElementsByClassName('main-title')[0]

btn.addEventListener('click',()=>{
    navbar.classList.toggle('active')
    move.classList.toggle('move')
}
)