const prenotaBtn = document.getElementsByClassName("prenotaBtn");
const modalPrenotamento = new bootstrap.Modal("#modalPrenotamento");
const alertPrenotamento = document.getElementById("alertAccesso");

for (let i = 0; i < prenotaBtn.length; i++) {
    prenotaBtn[i].addEventListener("click", function() {
        controlloAccesso("true");  //Temporaneamento per test
    });
}

function controlloAccesso(isRegistrato) {
    if(isRegistrato == "false") {
        alertPrenotamento.classList.remove("d-none");

        //Nascondi automaticamente l'alert dopo 5 secondi
        setTimeout(() => {
            alertPrenotamento.classList.add("d-none");
        }, 5000);
    }
    else {
        modalPrenotamento.show();
    }
}

//Aggiunta utente form di prenotazione
const aggiungiUtenteBtn = document.getElementById('aggiungiUtenteBtn');
const nomeInput = document.getElementById('nomePrenotazione');
const cognomeInput = document.getElementById('cognomePrenotazione');
const listePrenotazione = document.querySelectorAll('.listaPrenotazione');

let contatoreUtenti = 0;

aggiungiUtenteBtn.addEventListener('click', function() {
    const nome = nomeInput.value.trim();
    const cognome = cognomeInput.value.trim();
    
    // Validazione input
    if (nome === '' || cognome === '') {
        alert('Per favore, inserisci sia il nome che il cognome.');
        return;
    }
    
    // Crea il nuovo elemento lista
    const nuovoUtente = document.createElement('li');
    nuovoUtente.className = 'list-group-item d-flex justify-content-between align-items-center';
    nuovoUtente.innerHTML = `
        <input type="text" name="name" disabled value="${nome} ${cognome}" class="border-0 bg-transparent" style="width: 80%;">
        <span class="badge text-bg-danger rounded-pill" onclick="rimuoviUtente(this)"><i class="bi bi-trash"></i></span>
    `;
    
    // Determina in quale colonna aggiungere (alternando tra le due)
    const colonnaTarget = contatoreUtenti % 2;
    listePrenotazione[colonnaTarget].appendChild(nuovoUtente);
    
    // Incrementa il contatore
    contatoreUtenti++;
    
    // Pulisci i campi input
    nomeInput.value = '';
    cognomeInput.value = '';
    
    // Aggiorna il contatore dei posti disponibili
    aggiornaPostiDisponibili();
});

// Funzione per rimuovere un utente
function rimuoviUtente(elemento) {
    elemento.closest('li').remove();
    contatoreUtenti--;
    aggiornaPostiDisponibili();
}

// Funzione per aggiornare i posti disponibili
function aggiornaPostiDisponibili() {
    const postiTotali = 100; // Valore iniziale
    const utentiPrenotati = document.querySelectorAll('.listaPrenotazione li').length;
    const postiDisponibili = postiTotali - utentiPrenotati;
    
    const elementoPostiDisponibili = document.querySelector('.text-success');
    elementoPostiDisponibili.textContent = postiDisponibili;
    
    // Cambia colore se i posti sono pochi
    if (postiDisponibili <= 10) {
        elementoPostiDisponibili.className = 'm-0 text-warning';
    } else if (postiDisponibili <= 0) {
        elementoPostiDisponibili.className = 'm-0 text-danger';
    } else {
        elementoPostiDisponibili.className = 'm-0 text-success';
    }
}
