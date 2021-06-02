//je récupère les données contact, et prix total que j'ai stocké dans mon localStorage
const contact = JSON.parse(localStorage.getItem("contact"));
const total = JSON.parse(localStorage.getItem("total"));
//je stocke les produits du panier dans un tableau en m'assurant de retirer les élements non voulu du localStorage
let products = [];
for (const [key, value] of Object.entries(localStorage)) {
    if(/^5be/g.test(key)){
        let productId = `${key}`;
        products.push(productId);
        }
        };
               

//je créee ma requête fetch en envoyant mon objet contact et mon tableau de produits
    fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers:{
            "accept": "application/json",
            "Content-type": "application/json"
            },
        body: JSON.stringify({contact : contact, products : products})
          })
            .then(function(response){
               return response.json()
            })
            .then(function(data){
                //je récupère les élements envoyés pour les afficher sur la page confirmation, afin que l'utilisateur puisse voir son nom, 
                //l'id de sa commande ainsi que son prix total.
                confirm(data)
            })
            .catch(err => console.log(err))
        
        
        
            


        