let Distance = 500
let Carburant = 35

let Consommation = (Carburant/Distance)*100


console.log(`
    Distance : ${Distance} km
    Carburant : ${Carburant} litres
    Consommation : ${Math.floor(Consommation)} L/100 km
    `)