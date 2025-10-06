const prenotaBtn = document.getElementsByClassName("prenotaBtn");
const modalPrenotamento = new bootstrap.Modal("#modalPrenotamento");
const alertPrenotamento = document.getElementById("alertAccesso");

for (let i = 0; i < prenotaBtn.length; i++) {
    prenotaBtn[i].addEventListener("click", function() {
        controlloAccesso("false");  //Temporaneamento per test
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