window.onload = function() {
    alert("Bienvenue sur mon site !");
};
function direBonjour() {
    let nom = document.getElementById("nom").value;
    if (nom) {
        alert("Bonjour " + nom + " !");
    } else {
        alert("Bonjour !");
    }
}
