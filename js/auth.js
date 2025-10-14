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

//temporaneo
// const form = document.getElementById("accedi");

// form.addEventListener("click", (event) => {
//     var emailValida = "test@majorana.org";
//     var passwordValida = "test";

//     var email = document.getElementById("EmailLogin").value;
//     var password = document.getElementById("PasswordLogin").value;

//     if(email != emailValida || password != passwordValida)
//         alert("Email o password errati");
//     else
//     {
//         document.getElementsByName("btnAccesso").add("d-none");
//         document.getElementsByName("userName").textContent("Moretti")
//         document.getElementsByName("userName").remove("d-none");
//     }  
// })