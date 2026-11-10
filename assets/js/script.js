const products = [
    {
        img: 'https://placehold.co/600x400',
        name: 'Sneaker Run',
        description: 'Scarpe da corsa',
        price: 89
    },
    {
        img: 'https://placehold.co/600x400',
        name: 'Sneaker Run',
        description: 'Scarpe da corsa',
        price: 89
    },
    {
        img: 'https://placehold.co/600x400',
        name: 'Sneaker Run',
        description: 'Scarpe da corsa',
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

// Formatta il prezzo con sempre 2 decimali
function formatPrice(n) {
  return "€ " + n.toFixed(2).replace(".", ",");//toFixed per inserire 2 numeri decimali
}

const row = document.querySelector("#productRow");

// Creazione delle card
products.forEach((p, index) => {
  const col = document.createElement("article"); //creazione articolo
  col.className = "col-12 col-sm-6 col-xl-4 col-xxl-3 mb-3";

  const card = document.createElement("div"); //creazione div che contiene tutto
  card.className = "card h-100 shadow-sm";

  const img = document.createElement("img"); //inserimento img
  img.className = "card-img-top";
  img.src = p.img;
  img.alt = p.name;

  const cardBody = document.createElement("div"); //div che contiene tutte le informazioni del prodotto
  cardBody.className = "card-body d-flex flex-column";

  const title = document.createElement("h3"); //nome del prodotto
  title.className = "card-title fs-6 fw-bold";
  title.textContent = p.name;

  const desc = document.createElement("p"); //inserimento della descrizione preso dall'array
  desc.className = "card-text small text-muted";
  desc.textContent = p.description;

  const price = document.createElement("p");
  price.className = "fw-bold fs-5";
  price.textContent = formatPrice(p.price);//Scrive dentro il paragrafo il prezzo del prodotto formattato con la funzione scritto all'inizio

  const btn = document.createElement("button");
  btn.className = "btn btn-primary mt-auto";
  btn.type = "button";
  btn.textContent = "Dettagli";
  btn.setAttribute("data-bs-toggle", "modal"); //Bootstrap apre la modale da solo
  btn.setAttribute("data-bs-target", "#productModal");//serve per far capire a bootstrap quale modale aprire grazie all'id="productModal"

  // NUOVO: al click, riempie la modale con il prodotto di questo giro del ciclo
  btn.addEventListener("click", () => {
    modalTitle.textContent = p.name;                  // NUOVO: titolo della modale
    modalImg.src = p.img;                             // NUOVO: immagine della modale
    modalImg.alt = p.name;                            // NUOVO: testo alternativo dell'immagine
    modalDesc.textContent = p.description;            // NUOVO: descrizione
    modalPrice.textContent = formatPrice(p.price);    // NUOVO: prezzo formattato
  });

  cardBody.append(title, desc, price, btn);
  card.append(img, cardBody);
  col.append(card);
  row.append(col);
});