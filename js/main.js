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
