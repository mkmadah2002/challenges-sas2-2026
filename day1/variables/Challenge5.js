const ps = require("prompt-sync")

const prompt = ps()


let Duree = prompt("enter la duree")

if (+Duree < 60 ) {
    console.log(`
        Durée : ${Duree}
        Catégorie : Court métrage
        `)
}else if( +Duree >= 60 && Duree <= 120  ){
    console.log(`
        Durée : ${Duree}
        Catégorie : Film standard
        `)
}else {
    console.log(`
        Durée : ${Duree}
        Catégorie : Film long
        `)
}