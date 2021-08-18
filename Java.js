// les mots alèatoire
 var randword = ["BECODE", "EMPATHIE", "UTILISATEUR",
"GRILLE", "COLONNE", "BALISE", "VALIDE", "ALIGNEMENT",
"TABLEAU", "CODE"];
var valeur = 0;
console.log("> "+randword.length+" mots disponibles.");
// InputEvent (TextEvent)
function test(){
    valeur =+1;
    console.log(valeur)
document.getElementById('bouton').addEventListener('click', test)
}