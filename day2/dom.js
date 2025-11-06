import { greetUser } from "../utils.js"
console.log(greetUser("Jesse"))

const title = document.getElementById("title")
const btn = document.getElementById("change")

btn.addEventListener("click", () => {
    if (title.textContent === "Welcome") {
        title.textContent = "You clicked the button!"
        document.body.style.backgroundColor = "#f0c"
    } else {
        title.textContent = "Welcome"
        document.body.style.backgroundColor = "white"
    }
})
