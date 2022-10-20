// Creare l’array di oggetti con le informazioni fornite

const teamMembers = [
{
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
},
{
    name: 'Angela', 
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
},
{
    name: 'Walter gordon',
    role: 'Chief Editor',
    image: 'walter-gordon-office-manager.jpg'
},
{
    name: 'Walter gordon',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
},
{
    name: 'Barbara Ramos',
    role: 'Grafic designer',
    image: 'barbara-ramos-graphic-designer.jpg'
}
];

// Stampare su console le informazioni di nome, ruolo e la stringa della foto
console.log(teamMembers);

// Stampare le stesse informazioni su DOM sottoforma di stringhe
for(let i = 0; i < teamMembers.length; i++){
    const member = teamMembers[i];
    console.log(member);

    console.log(member.name);
    console.log(member.role);
    console.log(member.image);

    const membersMarkup = 
    `<div class="col-4 g-4">
        <h4>${member.name}</h4>
        <p>${member.role}</p>
        <span>${member.image}</span>
    </div>`;

    document.querySelector('.row').insertAdjacentHTML('beforeend', membersMarkup);
}


