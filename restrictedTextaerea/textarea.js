
const h1 = document.querySelector(".reach")
const text = document.getElementById("text")
const count = document.getElementById("count")


text.addEventListener("input", (e) => {
    e.preventDefault()
    let textLength =  text.value.length
    count.textContent = textLength
    if(textLength >= 250){ 
       h1.classList.add('dis')  
       count.classList.add('dis')  
    }else{
         h1.classList.remove('dis') 
         count.classList.remove('dis') 
    }


})
