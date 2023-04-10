// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



// show faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus"
        }
    })
})


// show hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
// alert("Fuuuuckkkkk!");

// close nav menu


const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav)

// expandable images

const expandableImages = document.querySelectorAll(".expandable-image");

expandableImages.forEach(function(expandableImage) {
    expandableImage.addEventListener("click", function() {
        const originalSrc = expandableImage.src;

        // Create a new window with the original size of the image
        const popupWindow = window.open(originalSrc, "popupWindow", "width=" + expandableImage.naturalWidth + ", height=" + expandableImage.naturalHeight + ", top=" + ((window.innerHeight - expandableImage.naturalHeight) / 2) + ", left=" + ((window.innerWidth - expandableImage.naturalWidth) / 2));

        // Focus the new window
        popupWindow.focus();
    });
});

