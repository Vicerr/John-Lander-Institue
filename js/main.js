// SLIDER ANIMATION ALGORITHIM

// function to change the image slide when the user clicks on a button which activates this function
let currentIndex = 0
const slides = document.querySelector(".slides")
const slider = document.querySelector(".slider")
const images = slides.querySelectorAll("img")

function changeSlide(direction) {
    const totalSlides = images.length

    // Update index
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides

    // Update slide position
    slides.style.transform = `translateX(-${currentIndex * 100}%)`
}

function startSliderAnimation() {
    slideInterval = setInterval(() => {
        changeSlide(1)
    }, slider.dataset.slideDuration)
}

function stopSliderAnimation() {
    clearInterval(slideInterval)
}
const header = document.querySelector(".hero-header")

// continue slider when mouse leaves the screen
header.addEventListener("mouseleave", startSliderAnimation)
//stop slider when mouse hovers on the elements
header.addEventListener("mouseenter", stopSliderAnimation)
// start the animation intially
startSliderAnimation()
const nav = document.querySelector(".nav-items")
// function openSearchBar(element) {
//     // element.onclick = () => {
//     // }
//     element.addEventListener("click", () => {
//         nav.dataset.searchbarOpened = "true"
//     })
// }
// function closeSearchBar(element) {
//     // element.onclick = () => {
//     // }
//     element.addEventListener("click", () => {
//         nav.dataset.searchbarOpened = "false"
//     })
// }

const toggleSearch = document.querySelectorAll(".nav-items [data-toggle-searchbar]")
toggleSearch.forEach((element) => {
    element.addEventListener("click", (e) => {
        value = element.dataset.toggleSearchbar
        if (value === "open") {
            nav.dataset.searchbarOpened = "true"
        }
        if (value === "close") {
            nav.dataset.searchbarOpened = "false"
        }
    })
})

const navigaion = document.querySelector("[data-navigation]")
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero-header")
    if (window.scrollY > hero.offsetHeight) {
        navigaion.classList.add("scrolled")
    } else {
        navigaion.classList.remove("scrolled")
    }
})

const dropdownToggleBtn = document.querySelectorAll("nav .dropdown")

dropdownToggleBtn.forEach((button) => {
    let parent = button.closest("li")
    parent.addEventListener("click", () => {
        if (button.getAttribute("aria-expanded") === "false") {
            button.setAttribute("aria-expanded", "true")
            console.log(button.getAttribute("aria-expanded"))
        } else {
            button.setAttribute("aria-expanded", "false")
            console.log(button.getAttribute("aria-expanded"))
        }
    })
})

const open = document.querySelector(".open-nav")
open.addEventListener("click", () => {
    const nav = document.querySelector(".nav-items")
    nav.classList.toggle("display-none")
    // console.log("click")
})
