let ourTeam = [
    { nome: "Wayne Barnett", roulo: "Founder & CEO", immagine: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Carol", roulo: "Chief Editor", immagine: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", roulo: "Office Manager", immagine: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", roulo: "Social Media Manager", immagine: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", roulo: "Developer", immagine: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", roulo: "Graphic Designer", immagine: "barbara-ramos-graphic-designer.jpg" }
]

for ( let i = 0; i < ourTeam.length; i++ ) {
    const membro = ourTeam[i]
    console.log(` nome: ${membro.nome} ruolo: ${membro.roulo}` );
    // for ( let key in membro) {
    //     console.log( key, membro[key])
    // }
}