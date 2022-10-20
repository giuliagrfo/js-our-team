// Creare l’array di oggetti con le informazioni fornite

const teamMembers = [
{
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: './assets/img/wayne-barnett-founder-ceo.jpg'
},
{
    name: 'Angela', 
    role: 'Chief Editor',
    image: './assets/img/angela-caroll-chief-editor.jpg'
},
{
    name: 'Walter gordon',
    role: 'Chief Editor',
    image: './assets/img/walter-gordon-office-manager.jpg'
},
{
    name: 'Walter gordon',
    role: 'Social Media Manager',
    image: './assets/img/angela-lopez-social-media-manager.jpg'
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    image: './assets/img/scott-estrada-developer.jpg'
},
{
    name: 'Barbara Ramos',
    role: 'Grafic designer',
    image: './assets/img/barbara-ramos-graphic-designer.jpg'
}
];


// Stampare in console le informazioni di nome, ruolo e la stringa della foto
// console.log(teamMembers);

// Stampare le stesse informazioni su DOM sottoforma di stringhe
for(let i = 0; i < teamMembers.length; i++){
    const member = teamMembers[i];
    
    // Organizzare i singoli membri in card/schede
    // Trasformare la stringa foto in una immagine effettiva
    const membersMarkup = 
    `<div class="col-4 g-4 text-center">
    <img src="${member.image}">
    <h4 class="mt-3">${member.name}</h4>
    <p>${member.role}</p>
    </div>`;
    
    document.querySelector('.row').insertAdjacentHTML('beforeend', membersMarkup);

    // Stampare in console le informazioni di nome, ruolo e la stringa della foto
    for (const key in member) {
        const thisMember = member[key];
        // console.log(thisMember);
        console.log(key + ':' + thisMember);
    }
}


