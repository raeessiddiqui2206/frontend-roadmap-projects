const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const four = document.getElementById("forth")
const d1 = document.getElementById("d1")
const d2 = document.getElementById("d2")
const d3 = document.getElementById("d3")
const d4 = document.getElementById("d4")

first.addEventListener("click", (e) => {
    e.preventDefault()
    d2.style.display = "none"
    d1.style.display = "flex"
    d3.style.display = "none"
    d4.style.display = "none"
    first.style.borderBottom = "2px solid gray"
    second.style.borderBottom = "none"
    third.style.borderBottom = "none"
    four.style.borderBottom = "none"
})

second.addEventListener("click", (e) => {
    e.preventDefault()
    d2.style.display = "flex"
    d1.style.display = "none"
    d3.style.display = "none"
    d4.style.display = "none"
    second.style.borderBottom = "2px solid gray"
    first.style.borderBottom = "none"
    third.style.borderBottom = "none"
    four.style.borderBottom = "none"
})

third.addEventListener("click", (e) => {
    e.preventDefault()
    d2.style.display = "none"
    d1.style.display = "none"
    d3.style.display = "flex"
    d4.style.display = "none"
    third.style.borderBottom = "2px solid gray"
    first.style.borderBottom = "none"
    second.style.borderBottom = "none"
    four.style.borderBottom = "none"
})

four.addEventListener("click", (e) => {
    e.preventDefault()
    d2.style.display = "none"
    d1.style.display = "none"
    d3.style.display = "none"
    d4.style.display = "flex"
    four.style.borderBottom = "2px solid gray"
    third.style.borderBottom = "none"
    first.style.borderBottom = "none"
    second.style.borderBottom = "none"
})

