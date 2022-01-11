let textHead = document.querySelector('.textHead');
let textContent = document.querySelector('.textContent');
let img = document.querySelector('img');



const affiche = () =>{

    fetch("https://api.blablagues.net/?rub=blagues")
    .then((reponse) => reponse.json())
    .then((data) => {
        let image = data.data.thumbnail;
        console.log(img);
        console.log("bonjour Pen");
        img.src = image;
        textHead.innerHTML = data.data.content.text_head;
        console.log(data.data.thumbnail);
        if (data.data.content.text){
            textContent.innerHTML = data.data.content.text;
        }else if (data.data.content.text_hidden) {
            textContent.innerHTML = data.data.content.text_hidden;
        }

    })
    
}
affiche();

// Fonction affiche



