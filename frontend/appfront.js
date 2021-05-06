//je récupère d'abord les données de l'api local
//je crée une fonction qui crée dynamiquement les card au fur et à mesure qu'on ajoute un produit sur l'api:
document.addEventListener('DOMContentLoaded', ()=>{


  function fetchdata(){   
    fetch('http://localhost:3000/api/teddies')
    .then(function(res){
        if(res.ok){
            return res.json()
        }
    })
    .then(function(products){
        render(products);
    })
    .catch(function(err){
        console.log(err)
    })
  }



        function render(products){
            for(const product of products){
                //je récupere le container ou sera situé toutes les cards
                const mainContainer = document.querySelector("#card");
                //je crée tous les élements necessaires
                const card = document.createElement("div");
                const cardBody = document.createElement("div");
                const img = document.createElement("img");
                const header = document.createElement("h5");
                const paragraph = document.createElement("p");
                const price = document.createElement("a");
                const hr = document.createElement('hr');
                const span = document.createElement('span');
                const euros = document.createElement('b');
                //j'ajoute les classes aux éléments
                card.className = ' col-sm-5 card shadow mx-3 mt-4 mb-3 px-0 border-light transition';
                cardBody.className = 'card-body text-center';
                header.className = 'card-title';
                img.className = 'img-card-top img-fluid w-100';
                
                paragraph.className = 'card-text small mb-2';
                price.setAttribute("href", "product.html?id="+product._id)
                price.className = 'mb-1 mt-4 stretched-link';
                span.className = 'text-dark mr-1';
                //j'ajoute les élements de l'api
                img.src = product.imageUrl;
                img.setAttribute('alt', 'images oursons')
                euros.innerHTML = '€';
                header.innerHTML = product.name;
                paragraph.innerHTML = product.description;
                span.innerHTML = (product.price)/100+',00' + " ";
                //j'ajoute les élements les uns aux autres
                span.append(euros);
                price.append(span);
                cardBody.append(header, hr, paragraph, hr, price);
                card.append(img, cardBody);
                mainContainer.append(card);

                //pour chaque élement de l'api (0 à 5), je crée une div avec les class card ou j'ajoute les élements contenu dans value
                //j'ajoute d'abord les images en haut de la card
                //j'ajoute ensuite tous les elements dans le cardbody
                //je crée les élements qui seront contenus dans ma card avec leurs classe respectives et renvoyant a la valeur de q
            }        

    }


fetchdata();

//ajout bouton panier montrant la valeur du panier dans la page d'accueil;
const panierselect = document.querySelector('.Panier');
const compteurpanier = document.createElement('div');
compteurpanier.className = 'justify-content-center';
panierselect.append(compteurpanier);

let quantités = [];
for(let i = 0; i<localStorage.length; i++){
   let objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
   let value = parseInt(`${objects.quantité}`, 10);
   quantités.push(value);
   
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const quantitétotal = quantités.reduce(reducer, 0);
compteurpanier.innerHTML = `${quantitétotal}` + " "+ "articles";;
})


   




//une autre fonction qui ajoute le produit sélectionnée dans mon panier lorsqu'on appuie sur le bouton "ajouter au panier"
// une fonction qui vérifie les informations rentrée dans les forms
//une fonction qui valide la commande et qui retourne l'id de notre commande

