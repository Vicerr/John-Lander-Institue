// function to change the image slide when the user clicks on a button which activates this function

const nav = document.querySelector(".nav-items")

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

const course = document.querySelectorAll(".course-details [data-toggle-course-details]")
course.forEach((element) => {
    element.addEventListener("click", () => {
        togg(element)
    })
})

function togg(targetElement) {
    const showElement = targetElement
        .closest(".course-details__box")
        .querySelector(".course-details__content")
    if (showElement.getAttribute("aria-expanded") === "false") {
        showElement.setAttribute("aria-expanded", "true")
    } else {
        showElement.setAttribute("aria-expanded", "false")
    }
}
