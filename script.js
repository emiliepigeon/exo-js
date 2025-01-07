// Fonction utilitaire pour créer un élément HTML avec des attributs
function createElement(tag, attributes = {}) {
    // 'tag' est le type d'élément HTML à créer (ex: 'div', 'p', 'input')
    // 'attributes' est un objet contenant les attributs à ajouter à l'élément
    console.log(`Création d'un élément ${tag}`);
    
    // document.createElement crée un nouvel élément HTML
    const element = document.createElement(tag);
    
    // Boucle à travers chaque attribut dans l'objet 'attributes'
    for (const key in attributes) {
        // 'key' est le nom de l'attribut (ex: 'class', 'id')
        // attributes[key] est la valeur de l'attribut
        
        // setAttribute ajoute ou met à jour un attribut sur l'élément
        element.setAttribute(key, attributes[key]);
        console.log(`  Attribut ajouté : ${key} = ${attributes[key]}`);
    }
    
    console.log(`Élément ${tag} créé avec succès`);
    return element; // Retourne l'élément créé
}

// Fonction pour créer le formulaire d'inscription
function createForm() {
    console.log("Début de la création du formulaire");
    
    // Crée l'élément <form> avec l'ID 'form'
    const form = createElement('form', { id: 'form' });
    
    // Crée un conteneur <div> pour grouper les champs du formulaire
    const formGroup = createElement('div', { class: 'form-group' });

    // Définition des champs du formulaire dans un tableau d'objets
    // Chaque objet représente un champ avec ses propriétés
    const fields = [
        { label: 'Nom:', id: 'lastname', type: 'text', placeholder: 'Entrer votre nom' },
        { label: 'Prénom:', id: 'firstname', type: 'text', placeholder: 'Entrer votre prénom' },
        { label: 'Age:', id: 'age', type: 'number', placeholder: 'Entrer votre âge' },
        { label: 'Année de naissance:', id: 'year', type: 'number', placeholder: 'Entrer l\'année' },
        { label: 'N° de dossard:', id: 'number', type: 'text', placeholder: 'Entrer votre dossard' },
        { label: 'Mail:', id: 'mail', type: 'email', placeholder: 'Entrer votre adresse mail' }
    ];

    // Création de chaque champ du formulaire
    // forEach parcourt chaque élément du tableau 'fields'
    fields.forEach(field => {
        console.log(`Création du champ : ${field.label}`);
        
        // Crée un conteneur pour chaque paire label/input
        const inputContainer = createElement('div', { class: 'input-container' });
        
        // Crée un label pour le champ
        const label = createElement('label', { for: field.id });
        label.textContent = field.label; // Définit le texte du label
        console.log(`  Label créé : ${field.label}`);
        
        // Crée l'input avec les attributs spécifiés
        const input = createElement('input', {
            required: '', // Champ obligatoire
            type: field.type, // Type de l'input (text, number, email, etc.)
            id: field.id, // ID unique pour l'input
            name: field.id, // Nom de l'input (utilisé lors de la soumission du formulaire)
            placeholder: field.placeholder // Texte d'exemple dans l'input
        });
        console.log(`  Input créé : ${field.id}`);
        
        // Ajoute le label et l'input au conteneur
        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
        
        // Ajoute le conteneur au groupe de formulaire
        formGroup.appendChild(inputContainer);
        console.log(`Champ ${field.label} ajouté au formulaire`);
    });

    // Création du bouton de soumission
    console.log("Création du bouton de soumission");
    const buttonDiv = createElement('div', { class: 'button' });
    const submitButton = createElement('input', {
        type: 'submit', // Bouton de type submit pour envoyer le formulaire
        name: 'btn_validation',
        value: 'Valider' // Texte affiché sur le bouton
    });
    buttonDiv.appendChild(submitButton);
    console.log("Bouton de soumission ajouté");

    // Assemblage final du formulaire
    form.appendChild(formGroup);
    form.appendChild(buttonDiv);
    console.log("Formulaire créé avec succès");
    return form; // Retourne le formulaire complet
}

// Fonction pour créer le tableau des inscriptions
function createTable() {
    console.log("Début de la création du tableau");
    // Crée l'élément <table> avec l'ID 'tableau'
    const table = createElement('table', { id: 'tableau' });
    // Crée les éléments <thead> et <tbody> pour la structure du tableau
    const thead = createElement('thead');
    const tbody = createElement('tbody');
    // Crée la première ligne du tableau pour les en-têtes
    const headerRow = createElement('tr');

    // Création des en-têtes du tableau
    ['N° de dossard', 'Nom', 'Prénom', 'Age', 'Année de naissance'].forEach(text => {
        console.log(`Création de l'en-tête : ${text}`);
        const th = createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
        console.log(`En-tête ${text} ajouté`);
    });

    // Assemblage du tableau
    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    console.log("Tableau créé avec succès");
    return table;
}

// Fonction pour ajouter une nouvelle ligne au tableau
function addTableRow(data) {
    console.log("Début de l'ajout d'une nouvelle ligne au tableau");
    // Sélectionne le corps du tableau
    const tbody = document.querySelector('#tableau tbody');
    // Crée une nouvelle ligne
    const newRow = createElement('tr');

    // Création des cellules pour chaque donnée
    // forEach parcourt chaque clé du tableau de données
    ['number', 'lastname', 'firstname', 'age', 'year'].forEach(key => {
        console.log(`Ajout de la cellule pour ${key}: ${data[key]}`);
        const td = createElement('td');
        // Ajoute la valeur correspondante dans la cellule
        td.textContent = data[key];
        // Ajoute la cellule à la ligne
        newRow.appendChild(td);
    });

    // Ajoute la nouvelle ligne au corps du tableau
    tbody.appendChild(newRow);
    console.log("Nouvelle ligne ajoutée avec succès");
}

// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    // Empêche le comportement par défaut du formulaire (rechargement de la page)
    event.preventDefault();
    console.log("Début du traitement de la soumission du formulaire");

    // Récupération des valeurs du formulaire
    // Crée un objet avec les valeurs saisies dans le formulaire
    const formData = {
        number: document.getElementById('number').value,
        lastname: document.getElementById('lastname').value,
        firstname: document.getElementById('firstname').value,
        age: document.getElementById('age').value,
        year: document.getElementById('year').value
    };

    console.log("Données du formulaire récupérées :", formData);

    // Ajout d'une nouvelle ligne au tableau avec les données récupérées
    addTableRow(formData);

    // Réinitialisation du formulaire (efface tous les champs)
    document.getElementById('form').reset();
    console.log("Formulaire réinitialisé");
    console.log("Traitement de la soumission terminé");
}

// Fonction principale exécutée lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    // Cette fonction s'exécute une fois que tout le HTML est chargé et analysé
    console.log("DOM chargé, début de l'initialisation de la page");

    const body = document.body; // Référence à l'élément <body> de la page
    console.log("Création de la structure principale");
    
    // Crée la section principale de la page
    const section = createElement('section', { class: 'marathon' });
    
    // Crée le titre de la page
    const title = createElement('h1', { class: 'title' });
    title.textContent = 'Inscrivez vous au Marathon';
    console.log("Titre de la page créé");

    // Crée les conteneurs pour le formulaire
    const inscriptionDiv = createElement('div', { id: 'inscription' });
    const formContainer = createElement('div', { class: 'container form' });
    console.log("Création du formulaire");
    const form = createForm(); // Appelle la fonction pour créer le formulaire
    formContainer.appendChild(form);
    inscriptionDiv.appendChild(formContainer);
    console.log("Formulaire ajouté à la page");

    // Crée le conteneur pour le tableau
    console.log("Création du conteneur du tableau");
    const tableContainer = createElement('div', { class: 'container' });
    tableContainer.appendChild(createTable()); // Appelle la fonction pour créer le tableau
    console.log("Tableau ajouté à la page");

    // Assemble tous les éléments dans la section principale
    section.appendChild(title);
    section.appendChild(inscriptionDiv);
    section.appendChild(tableContainer);
    body.appendChild(section); // Ajoute la section au body de la page

    console.log("Structure de la page complétée");

    // Ajout de l'écouteur d'événements sur le formulaire
    // Quand le formulaire est soumis, la fonction handleSubmit est appelée
    form.addEventListener('submit', handleSubmit);
    console.log("Écouteur d'événements ajouté au formulaire");

    console.log("Initialisation de la page terminée");
});
