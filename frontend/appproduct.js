
//je recupere l'id dans l'url

let params = new URLSearchParams(document.location.search);
let code = params.get('id');


//fetch des bonne svaleurs avec l'ajout de l'id


 function productdata(){
    fetch(`http://localhost:3000/api/teddies/${code}`)
    .then(function(res){
        if(res.ok){
            return res.json()
        }
    })
    .then(function(items){
        product(items);
    })
    .catch(function(err){
        console.log(err);
    })
  
}



    function product(items){
        const mainProduct = document.querySelector("#product");

    //je crée les élements necessaires

        const img = document.createElement("img");
        const card = document.createElement("div");
        const cardBody = document.createElement("div");     
        const header = document.createElement("h5");
        const paragraph = document.createElement("p");
        const price = document.createElement("h5");
        const hr1 = document.createElement('hr');
        const hr2 = document.createElement('hr');
        const span = document.createElement('span');
        const euros = document.createElement('b');
        const panier = document.createElement('button');
        const form = document.createElement('select');
        const ul = document.createElement('ul');
        const containerImg = document.createElement('div');
        const containerbody = document.createElement('div')
        const containerCard = document.createElement('div');
        const containerprice = document.createElement('div');
        const couleur =document.createElement('p')
        const select = document.createElement('option');
        const panierselect = document.querySelector('.Panier');
        const compteurpanier = document.createElement('div');
        compteurpanier.className = 'justify-content-center';
        panierselect.append(compteurpanier);

    
    //..j'ajoute toutes les classes bootstraps


        img.className = 'card-img mx-0 ';
        card.className = 'card mt-3 col-sm-12 px-0 bg-light shadow mt-5';
        cardBody.className = 'card-body text-center mt-4';
        header.className = 'card-title';
        paragraph.className = 'card-text my-3';
        couleur.className = 'card-text text-left mt-4';
        price.className = 'mb-0 mt-2 mx-5';
        span.className = 'text-dark mr-1';
        containerImg.className = 'col-sm-7 mx-0';
        containerbody.className = 'col-sm-5';
        containerCard.className = 'row no-gutters wrap';
        containerprice.className = 'row no-gutters wrap mb-4';
        panier.className = 'btn btn-primary mx-0';
        panier.setAttribute('type', 'button');
        ul.className ='list-group justify-content-center d-flex flex-row flex-wrap ';
        form.className = 'form-control col-sm-3 mx-2';
        form.setAttribute('type', 'select');
        select.setAttribute('selected', '');
    //..puis les bonne valeurs


        img.src = items.imageUrl;
        img.setAttribute('alt', 'image ours');
        couleur.innerHTML = "Choisissez votre couleur :"
        header.innerHTML = items.name;
        euros.innerHTML = '€';    
        paragraph.innerHTML = items.description;
        panier.innerHTML= "ajouter au panier";
        span.innerHTML = ((items.price)/100)+',00' + " ";
        select.innerHTML = "Quantité";
//je crée une boucle qui crée automatiquement les bonnes couleurs


        for(let i = 0; i<items.colors.length; i++){
           const color=items.colors[i];
           const li = document.createElement("li");
           li.className ='list-group-item mx-1 px-5 py-3 mt-2 border col-sm-1';
           li.style.backgroundColor= color;
           ul.append(li);
        }
//une autre boucle pour ajouter un bouton de quantité  
        form.append(select);

        for(let i = 1; i<=10; i++){
           const option = document.createElement('option');
           option.setAttribute('value',`${i}`);
           option.innerHTML =`${i}`;
           form.append(option);
        }


//j'ajoute tous les élements entre eux pour créer la card

        span.append(euros);
        price.append(span);
        containerprice.append(form, price);
        cardBody.append(header, paragraph, hr1, couleur, ul, hr2, containerprice, panier );
        containerbody.append(cardBody);
        containerImg.append(img);
        containerCard.append(containerImg, containerbody);
        card.append(containerCard);
        mainProduct.append(card);   
        


//je crée un addeventlistener qui change le prix en fonction de la quantité selectionnée

window.addEventListener('input',function(event){
   const value = event.target.value;
   const newPrice= span.innerHTML = ((items.price)/100)*value+',00' + " ";
   span.append(euros);
    
    span.append(euros);
    if(value === "Quantité"){
         span.innerHTML = ((items.price)/100)+',00' + " ";
         span.append(euros); 
    }
    
    
    document.querySelector('.btn').addEventListener('click', function(){
//je crée un objet vide et j'ajoute quand on clique un objet qui contiens les produits (nom quantité, prix)
//test avec console.log() pour voir si mon objet fonctionne correctement
//ensuite j'ajoute dans mon local storage en déclarant une variable i;(product, product[i]); peut etre ça marchera;

panier.className = "btn btn-success mx-0";
panier.innerHTML = "produit ajouté au panier !";



    productinfo = {
        nom : `${items.name}`,
        prix : `${newPrice}`,
        quantité : `${value}`
    }
    
    

localStorage.setItem(`${items.name}`, JSON.stringify(productinfo));


//je dois calculer tout simpletement la quantité total dans le panier et renvoyer cette valeur dans l'inner html, cette valeur changera automatiquement 
//et ca marchera nickel 
//je crée un tableau qui contient toutes les quantités ajouté
function compteurPanier(){
let quantités = [];
for(let i = 0; i<localStorage.length; i++){
   const objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
   const value = parseInt(`${objects.quantité}`, 10);
   quantités.push(value);
   console.log(objects);

}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const quantitétotal = quantités.reduce(reducer, 0);
compteurpanier.innerHTML = `${quantitétotal}` + " "+ "articles";
}
compteurPanier();
//---création fonction 'prix total' : getallitem price = allitem.prix ++;
    })
    
    return newPrice;
    

} )

function compteurPanier(){
let quantités = [];
for(let i = 0; i<localStorage.length; i++){
   let objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
   let value = parseInt(`${objects.quantité}`, 10);
   quantités.push(value);
   
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const quantitétotal = quantités.reduce(reducer, 0);
compteurpanier.innerHTML = `${quantitétotal}` +" "+ "articles";
}
compteurPanier();
//Travail sur l'ajout des élements au panier
//d'abord je crée mon local storage et j'ajoute les items (nom prix et quantité) quand on appuie sur panier
//également, lorsqu'on on appuie sur panier, dans le header la quantité de produit s'affiche automatiquement
      }
//j'appel la fonction
      
      productdata();

