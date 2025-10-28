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

function searchRecipe(){
    const input = document.getElementById("searchRecipe").value.toLowerCase();
    const list = document.getElementById("recipeList");
    const items = list.getElementsByTagName('li');

    // Durchlaufe alle Listenelemente und blende diejenigen ein, derrn Titel den Suchbegriff enthalten
    for (let item of items) {
        const title = item.getElementsByTagName('h3')[0];
        if(!title){
            item.style.display = "none";
         continue; 
        }
        titleText = title.textContent.toLowerCase();
        if (titleText.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }

}