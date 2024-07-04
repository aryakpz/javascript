
// let first = randomcard()
// let second = randomcard()
// let sum = first + second
// let isAlive = true
// let cards =[first,second]

let sum = 0
let isAlive = false
let cards = []
let hasBlackJack = false
let message = ""

let display = document.querySelector(".message")
let sumvalue = document.querySelector("#sum")
let cardvalue = document.getElementById("card")


let play = {
 name:"per",
 score:"145"
}

let players= document.getElementById("player")
players.innerText=play.name + " "+ ":  $"+ play.score


function randomcard() {

    let random = Math.floor(Math.random() * 13) + 1
    if (random == 1) {
        return 11
    }
    else if (random > 10) {
        return 10
    }
    else {
        return random
    }

}
function startgame() {
    isAlive = true;
    let first = randomcard()
    let second = randomcard()
    let cards = [first, second]
    let sum = first + second

    rendergame()
}
function rendergame() {
    if (sum < 21) {
        message = "draw new card"
    }
    else if (sum === 21) {
        message = "you won"
        let hasBlackJack = true
    }
    else {
        message = "out"
        isAlive = false
    }
    console.log(isAlive)
    display.innerText = message
    sumvalue.innerText = "Sum :" + sum
    cardvalue.innerText = "Cards : "

    for (let i = 0; i < cards.length; i++) {
        cardvalue.textContent += cards[i] + " "
    }
}

function newcard() {
    if(isAlive ===true && hasBlackJack === false)
        {

    
    let card = randomcard()
    sum += card
    cards.push(card)
    rendergame()
}

}



















// let age =23
// if (age >22 ){
//     console.log("get")
// }
// else{
//     console.log("not")
// console.log(4===5)
// console.log(3<=3)
// console.log("a"=="a")


// ===================================  Arrays  ==========================================//

// let feature = ["check here","projects","portfolio"]
// let education =["MSc","BCA","HSS","HS"]
// let skill =["HTML","CSS","JS"]
// skill.push("java")
// console.log(skill)
// feature.push("same here")
// console.log(feature)
// feature.pop()
// console.





// let pl1=109
// let pl2= 107
// function besttime(){
//     if(pl1<pl2){
//       return pl1  
//     }
//     else{
//         return pl2
//     }
// }

// let time=besttime()
// console.log(time)



// let complete = true
// let certificate = true
//  if (complete === true && certificate === true)
//     {
//          gencertificate()

//     }
// function gencertificate(){
//     console.log("generating certificate")
// }