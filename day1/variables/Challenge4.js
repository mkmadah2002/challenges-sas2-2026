
const ps = require("prompt-sync")

const prompt = ps()

let Distance = prompt("enter la Distance : ")
let Carburant = prompt("enter la Carburant : ")

let Consommation = (Carburant/Distance)*100


console.log(`
    Distance : ${Distance} km
    Carburant : ${Carburant} litres
    Consommation : ${Math.floor(Consommation)} L/100 km
    `)