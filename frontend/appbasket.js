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
   tdremove.className = "remove";
   
   // je recupere les données a mettre dans mon tableau
   let objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
   let quantité = parseInt(`${objects.quantité}`, 10);
   let prix = parseInt(`${objects.prix}`, 10);
   let nom = `${objects.nom}`;
   let productId = objects.productId;

   //j'ajoute mes données
   tdname.innerHTML =`${nom}`;
   tdquantity.innerHTML =`${quantité}`;
   tdprice.innerHTML =`${prix}`+" "+"€";
   button.setAttribute("value", productId);
   button.append(icon);
   
//j'ajoute les données
tdremove.append(button);
tr.append(tdname, tdquantity, tdprice, tdremove);
maincontainer.append(tr);

}
//ajout prix total panier
let prixtotal =[];
for(let i = 0; i<localStorage.length; i++){
    const objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const prixvalue = parseInt(`${objects.prix}`, 10);
    prixtotal.push(prixvalue);
 }
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

//j'ajoute une fonctionnalité pour supprimer les élements du panier

let removeButton = document.querySelectorAll(".removebutton");
for(let i = 0; i<removeButton.length; i++){
    
    removeButton[i].addEventListener('click', () => {
    const ids = removeButton[i].getAttribute("value");
    let tr = removeButton[i].parentNode.parentNode;
    tr.remove();
    localStorage.removeItem(ids);
})
}

//je crée une fonction qui sert de validation pour m'assurer que chaque entrée est correcte
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
        errormsg.innerHTML="Veuillez rentrer une ville existante.";
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

    if(validation() === true && localStorage.length!= 0){
        //si la validation est validée, je crée un objet contenant les élements utilisateurs
        //j'ai plus qu'a poster mes trois élements au serveur (objets, tableau et order_id)
            let contact = {
                firstName : document.getElementById('prénom').value,
                lastName : document.getElementById('Nom').value,
                address : document.getElementById('inputAddress').value,
                city : document.getElementById('ville').value,
                email : document.getElementById('Email').value
                };
            localStorage.setItem("contact", JSON.stringify(contact));
            localStorage.setItem("total", total);
            
            //de même, je crée un tableau récupérant les données du localStorage
    }if(validation() == false){
        document.forms[0].reset();
        event.preventDefault();
    }if(localStorage.length == 0){
        event.preventDefault();
        let table = document.querySelector(".table");
        let  errormsg = document.createElement("small");
        errormsg.className=" justify-content-center form-text text-danger";
        errormsg.innerHTML="Votre panier est vide";
        table.insertAdjacentElement('afterend', errormsg);
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








