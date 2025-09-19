function createRecipe(){

    const title = document.getElementById('titel').value;
    const ingredients = document.getElementById('zutaten').value;
    const instructions = document.getElementById('zubereitung').value;

    const newDiv = document.createElement('div');
    newDiv.className = 'recipe'; 


    newDiv.innerHTML = `
        <h3>${title}</h3>
        <p>Zutaten: ${ingredients}</p> 
        <p>Zubereitung:${instructions}</p>
    `;

    // Button-Animation starten und beenden
    var button = document.getElementById('create')
    button.classList.add('createRecipe');
    setTimeout(() => {
        button.classList.remove('createRecipe');
    }, 200); // Dauer der Animation (200ms)

    
    setTimeout(() => {
        alert('Das Rezept wurde erfolgreich erstellt!');
        window.location.href = '../Homepage.html'; // Zur Homepage weiterleiten
    }, 500); // 500ms Verzögerung, um die Animation sichtbar zu machen
}