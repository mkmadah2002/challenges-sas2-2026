const ps= require("prompt-sync")

const prompt = ps()

let noteCC = +prompt("donner moi le note de Contrôle continu : ")
let noteProjet = +prompt("donner moi le note de Projet : ")
let noteExamen = +prompt("donner moi le note de examen : ")

let noteFinal = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10


console.log(`

    Contrôle continu : ${noteCC}
    Projet : ${noteProjet}
    Examen : ${noteExamen}

    Note finale : ${noteFinal}
    
    `);



