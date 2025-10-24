// Diese Funktion wird ausgeführt, sobald die Homepage.html komplett geladen ist.
document.addEventListener('DOMContentLoaded', function() {
    // Überprüfe, ob wir auf der Homepage sind, bevor die Rezepte geladen werden
    if (document.getElementById('recipeContainer')) {
        loadAndDisplayRecipes();
    }
});

/**
 * Holt die Rezeptdaten vom Backend und zeigt sie auf der Seite an.
 */
function loadAndDisplayRecipes() {
    // Die URL deines laufenden Backend-Servers
    const backendUrl = 'http://localhost:8080/api/recipes';

    const container = document.getElementById('recipeContainer');

    fetch(backendUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerk-Antwort war nicht in Ordnung. Status: ' + response.status);
            }
            return response.json(); // Wandelt die Antwort in JSON um
        })
        .then(recipes => {
            container.innerHTML = ''; // Alten Inhalt leeren

            if (!recipes || recipes.length === 0) {
                container.innerHTML = '<p>Keine Rezepte gefunden.</p>';
                return;
            }

            // Für jedes Rezept-Objekt, das vom Backend kommt...
            recipes.forEach(recipe => {
                // ...erstellen wir eine HTML-Karte und fügen sie ein.
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe'; // Nutzt dein CSS aus style.css

                // Hier bauen wir das HTML für die Rezeptkarte zusammen
                recipeCard.innerHTML = `
                    <img src="images/${recipe.pictureUrl}" alt="Bild von ${recipe.name}" style="width:100%;">
                    <h3>${recipe.name}</h3>
                    <p><strong>Kategorie:</strong> ${recipe.category}</p>
                    <p><strong>Schwierigkeit:</strong> ${recipe.difficultyLevel}</p>
                `;

                container.appendChild(recipeCard);
            });
        })
        .catch(error => {
            console.error('Fehler beim Laden der Rezepte:', error);
            container.innerHTML = '<p style="color: red;">Fehler: Rezepte konnten nicht geladen werden. Läuft das Backend?</p>';
        });
}

// Du kannst deine anderen Funktionen hier lassen
function goToAccount() {
    window.location.href = './login/Account.html';
}