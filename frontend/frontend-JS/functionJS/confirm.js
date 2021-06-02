function confirm(data){
//je récupère le container
    let confirm =  document.querySelector("#confirm");

//je crée tous les élements nécessaires pour une mise en page propre
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let span1 = document.createElement("h5");
    let span2 = document.createElement("h5");
    let span3 = document.createElement("h5");
    let span4 = document.createElement("h2");
    let boutonretour = document.createElement("a");
    let confirmContent = document.createElement("div");

//j'ajoute les styles 
    confirmContent.className="title text-center px-5 py-5 my-5";
    span1.className="text-center my-1"
    span2.className=" text-center my-1"
    span3.className="text-center my-1"
    span4.className="text-center font-weight-bold my-1";
    boutonretour.className="btn btn-secondary px-3 py-4 mt-4 font-weight-bold";
    boutonretour.setAttribute("href", "index.html");

//j'ajoute les élements de textes avec les données récupérées dans ma requête POST
    span1.innerHTML =`Bonjour`;
    span4.innerHTML =` ${data.contact.firstName}!`;
    span2.innerHTML =`Nous vous remercions de la confiance que vous apportez à Orinoco.`;
    span3.innerHTML =`Nous avons le plaisir de vous informer que votre commande numéro ${data.orderId} d'un montant de ${total} € a 
    bien été enregistrée et sera traitée dans les meilleurs délais.`;
    boutonretour.innerHTML="Retour à l'accueil";

    
    //j'ajoute tous mes élements les uns aux autres. 
    span1.append(span4);
    confirmContent.append(span1, br1, span2, br2, span3, boutonretour);
    confirm.append(confirmContent);
    localStorage.clear();
}