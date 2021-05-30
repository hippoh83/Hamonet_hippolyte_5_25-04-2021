const panierselect = document.querySelector('.Panier');
const compteurpanier = document.createElement('div');
compteurpanier.className = 'justify-content-center';
panierselect.append(compteurpanier);

function compteurPanier(){
    let quantités = [];
    for(let i = 0; i<localStorage.length; i++){
       let objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
       let value = parseInt(`${objects.quantité}`, 10);
       quantités.push(value);
       
       
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const quantitétotal = quantités.reduce(reducer, 0);
    compteurpanier.innerHTML = `${quantitétotal}` + " "+ "articles";
    }
    compteurPanier();