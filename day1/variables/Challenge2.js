const ps =require("prompt-sync")

const prompt = ps()

let MAD = prompt("donner moit le monton de MAD")
let EUR = MAD/11


console.log(`
    Budget en MAD : ${MAD}
    Budget en EUR : ${EUR}
    `)