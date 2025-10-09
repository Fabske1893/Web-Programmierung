function createRecipe(){

    const title = document.getElementById('titel').value;
    const ingredients = document.getElementById('zutaten').value;
    const instructions = document.getElementById('zubereitung').value;
    const imageInput = document.getElementById('bild').value;
    const difficulty = document.getElementById('difficulty').value;

    console.log(title, ingredients, instructions, imageInput, difficulty);

     if (!title || !ingredients || !instructions || !imageInput || !difficulty) {
        alert('Bitte fülle alle erforderlichen Felder aus.');
        return; // Funktion beenden, wenn Daten fehlen
     }    

    // Button-Animation starten und beenden
    const button = document.getElementById('create')
    // Klasse entfernen, um die Animation neu zu starten
    button.classList.remove('createRecipe');

    button.classList.add('createRecipe');
    setTimeout(() => {
        button.classList.remove('createRecipe');
    }, 200); // Dauer der Animation (200ms)

    
    setTimeout(() => {
        alert('Das Rezept wurde erfolgreich erstellt!');
        window.location.href = '../Homepage.html'; // Zur Homepage weiterleiten
    }, 500); // 500ms Verzögerung, um die Animation sichtbar zu machen
}



function goToAccount(){
    window.location.href = './login/Account.html'; // Zur Account-Seite weiterleiten
}


function likeRecipe(){}

function deleteRecipe(){
    localStorage.removeItem('recipes'); // Alle Rezepte löschen
    alert('Alle Rezepte wurden gelöscht!');
    window.location.href= '../Homepage.html'; // Zur Homepage weiterleiten
    
}
