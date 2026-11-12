const products = [
    {
        id: 0,
        img: 'https://placehold.co/600x400',
        name: 'Sneaker Air Run',
        description: 'Scarpe leggere per la corsa, suola in gomma traspirante e ammortizzata.',
        price: 89,
        category: 'scarpe'
    },
    {
        id: 1,
        img: 'https://placehold.co/600x400',
        name: 'T-shirt Organic Basic',
        description: 'Cotone biologico al 100%, taglio regolare, disponibile in varie colorazioni.',
        price: 29,
        category: 'abbigliamento'
    },
    {
        id: 2,
        img: 'https://placehold.co/600x400',
        name: 'Zaino Urban City',
        description: 'Tessuto impermeabile e resistente, tasca interna per laptop e cinghia regolabile.',
        price: 59,
        category: 'accessori'
    },
    {
        id: 3,
        img: 'https://placehold.co/600x400',
        name: 'Felpa con Cappuccio Hoodie',
        description: 'Felpa invernale in felpa di cotone felpato, comoda e calda con tasca frontale a marsupio.',
        price: 65,
        category: 'abbigliamento'
    },
    {
        id: 4,
        img: 'https://placehold.co/600x400',
        name: 'Scarponcini Trekking Trail',
        description: 'Scarpe robuste per escursioni in montagna, suola scolpita ad alto grip e membrana impermeabile.',
        price: 129,
        category: 'scarpe'
    },
    {
        id: 5,
        img: 'https://placehold.co/600x400',
        name: 'Occhiali da Sole Vintage',
        description: 'Montatura in acetato con lenti polarizzate e protezione UV totale.',
        price: 45,
        category: 'accessori'
    },
    {
        id: 6,
        img: 'https://placehold.co/600x400',
        name: 'Giacca Windbreaker',
        description: 'Giacca antivento leggera ideale per le mezze stagioni, richiudibile nella sua tasca.',
        price: 79,
        category: 'abbigliamento'
    },
    {
        id: 7,
        img: 'https://placehold.co/600x400',
        name: 'Cintura in Pelle Classica',
        description: 'Pelle genuina con fibbia in metallo spazzolato, elegante e resistente nel tempo.',
        price: 35,
        category: 'accessori'
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
function renderProdotti(lista) {
    row.innerHTML = '';

    lista.forEach((p) => {
        const col = document.createElement("article"); // creazione articolo
        col.classList.add("col-12", "col-sm-6", "col-xl-4", "col-xxl-3", "mb-3");

        const card = document.createElement("div"); // creazione div che contiene tutto
        card.classList.add("card", "h-100", "shadow-sm");

        card.classList.add("card-" + p.category);

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
}
renderProdotti(products);

const filtri = document.getElementById("filtri");

filtri.addEventListener("click", function (event) {

    const bottone = event.target.closest("[data-categoria]");
    if (!bottone) return;//se non clicco sul bottone ma in mezzo(prima mi eliminava tutte le card e ora funziona)

    //toglie active ai bottoni e lo da a quello cliccato
    filtri.querySelectorAll(".btn").forEach(b => b.classList.remove("active"));
    bottone.classList.add("active");

    //legge la categoria nel bottone
    const categoria = bottone.dataset.categoria;

    //tutti usa l'array altrimenti filtra
    const filtrati = categoria === "tutti" ? products : products.filter(p => p.category === categoria);

    // card filtrate
    renderProdotti(filtrati);
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
