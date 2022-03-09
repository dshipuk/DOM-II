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
window.addEventListener("scroll", evt => {
    console.log("user scrolled")
})

// 7
const header = document.querySelectorAll("header")

header.forEach(ele => {
    ele.addEventListener("dblclick", evt => {
        console.log(evt.target)
    })
})

// 8 
const txt = document.querySelectorAll(".text-content")

txt.forEach(ele => {
    ele.addEventListener('copy', (evt) => {
        const selection = document.getSelection();
        evt.clipboardData.setData('text/plain', selection.toString().toUpperCase())
        evt.preventDefault();
})
})

// 9
document.addEventListener("cut", function(event) {
    console.info("user has cut ", event)
})

// 10
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("dom fully loaded and parsed")
})