let bars = document.querySelector("#bars")
// console.log(bars)
let nav = document.querySelector("nav")
let navLinks = document.querySelector(".nav-links")
// console.log(navLinks)

bars.addEventListener("click", () => {
    // alert("hello")
    navLinks.classList.toggle("show")
    bars.classList.toggle("fa-times")
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 30){
        nav.classList.add("bgcolor")
    }else{
        nav.classList.remove("bgcolor")
    }
})