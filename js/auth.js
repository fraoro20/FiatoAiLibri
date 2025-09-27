// Aggiunge event listener al bottone login
document.getElementById('loginBtn').addEventListener('click', function () {
    showForm('login');
});

// Aggiunge event listener al bottone registrati
document.getElementById('registerBtn').addEventListener('click', function () {
    showForm('register');
});

// Funzione per mostrare il form corretto
function showForm(formType) {
    // Rimuovi classe active da tutti i bottoni e form
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));

    // Aggiungi classe active al bottone e form corretti
    if (formType === 'login') {
        document.getElementById('loginBtn').classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        document.getElementById('registerBtn').classList.add('active');
        document.getElementById('registerForm').classList.add('active');
    }
}