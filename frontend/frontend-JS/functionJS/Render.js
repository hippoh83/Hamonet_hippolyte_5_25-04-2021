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

       
    }        

}