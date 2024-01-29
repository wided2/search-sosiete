function valider() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var mdp = document.getElementById("mdp").value;

    if (nom == "" || prenom == "" || email == "" || mdp == "") {
        alert("Veuillez remplir tous les champs");
    } else {
        alert("Formulaire envoyé avec succès");
    }
}

const passwordHide = document.querySelector('.password-container .fa-eye-slash');
const passwordShow = document.querySelector('.password-container .fa-eye')
const passwordInput = document.querySelector('.password-container #mdp');
const passwordFont = document.querySelector('.password-container .fa')


passwordFont.addEventListener('click',function(){
    var visibilityIcon = document.getElementById("visibilityIcon");

    // Toggle between "password" and "text"
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";

    // Change the icon based on the input type
    visibilityIcon.className = (passwordInput.type === "password") ? "fas fa-eye" : "fas fa-eye-slash";

})

  
  

  