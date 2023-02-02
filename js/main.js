// NAvbar
window.addEventListener('scroll',()=>{
   document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100);
});

// SHOW HİDE Faq ANSWER
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        // icona müdahale
        const icon=faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus"
        }else {
            icon.className = "uil uil-plus";
        }
    })
})


//swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // genişlik 600px
    breakpoints:{
        600:{
            slidesPerView: 2
        }
    }
});

//Show/Hide Nav menu
const menu=document.querySelector('.nav_menu');
const menuBtn=document.querySelector('#open-menu-btn');
const closeBtn=document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";

})

//Close Nav menu
const closeNav=()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}
closeBtn.addEventListener('click',closeNav)



















