// Fonction utilitaire pour créer un élément HTML avec des attributs
function createElement(tag, attributes = {}) {
    console.log(`Création d'un élément ${tag}`);
    const element = document.createElement(tag);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
        console.log(`  Attribut ajouté : ${key} = ${attributes[key]}`);
    }
    console.log(`Élément ${tag} créé avec succès`);
    return element;
}

// Fonction pour créer le formulaire d'inscription
function createForm() {
    console.log("Début de la création du formulaire");
    const form = createElement('form', { id: 'form' });
    const formGroup = createElement('div', { class: 'form-group' });

    // Définition des champs du formulaire
    const fields = [
        { label: 'Nom:', id: 'lastname', type: 'text', placeholder: 'Entrer votre nom' },
        { label: 'Prénom:', id: 'firstname', type: 'text', placeholder: 'Entrer votre prénom' },
        { label: 'Age:', id: 'age', type: 'number', placeholder: 'Entrer votre âge' },
        { label: 'Année de naissance:', id: 'year', type: 'number', placeholder: 'Entrer l\'année' },
        { label: 'N° de dossard:', id: 'number', type: 'text', placeholder: 'Entrer votre dossard' },
        { label: 'Mail:', id: 'mail', type: 'email', placeholder: 'Entrer votre adresse mail' }
    ];

    // Création de chaque champ du formulaire
    fields.forEach(field => {
        console.log(`Création du champ : ${field.label}`);
        const inputContainer = createElement('div', { class: 'input-container' });
        const label = createElement('label', { for: field.id });
        label.textContent = field.label;
        console.log(`  Label créé : ${field.label}`);
        const input = createElement('input', {
            required: '',
            type: field.type,
            id: field.id,
            name: field.id,
            placeholder: field.placeholder
        });
        console.log(`  Input créé : ${field.id}`);
        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
        formGroup.appendChild(inputContainer);
        console.log(`Champ ${field.label} ajouté au formulaire`);
    });

    // Création du bouton de soumission
    console.log("Création du bouton de soumission");
    const buttonDiv = createElement('div', { class: 'button' });
    const submitButton = createElement('input', {
        type: 'submit',
        name: 'btn_validation',
        value: 'Valider'
    });
    buttonDiv.appendChild(submitButton);
    console.log("Bouton de soumission ajouté");

    form.appendChild(formGroup);
    form.appendChild(buttonDiv);
    console.log("Formulaire créé avec succès");
    return form;
}

// Fonction pour créer le tableau des inscriptions
function createTable() {
    console.log("Début de la création du tableau");
    const table = createElement('table', { id: 'tableau' });
    const thead = createElement('thead');
    const tbody = createElement('tbody');
    const headerRow = createElement('tr');

    // Création des en-têtes du tableau
    ['N° de dossard', 'Nom', 'Prénom', 'Age', 'Année de naissance'].forEach(text => {
        console.log(`Création de l'en-tête : ${text}`);
        const th = createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
        console.log(`En-tête ${text} ajouté`);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    console.log("Tableau créé avec succès");
    return table;
}

// Fonction pour ajouter une nouvelle ligne au tableau
function addTableRow(data) {
    console.log("Début de l'ajout d'une nouvelle ligne au tableau");
    const tbody = document.querySelector('#tableau tbody');
    const newRow = createElement('tr');

    // Création des cellules pour chaque donnée
    ['number', 'lastname', 'firstname', 'age', 'year'].forEach(key => {
        console.log(`Ajout de la cellule pour ${key}: ${data[key]}`);
        const td = createElement('td');
        td.textContent = data[key];
        newRow.appendChild(td);
    });

    tbody.appendChild(newRow);
    console.log("Nouvelle ligne ajoutée avec succès");
}

// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log("Début du traitement de la soumission du formulaire");

    // Récupération des valeurs du formulaire
    const formData = {
        number: document.getElementById('number').value,
        lastname: document.getElementById('lastname').value,
        firstname: document.getElementById('firstname').value,
        age: document.getElementById('age').value,
        year: document.getElementById('year').value
    };

    console.log("Données du formulaire récupérées :", formData);

    // Ajout d'une nouvelle ligne au tableau
    addTableRow(formData);

    // Réinitialisation du formulaire
    document.getElementById('form').reset();
    console.log("Formulaire réinitialisé");
    console.log("Traitement de la soumission terminé");
}

// Fonction principale exécutée lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM chargé, début de l'initialisation de la page");

    const body = document.body;
    console.log("Création de la structure principale");
    const section = createElement('section', { class: 'marathon' });
    const title = createElement('h1', { class: 'title' });
    title.textContent = 'Inscrivez vous au Marathon';
    console.log("Titre de la page créé");

    const inscriptionDiv = createElement('div', { id: 'inscription' });
    const formContainer = createElement('div', { class: 'container form' });
    console.log("Création du formulaire");
    const form = createForm();
    formContainer.appendChild(form);
    inscriptionDiv.appendChild(formContainer);
    console.log("Formulaire ajouté à la page");

    console.log("Création du conteneur du tableau");
    const tableContainer = createElement('div', { class: 'container' });
    tableContainer.appendChild(createTable());
    console.log("Tableau ajouté à la page");

    section.appendChild(title);
    section.appendChild(inscriptionDiv);
    section.appendChild(tableContainer);
    body.appendChild(section);

    console.log("Structure de la page complétée");

    // Ajout de l'écouteur d'événements sur le formulaire
    form.addEventListener('submit', handleSubmit);
    console.log("Écouteur d'événements ajouté au formulaire");

    console.log("Initialisation de la page terminée");
});
