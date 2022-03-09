import './less/index.less'

// Your code goes here!

// 1
const btn = document.querySelectorAll(".btn")
console.log(btn)
function btAlert() {
    alert ("Done")
}
btn.forEach(ele => {
    ele.addEventListener("click", btAlert)
})

// 2
const footer = document.querySelector("footer")
function headerAlert() {
    alert ("mouse over footer")
}
footer.addEventListener("mouseover", headerAlert)

// 3
const nav = document.querySelectorAll(".nav-link")

nav.forEach(ele => {
    ele.addEventListener("wheel", event => {
        const delta = Math.sign(event.deltaY)
        console.info(delta)
    })
})

// 4
window.addEventListener("load", (event) => {
    console.log("page loaded")
})

// 5
window.addEventListener("keydown", evt => {
    console.log(evt)
})

// 6
