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

     // Rezeptdaten als Objekt speichern
    const recipe = {
        title: title,
        ingredients: ingredients,
        instructions: instructions,
        image: imageInput,
        likes: 0,
        date: new Date().toISOString(),
        difficulty: difficulty

    };

    // Rezeptdaten im localStorage speichern (funktioniert noch nicht)
    let recipes = JSON.parse(localStorage.getItem('recipes')) || []; // Vorhandene Rezepte abrufen oder leeres Array
    recipes.push(recipe); // Neues Rezept hinzufügen
    localStorage.setItem('recipes', JSON.stringify(recipes)); // Aktualisierte Rezepte speichern

     const newDiv = document.createElement('div');
    newDiv.className = 'recipe';
    newDiv.innerHTML = `
        <h3>${title}</h3>
        <img src="${imageInput}"></img>
        <p>Likes: 0</p>
        <p>Datum: ${new Date().toLocaleDateString()}</p>
        <p>Schwierigkeitsgrad: ${difficulty}</p>
        <button class="like-button" onclick="likeRecipe()">Like</button>
    `;
    

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
function registration(){

    // Button-Animation starten und beenden
    const button2 = document.getElementById('registration')
    // Klasse entfernen, um die Animation neu zu starten
    button2.classList.remove('createRecipe');

    button2.classList.add('createRecipe');
    setTimeout(() => {
        button2.classList.remove('createRecipe');
    }, 200); // Dauer der Animation (200ms)

   setTimeout(() => {
        alert('Sie haben sich erfolgreich registriert!');
        window.location.href = '../login/Login.html'; // Zur Homepage weiterleiten
    }, 500); // 500ms Verzögerung, um die Animation sichtbar zu machen 
}
function likeRecipe(){}

function deleteRecipe(){
    localStorage.removeItem('recipes'); // Alle Rezepte löschen
    alert('Alle Rezepte wurden gelöscht!');
    window.location.href= '../Homepage.html'; // Zur Homepage weiterleiten
    
}
