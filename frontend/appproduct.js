let params = new URLSearchParams(document.location.search);
let code = params.get('id');

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



    function product(items){
        const mainProduct = document.querySelector("#product");
    
        const img = document.createElement("img");
        const card = document.createElement("div");
        const cardBody = document.createElement("div");     
        const header = document.createElement("h5");
        const paragraph = document.createElement("p");
        const price = document.createElement("h6");
        const hr1 = document.createElement('hr');
        const hr2 = document.createElement('hr');
        const span = document.createElement('span');
        const euros = document.createElement('b');
        const panier = document.createElement('button');
        const form = document.createElement('select');
        const ul = document.createElement('ul');
        const containerImg = document.createElement('div');
        const containerbody = document.createElement('div')
        const containerCard = document.createElement('div');
        const containerprice = document.createElement('div');
        const couleur =document.createElement('p')
    
    
        img.className = 'card-img mx-0';
        card.className = 'card mt-3 col-sm-12 px-0 bg-light shadow';
        cardBody.className = 'card-body text-center mt-4';
        header.className = 'card-title';
        paragraph.className = 'card-text my-3';
        couleur.className = 'card-text text-left';
        price.className = 'mb-2 mt-4 mx-5';
        span.className = 'text-dark mr-1';
        containerImg.className = 'col-sm-7 mx-0';
        containerbody.className = 'col-sm-5';
        containerCard.className = 'row no-gutters wrap';
        containerprice.className = 'row no-gutters justify-content-center my-3';
        panier.className = 'btn btn-primary mx-5';
        panier.setAttribute('type', 'button');
        ul.className ='list-group list-group-horizontal justify-content-center';
    
        img.src = items.imageUrl;
        img.setAttribute('alt', 'image ours');
        couleur.innerHTML = "Choisissez votre couleur :"
        header.innerHTML = items.name;
        euros.innerHTML = '€';    
        paragraph.innerHTML = items.description;
        panier.innerHTML= "ajouter au panier";
        span.innerHTML = (items.price)/100+',00' + " ";

        for(let i = 0; i<items.colors.length; i++){
           const color=items.colors[i];
           const li = document.createElement("li");
           li.className ='list-group-item mx-1 px-5 py-3 border';
           li.style.backgroundColor= color;
           ul.append(li);
        }
    
        span.append(euros);
        price.append(span);
        containerprice.append(price, panier);
        cardBody.append(header, paragraph, hr1, couleur, ul, hr2, containerprice);
        containerbody.append(cardBody);
        containerImg.append(img);
        containerCard.append(containerImg, containerbody);
        card.append(containerCard);
        mainProduct.append(card);    
      }

      productdata();