// Aggiunge event listener al bottone Accedi
document.getElementById('loginBtn').addEventListener('click', function () {
    showForm('login');
});

// Aggiunge event listener al bottone Registrati
document.getElementById('registerBtn').addEventListener('click', function () {
    showForm('register');
});

// Funzione per mostrare il form corretto
function showForm(formType) {
    // Aggiungi classe active al bottone e form corretti
    if (formType === 'login') {
        document.getElementById('loginBtn').classList.add('activeBtn');
        document.getElementById('registerBtn').classList.remove("activeBtn");

        document.getElementById('loginForm').classList.remove('noActiveForm');
        document.getElementById('registerForm').classList.add("noActiveForm");
    } else {
        document.getElementById('registerBtn').classList.add('activeBtn');
        document.getElementById('loginBtn').classList.remove("activeBtn");

        document.getElementById('registerForm').classList.remove('noActiveForm');
        document.getElementById('loginForm').classList.add("noActiveForm");
    }
}