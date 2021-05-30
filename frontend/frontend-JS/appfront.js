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
        
fetchdata();

//ajout bouton panier montrant la valeur du panier dans la page d'accueil;

})


   






