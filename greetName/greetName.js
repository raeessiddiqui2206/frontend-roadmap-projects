function createName(name , lastName){
    return `${name} ${lastName} `
}

function timeOfDay(day){
    if(day == 'morning'){
        return `Good Morning`
    }else if(day == 'evening'){
        return `Good Evening`
    } else{
        return `Good Afternoon`
    }
}

function createGreeting(name, lastName, timeDay){
    let greet = timeOfDay(timeDay)
    let names = createName(name, lastName)

    return `${greet} ${names}`
}


console.log(createGreeting('Raees', 'Siddiqui', 'morning'))
console.log(createGreeting('Anis', 'Siddiqui', 'evening'))
console.log(createGreeting('Raj', 'Kumar', 'afternoon'))
