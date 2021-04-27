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
    .then(function(value){
        render(value);
    })
    .catch(function(err){
        console.log(err)
    })
  }



        function render(value){
            for(const q of value){
                //je récupere le container ou sera situé toutes les cards
                const mainContainer = document.querySelector("#card");
                //je crée tous les élements necessaires
                const card = document.createElement("div");
                const cardBody = document.createElement("div");
                const img = document.createElement("img");
                const header = document.createElement("h5");
                const paragraph = document.createElement("p");
                const price = document.createElement("h6");
                const panier = document.createElement("a");
                const hr = document.createElement('hr');
                const span = document.createElement('span')
                //j'ajoute les classes aux éléments
                card.className = 'card';
                cardBody.className = 'card-body text-center';
                img.className = 'img-card-top';
                paragraph.className = 'small mb-2';
                price.className = 'mb-3';
                panier.className = 'btn btn-primary btn-sm mr-1 mr-2';
                span.className = 'text-danger mr-1';
                //j'ajoute les élements de l'api
                




                //pour chaque élement de l'api (0 à 5), je crée une div avec les class card ou j'ajoute les élements contenu dans value
                //j'ajoute d'abord les images en haut de la card
                //j'ajoute ensuite tous les elements dans le cardbody
                //je crée les élements qui seront contenus dans ma card avec leurs classe respectives et renvoyant a la valeur de q
            }        

    }


fetchdata();
})
   

//une fonction qui ajoute la card sélectionnée en grand dans la page produit
//une autre fonction qui ajoute le produit sélectionnée dans mon panier lorsqu'on appuie sur le bouton "ajouter au panier"
// dans mon panier, les produits sélectionnée son sous la forme de card qui scroll de haut en bas,
//On peut choisir le nombre de produit et le prix change en fonction
// une fonction qui vérifie les informations rentrée dans les forms
//une fonction qui valide la commande et qui retourne l'id de notre commande
// question retour sur l'id du produit si on ajoute plusieurs produit différent ? génération aléatoire ou aux choix une id ?
