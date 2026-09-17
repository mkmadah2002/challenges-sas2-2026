
const ps = require("prompt-sync")

const prompt = ps()


let GB = prompt("enter la GB : ")
let MB = GB * 1024

console.log(`
    Stockage : ${GB} GB

    Résultat : ${MB} MB
    `)