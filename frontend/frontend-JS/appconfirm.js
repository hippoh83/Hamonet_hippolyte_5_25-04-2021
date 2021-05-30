
const contact = JSON.parse(localStorage.getItem("contact"));
const total = JSON.parse(localStorage.getItem("total"));

let products = [];
for (const [key, value] of Object.entries(localStorage)) {
    if(/^5be/g.test(key)){
        let productId = `${key}`;
        products.push(productId);
        }
        };
               


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
                confirm(data)
            })
            .catch(err => console.log(err))
        
        
        
            


        