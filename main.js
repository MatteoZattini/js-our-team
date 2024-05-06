// let name = document.getElementsByClassName("card-title")
// let ruolo = document.getElementsByClassName("card-text")
// let img = document.getElementsByClassName("card-img-top")
let team = document.getElementById("team")


let ourTeam = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", immagine: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Carol", ruolo: "Chief Editor", immagine: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", immagine: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", immagine: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", ruolo: "Developer", immagine: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", immagine: "barbara-ramos-graphic-designer.jpg" }
]

for ( let i = 0; i < ourTeam.length; i++ ) {
    let membro = ourTeam[i]
    let card = document.createElement("div")
    card.classList.add("card")
    team.append(card)
    card.innerHTML = `
    <img class="card-img-top" src="./img/${membro.immagine}" alt="">
    <div class="card-body">
    <h5 class="card-title">${membro.nome}</h5>
    <p class="card-text">${membro.ruolo}</p>
    </div>`

    // console.log(` nome: ${membro.nome} ruolo: ${membro.roulo}` );


    // stampare(team, nome, ruolo, img )
}

// function stampare(contenitore, nome, ruolo, img){
//     contenitore.innerHTML = (nome + ruolo + img)
// }