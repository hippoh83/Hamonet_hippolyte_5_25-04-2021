
//je récupère l'élement panier dans mon header et je crée une div qui montrera dynamiquement le nombre de produits dans mon panier
const panierselect = document.querySelector('.Panier');
const compteur = document.createElement('div');
compteur.className = 'justify-content-center';
panierselect.append(compteur);

function compteurPanier(){
   //je crée un tableau vide, qui se remplit au fur et à mesure qu'on ajoute un élement dans le localStorage, avec la bonne quantité
    let quantités = [];
    for(let i = 0; i<localStorage.length; i++){
       let objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
       //je m'assure que les élements ajoutés sont sous la forme de nombres.
       let value = parseInt(`${objects.quantité}`, 10);
       quantités.push(value);
       
       
    }
    //j'additionne les élements de mon tableau avec la méthode reducer, et j'ajoute la valeur obtenue dans le header panier. 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const quantitétotal = quantités.reduce(reducer, 0);
    compteur.innerHTML = `${quantitétotal}` + " "+ "articles";
    }
    compteurPanier();