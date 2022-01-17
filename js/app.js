let textHead = document.querySelector('.card-title');
let textContent = document.querySelector('.card-text');
let affiche = document.querySelector('.affiche');
let afficherLaListe = document.querySelector('.afficherLaListe');
let categories = document.querySelector('.categories');
let categorie = document.querySelector('.categorie');
let img = document.querySelector('img');

console.log(affiche);


function afficheBlague(){
    fetch("https://api.blablagues.net/?rub=blagues")
    .then((reponse) => reponse.json())
    .then((data) =>{
    console.log(data.data);
    // console.log(data.data.content);
    let dataElement = data.data.content;
    img.src = data.data.thumbnail;
    textHead.innerHTML = `${dataElement.text_head}`;
    textContent.innerHTML = `${dataElement.text || dataElement.text_head}`;
})
}
afficheBlague();


// Fonction affiche categorie
function getList(){
    fetch("https://api.blablagues.net/?list_cat")
    .then((res) => res.json())
    .then(data =>  {
        // console.log(data);
        // console.log(data.blagues);
        let dataE = data.blagues;
        console.log(data);
        for (let cat in dataE) {
            const element = dataE[cat];
            console.log(element.categorie);
            // img.src = data.data.thumbnail;
            categories.innerHTML += `
            <button type="button" class="list-group-item list-group-item-action">${element.categorie}</button>
            `;

            
        }
        // afficherLaListe.innerHTML = ;
    })
}



// Liste des categories
categorie.addEventListener('click', () =>{
    console.log("Bonjour");
    textHead.innerHTML = ``;
    textContent.innerHTML = ``;
    getList();
})