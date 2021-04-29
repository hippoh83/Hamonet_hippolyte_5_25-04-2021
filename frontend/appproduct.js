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
        const price = document.createElement("h5");
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
        const select = document.createElement('option');
    
    
        img.className = 'card-img mx-0 ';
        card.className = 'card mt-3 col-sm-12 px-0 bg-light shadow mt-5';
        cardBody.className = 'card-body text-center mt-4';
        header.className = 'card-title';
        paragraph.className = 'card-text my-3';
        couleur.className = 'card-text text-left mt-4';
        price.className = 'mb-0 mt-2 mx-5';
        span.className = 'text-dark mr-1';
        containerImg.className = 'col-sm-7 mx-0';
        containerbody.className = 'col-sm-5';
        containerCard.className = 'row no-gutters wrap';
        containerprice.className = 'row no-gutters wrap mb-4';
        panier.className = 'btn btn-primary mx-0';
        panier.setAttribute('type', 'button');
        ul.className ='list-group justify-content-center d-flex flex-row flex-wrap ';
        form.className = 'form-control col-sm-3 mx-2';
        select.setAttribute('selected', '');
    
        img.src = items.imageUrl;
        img.setAttribute('alt', 'image ours');
        couleur.innerHTML = "Choisissez votre couleur :"
        header.innerHTML = items.name;
        euros.innerHTML = '€';    
        paragraph.innerHTML = items.description;
        panier.innerHTML= "ajouter au panier";
        
        select.innerHTML = "Quantité";

        for(let i = 0; i<items.colors.length; i++){
           const color=items.colors[i];
           const li = document.createElement("li");
           li.className ='list-group-item mx-1 px-5 py-3 mt-2 border col-sm-1';
           li.style.backgroundColor= color;
           ul.append(li);
        }
        
        for(let i = 1; i<=10; i++){
           const option = document.createElement('option');
           option.setAttribute('value',`${i}`);
           option.innerHTML =`${i}`;
           form.append(option);
        }
        span.innerHTML = ((items.price)/100)+',00' + " ";
        
    
        span.append(euros);
        price.append(span);
        form.append(select);
        containerprice.append(form, price);
        cardBody.append(header, paragraph, hr1, couleur, ul, hr2, containerprice, panier );
        containerbody.append(cardBody);
        containerImg.append(img);
        containerCard.append(containerImg, containerbody);
        card.append(containerCard);
        mainProduct.append(card);   
        

      }

      productdata();