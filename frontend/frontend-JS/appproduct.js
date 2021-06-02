//je recupere l'id dans l'url
let params = new URLSearchParams(document.location.search);
let code = params.get('id');
//fetch des bonnes valeurs avec l'ajout de l'id
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
//j'appel la fonction
productdata();

