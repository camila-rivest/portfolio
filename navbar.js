const openButton = document.getElementById("open-sidebar-button")
const navbar = document.getElementById("navbar")

function openSidebar() {
    navbar.classList.add("nav-show")
    openButton.setAttribute("aria-expanded", "true")
}

function closeSidebar() {
    navbar.classList.remove("nav-show")
    openButton.setAttribute("aria-expanded", "false")
}

const navLinks = document.querySelectorAll("nav a")
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeSidebar()
    })
})
    
// Create a condition that targets viewports at least 690px wide
const mediaQuery = window.matchMedia('(min-width: 690px)')

function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
        navbar.classList.remove("nav-show")
        // Then log the following message to the console
        console.log('Media Query Matched!')
    }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

    // Initial check
handleTabletChange(mediaQuery)