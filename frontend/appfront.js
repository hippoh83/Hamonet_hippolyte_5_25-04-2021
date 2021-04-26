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
        console.log("échec lors de la récupération des données")
    })
  }



        function render(value){
    
            for(let i=0; i<value.length; i++){
                let val=value[i];
            
                //pour chaque élement de l'api (0 à 5), je crée une div avec les class card ou j'ajoute les élements contenu dans value
                //j'ajoute d'abord les images en haut de la card
                
                //j'ajoute ensuite tous les elements dans le cardbody
                let card = document
                .querySelector("#card")
                .append(document.createElement("div"))
                .className('card')
        
                let valueimg=val.imgUrl;
                let img=document
                .createElement("img")
                .className('card-img-top')
                .src('my_function( " '+valueimg+' " )')
                .setAttribute("alt", "image card oursons");
                card.append(img);
                //je crée les élements qui seront contenus dans ma card avec leurs classe respectives et renvoyant a la valeur de value[i]
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
