const cross = document.getElementById("cross");
const popup = document.getElementById("popup");
const accept = document.getElementById("accept")

window.addEventListener("DOMContentLoaded", ()=>{
    const isAccepted = localStorage.getItem("popupAccepted")

    if(isAccepted == "true"){
        popup.style.display = "none";
    }
})

cross.addEventListener("click", (e) => {
    popup.style.display= "none"
})

accept.addEventListener("click", (e) => {
    popup.style.display= "none"
    localStorage.setItem("popupAccepted", "true")
})
