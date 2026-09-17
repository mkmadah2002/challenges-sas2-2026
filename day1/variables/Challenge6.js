const ps= require("prompt-sync")

const prompt = ps()

let score1 = +prompt("donner moi le score 1 ")
let score2 = +prompt("donner moi le score 2 ")
let score3 = +prompt("donner moi le score 3 ")
let score4 = +prompt("donner moi le score 4 ")


let total = score1 + score2 + score3 + score4
let Moyenne = total/4

conle.log(`
    Partie 1 : ${score1}
    Partie 2 : ${score2} 
    Partie 3 : ${score3}
    Partie 4 : ${score4}

    Score total : ${total}
    Moyenne : ${Moyenne}
    
    `);


