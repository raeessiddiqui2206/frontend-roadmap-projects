function show(a , b){
    i = 0
        a.addEventListener("click", (e) => {
        e.preventDefault()
        b.style.display = "block"
        i++
    })
}

const a1 = document.getElementById("a1")
const cp1 = document.getElementById("cp1")
show(a1 , cp1)

const a2 = document.getElementById("a2")
const cp2 = document.getElementById("cp2")
show(a2 , cp2)

const a3 = document.getElementById("a3")
const cp3 = document.getElementById("cp3")
show(a3 , cp3)

const a4 = document.getElementById("a4")
const cp4 = document.getElementById("cp4")
show(a4 , cp4)

const a5 = document.getElementById("a5")
const cp5 = document.getElementById("cp5")
show(a5 , cp5)

const a6 = document.getElementById("a6")
const cp6 = document.getElementById("cp6")
show(a6 , cp6)
