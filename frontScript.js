const gotop = document.querySelector(".gotopbtn");

window.addEventListener("scroll", () => {

    if(window.pageYOffset > 100) {
        gotop.classList.add("active");
    }
    else{
        gotop.classList.remove("active");
    }
})