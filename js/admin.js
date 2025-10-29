
const adminState = {
    recipes: [],           // alle Rezepte vom Server
    selection: new Set(),  // ausgewählte Rezept-IDs
};

async function loadAdminRecipes() {
    const select = document.getElementById('delete');
    const selectedList = document.getElementById('selectedList');
    if (!select) return;
    select.innerHTML = '<option>Lade...</option>';
    try {
        const response = await fetch('https://rezeptappbackend-a9a2cded5f95.herokuapp.com/api/recipes', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        adminState.recipes = Array.isArray(data) ? data : [];
        renderSelectOptions();
        
    } catch (err) {
        console.error(err);
        select.innerHTML = '<option style="color:red">Fehler beim Laden</option>';
        if (selectedList) selectedList.textContent = 'Fehler beim Laden der Rezepte.';
    }
}

function renderSelectOptions() {
    const select = document.getElementById('delete');
    if (!select) return;
    select.innerHTML = '';
    adminState.recipes.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r.id;
        opt.textContent = r.title `"mit id:" ${r.id}`;
        select.appendChild(opt);
    });
}



function addToCollection() {
    const select = document.getElementById('delete');
    if (!select) return;
    const opts = Array.from(select.selectedOptions);
    if (opts.length == 0) return alert('Bitte mindestens ein Rezept auswählen.');
    opts.forEach(o => adminState.selection.add(o.value));
    renderSelectedList();
}

function clearCollection() {
    adminState.selection.clear();
    renderSelectedList();
}

function renderSelectedList() {
    const selectedList = document.getElementById('selectedList');
    if (!selectedList) return;
    
    if (adminState.selection.size === 0) {
        selectedList.textContent = '(keine Auswahl)';
        return;
    }
    
    const selectedRecipes = Array.from(adminState.selection)
        .map(id => adminState.recipes.find(r => String(r.id) === String(id)))
        .filter(r => r !== undefined)
        .map(r => r.title || `Rezept ${r.id}`);
    
    selectedList.textContent = selectedRecipes.join(', ');
}

async function adminDeleteSelected() {
    if (adminState.selection.size === 0) return alert('Keine Rezepte ausgewählt.');
    if (!confirm(`Sollten die ${adminState.selection.size} ausgewählten Rezepte wirklich gelöscht werden?`)) return;
    const ids = Array.from(adminState.selection);
    for (const id of ids) {
        try {
            const response = await fetch(`https://rezeptappbackend-a9a2cded5f95.herokuapp.com/api/recipes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Entferne lokal
            adminState.selection.delete(id);
            adminState.recipes = adminState.recipes.filter(r => String(r.id) !== String(id));
        } catch (err) {
            console.error('Fehler beim Löschen id', id, err);
        }
    }
    renderSelectOptions();
    
}

// Event listener hookup
document.addEventListener('DOMContentLoaded', () => {
    loadAdminRecipes();
});
