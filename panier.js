let prix = alert(prompt("saisir le prix de l'article :"));
let quantite = alert(prompt("saisir la quantité de l'article :"));
let total = prix * quantite;
const remise = 0.1; 
    if (prix > 50){
        let totalRemise = total * remise;
        console.log("le total avec remise est : " + totalRemise);}
else
{
    console.log("le total est : " + total);
}
    