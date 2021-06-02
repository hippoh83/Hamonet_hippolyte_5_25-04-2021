
//je m'assure que les élements du DOM sont chargées avant de lancer le code. 
document.addEventListener('DOMContentLoaded', ()=>{

//je récupère d'abord les données de l'api local
  function fetchdata(){   
    fetch('http://localhost:3000/api/teddies')
    .then(function(res){
        if(res.ok){
            return res.json()
        }
    })
    .then(function(products){
//avec ces données, je crée les produits dynamiques grâce à la fonction render
        render(products);
    })
    .catch(function(err){
        console.log(err)
    })
  }
//j'appel la fonction   
fetchdata();



})


   






