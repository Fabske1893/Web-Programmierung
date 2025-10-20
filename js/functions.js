function createRecipe(){

    
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
    
    alert('Alle Rezepte wurden gelöscht!');
    window.location.href= '../Homepage.html'; // Zur Homepage weiterleiten
    
}

function showRecipes(){

    
}