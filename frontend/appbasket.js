//je recupere les elements du local storage et je les places dans mon div basket
//je recupere le container 
let maincontainer = document.querySelector("#basket");


//je créee les élements de mon tableau produit
for(let i = localStorage.length -1; i>=0; i--){
    //je crée mes élements du tableau
   const tr = document.createElement("tr");
   const tdname = document.createElement("td");
   const tdquantity = document.createElement("td");
   const tdprice = document.createElement("td");
   const tdremove = document.createElement("td");
   const button = document.createElement("button");
   const icon = document.createElement("i");
   icon.className = "bi bi-x";
   button.className = "btn btn-light border removebutton" ;
   tdremove.className = "remove"
   
   
   
   
   

   // je recupere les données a mettre dans mon tableau
   let objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
   let quantité = parseInt(`${objects.quantité}`, 10);
   let prix = parseInt(`${objects.prix}`, 10);
   let nom = `${objects.nom}`;
   let id = objects.id;

   //j'ajoute mes données
   tdname.innerHTML =`${nom}`;
   tdquantity.innerHTML =`${quantité}`;
   tdprice.innerHTML =`${prix}`+" "+"€";
   button.setAttribute("value", id);
   button.append(icon);
   
   
//j'ajoute les données
tdremove.append(button);
tr.append(tdname, tdquantity, tdprice, tdremove);
maincontainer.append(tr);


}

//j'ajoute une fonctionnalité pour supprimer tout le panier ou seulement un par un 
document.querySelector("#emptybasket").addEventListener('click', function(){

    localStorage.clear();
    let tbody = document.querySelector("tbody")
    let alltr = document.querySelector("tbody tr");
    for (alltr in tbody){
    let alltr = document.querySelector("tbody tr");
    alltr.remove();
    }

})
let removeButton = document.querySelectorAll(".removebutton");
for(let i = 0; i<removeButton.length; i++){
    
    removeButton[i].addEventListener('click', () => {
    const ids = removeButton[i].getAttribute("value");
    let tr = removeButton[i].parentNode.parentNode;
    tr.remove();
    localStorage.removeItem(ids);
})
}

//je crée une fonction qui sert de validation pour m'assurer que chaque rentrée est correcte
function validation(){
    
    let regPrenom = /[^A-Za-zÀ-ȕ-]/g.test(document.querySelector('#prénom').value);
    let regNom = /[^A-Za-zÀ-ȕ-]/g.test(document.querySelector('#Nom').value);
    let regAddress= /[^A-Za-zÀ-ȕ0-9-'\s]/g.test(document.querySelector('#inputAddress').value);
    let regVille=  /[^A-Za-zÀ-ȕ0-9-\s]/g.test(document.querySelector('#ville').value);
    let regEmail = !(/^.+@.+\..+$/.test(document.querySelector('#Email').value));
   
    if(regPrenom){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="Ce champ ne doit pas contenir de caractères spéciaux.";
        document.querySelector('#prénom').className="form-control border-danger text-danger";
        document.querySelector('#prénom').insertAdjacentElement('afterend', errormsg);
    }
    if(regNom){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="Ce champ ne doit pas contenir de caractères spéciaux.";
        document.querySelector('#Nom').className="form-control border-danger text-danger";
        document.querySelector('#Nom').insertAdjacentElement('afterend', errormsg);
    }
    if(regAddress){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="Veuillez rentrer une adresse valide.";
        document.querySelector('#inputAddress').className="form-control border-danger text-danger";
        document.querySelector('#inputAddress').insertAdjacentElement('afterend', errormsg);
    }
    if(regVille){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="Veuillez rentrer votre ville et le code postal.";
        document.querySelector('#ville').className="form-control border-danger text-danger";
        document.querySelector('#ville').insertAdjacentElement('afterend', errormsg);
    }
    if(regEmail){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="L'adresse Email doit avoir un format valide 'Nom@exemple.com'.";
        document.querySelector('#Email').className="form-control border-danger text-danger";
        document.querySelector('#Email').insertAdjacentElement('afterend', errormsg);
    }
     return !(regPrenom||regVille||regAddress||regEmail||regNom);
}











//j'ajoute les fonctionnalité quand on appuie sur le bouton commander(validation + envoie des données sous forme de tableau et objets+
//+envoie sur la page confirmation de la commande)
document.querySelector(".submitbutton").addEventListener("click", function(event){
    if(validation() === true){
        return true
    }else{
        
        event.preventDefault();
    }
})




//ma fonction compteur panier présente sur toutes les pages pour pouvoir toujours savoir combien d'élement sont dans le panier
const panierselect = document.querySelector('.Panier');
        const compteurpanier = document.createElement('div');
        compteurpanier.className = 'justify-content-center';
        panierselect.append(compteurpanier);
function compteurPanier(){
    let quantités = [];
    for(let i = 0; i<localStorage.length; i++){
       const objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
       const value = parseInt(`${objects.quantité}`, 10);
       quantités.push(value);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const quantitétotal = quantités.reduce(reducer, 0);
    compteurpanier.innerHTML = `${quantitétotal}` + " "+ "articles";
    }
    compteurPanier();








