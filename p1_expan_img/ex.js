const panels= document.querySelectorAll(".panel")
panels.forEach(panel => {
    /: This is the callback function that you're passing to the forEach method. It's an arrow function with the parameter panel, its a parameter/ 
    panel.addEventListener("click", () => {
        removeActiveClasses()
        panel.classList.add("active")
    } )
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panels.forEach(panel => {
            panel.classList.remove("active")
        })
    })
}