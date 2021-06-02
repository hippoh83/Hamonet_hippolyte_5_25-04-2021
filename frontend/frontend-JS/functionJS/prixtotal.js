let prixtotal =[];
//Cette fonction suit exactement le même principe que la fonction compteurpanier
//je crée un tableau vide contenant les prix totaux de chaque produits avec leurs quantité ajoutés au localStorage
for(let i = 0; i<localStorage.length; i++){
    const objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const prixvalue = parseInt(`${objects.prix}`, 10);
    prixtotal.push(prixvalue);
 }
 //j'utilise la méthode reducer pour additionner les élements du tableau entre eux, puis j'ajoute les élements à mon affichage panier. 
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const total = prixtotal.reduce(reducer, 0);
let affichageprix = document.createElement("tr");
affichageprix.className="border";
let tdprixt = document.createElement("td");
tdprixt.className="text-center font-weight-bold";
tdprixt.setAttribute("colspan", "4");
tdprixt.innerHTML=`Prix total : ${total} €`;
affichageprix.append(tdprixt)
maincontainer.insertAdjacentElement('beforeend', affichageprix);    

