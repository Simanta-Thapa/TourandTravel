// navbar 
const navMenu = document.getElementById("nav-Menu");
const navToggle = document.getElementById("nav-Toggle")
const navClose = document.getElementById("nav-Close")

if(navToggle){
    navToggle.addEventListener('click',()=>
    {
        navMenu.classList.add("showMenu")
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("showMenu")
      })
}


// header

const blurHeader =() =>{
    const header  = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add("blurHeader")
                      : header.classList.remove("blurHeader")
}

window.addEventListener('scroll', blurHeader)


// show scroll up 

const scrollUp = () =>{
    const scrollUP = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUP.classList.add("showScroll")
                       : scrollUP.classList.remove("showScroll")
}

window.addEventListener('scroll', scrollUp)