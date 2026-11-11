const products = [
    {
        img: 'https://placehold.co/600x400',
        name: 'Sneaker Run',
        description: 'Scarpe leggera per la corsa, suola in gomma traspirante.',
        price: 89
    },
    {
        img: 'https://placehold.co/600x400',
        name: 'T-shirt basic',
        description: 'Cotone biologico, taglio regolare, disponibile in 5 colori.',
        price: 89
    },
    {
        img: 'https://placehold.co/600x400',
        name: 'Borsa city',
        description: 'Tessuto resistente, tasca interna, cinghia regolabile',
        price: 89
    },
    {
        img: 'https://placehold.co/600x400',
        name: 'Sneaker Run',
        description: 'Scarpe da corsa',
        price: 89
    }
];

// Elementi della modale
const modal = document.querySelector("#productModal");
const modalTitle = modal.querySelector("#modalTitle");
const modalImg = modal.querySelector("#modalImg");
const modalDesc = modal.querySelector("#modalDesc");
const modalPrice = modal.querySelector("#modalPrice");
const changeTeme = document.getElementById('toggle-tema')

// Formatta il prezzo con sempre 2 decimali
function formatPrice(n) {
    return "€ " + n.toFixed(2).replace(".", ","); // toFixed per inserire 2 numeri decimali
}

const row = document.querySelector("#productRow");

// Creazione delle card
products.forEach((p, index) => {
    const col = document.createElement("article"); // creazione articolo
    col.classList.add("col-12", "col-sm-6", "col-xl-4", "col-xxl-3", "mb-3");

    const card = document.createElement("div"); // creazione div che contiene tutto
    card.classList.add("card", "h-100", "shadow-sm");

    const img = document.createElement("img"); // inserimento img
    img.classList.add("card-img-top");
    img.src = p.img;
    img.alt = p.name;

    //div che contiene tutte le informazioni del prodotto e li gestisce così metto il button in fondo
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex", "flex-column");

    const title = document.createElement("h3"); // nome del prodotto
    title.classList.add("card-title", "fs-6", "fw-bold");
    title.textContent = p.name;

    const desc = document.createElement("p"); //inserimento della descrizione preso dall'array
    desc.classList.add("card-text", "small", "text-muted");
    desc.textContent = p.description;

    const price = document.createElement("p");
    price.classList.add("fw-bold", "fs-5");
    price.textContent = formatPrice(p.price); // Scrive dentro il paragrafo il prezzo del prodotto formattato

    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary", "mt-auto");//spinge il bottone in fondo per flex-column dato prima
    btn.type = "button";
    btn.textContent = "Dettagli";
    btn.setAttribute("data-bs-toggle", "modal"); // Bootstrap apre la modale da solo
    btn.setAttribute("data-bs-target", "#productModal"); // serve per far capire a bootstrap quale modale aprire

    // Al click, riempie la modale con il prodotto di questo giro del ciclo
    btn.addEventListener("click", () => {
        modalTitle.textContent = p.name; // titolo della modale
        modalImg.src = p.img; // immagine della modale
        modalImg.alt = p.name; // testo alternativo dell'immagine
        modalDesc.textContent = p.description; // descrizione
        modalPrice.textContent = formatPrice(p.price); // prezzo formattato
    });

    cardBody.append(title, desc, price, btn);
    card.append(img, cardBody);
    col.append(card);
    row.append(col);
});

// alterna la classe 'dark-mode' sul body
changeTeme.addEventListener('click', function () {
    // alterna la classe 'dark-mode' sul body
    document.body.classList.toggle('dark-mode');

    // cambia il testo e l'icona dentro il bottone
    if (document.body.classList.contains('dark-mode')) {
        changeTeme.innerHTML = 'Tema chiaro <i class="fas fa-sun"></i>';
    } else {
        changeTeme.innerHTML = 'Tema scuro <i class="fas fa-moon"></i>';
    }
});
