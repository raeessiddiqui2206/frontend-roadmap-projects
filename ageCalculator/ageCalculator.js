const age = document.getElementById("age");
const button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()
    let nowDate = Date.now()
    let ageValue = age.value
    
    let agedate = new Date(ageValue)
    let miliSec = agedate.getTime()

    
    let year = nowDate-miliSec
    
    let yearConv = 1000*60*60*24*365
    let yearGap = Math.floor(year/yearConv)

    let yearMonth = year % yearConv

    let montGap = 1000*60*60*24*30.44
    let yearMon = Math.floor(yearMonth/montGap)

    let nowAge = document.getElementById("nowAge")
    
    let dateGap = yearMonth % montGap

    let nowdate =1000*60*60*24
    let date = Math.floor(dateGap/nowdate)

    nowAge.textContent = `Tum Abhi ${yearGap} saal or ${yearMon} Mahine or ${date} din ke ho`
})
