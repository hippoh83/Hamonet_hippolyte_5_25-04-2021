//je crée une fonction qui sert de validation pour m'assurer que chaque entrée est correcte
function validation(){
    //je créee les variables contenants les regex correspondants à chaque input utilisateurs. 
    let regPrenom = /[^A-Za-zÀ-ȕ-]/g.test(document.querySelector('#prénom').value);
    let regNom = /[^A-Za-zÀ-ȕ-]/g.test(document.querySelector('#Nom').value);
    let regAddress= /[^A-Za-zÀ-ȕ0-9-'\s]/g.test(document.querySelector('#inputAddress').value);
    let regVille=  /[^A-Za-zÀ-ȕ0-9-\s]/g.test(document.querySelector('#ville').value);
    let regEmail = !(/^.+@.+\..+$/.test(document.querySelector('#Email').value));
   

    //je crée les réponses pour chaque input au cas où les renseignements rentrées sont incorrects. 
    if(regPrenom){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="Ce champ ne doit pas contenir de caractères spéciaux.";
        document.querySelector('#prénom').className="form-control border-danger text-danger";
        document.querySelector('#prénom').insertAdjacentElement('afterend', errormsg);
    }
    if(regNom){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="Ce champ ne doit pas contenir de caractères spéciaux.";
        document.querySelector('#Nom').className="form-control border-danger text-danger";
        document.querySelector('#Nom').insertAdjacentElement('afterend', errormsg);
    }
    if(regAddress){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="Veuillez rentrer une adresse valide.";
        document.querySelector('#inputAddress').className="form-control border-danger text-danger";
        document.querySelector('#inputAddress').insertAdjacentElement('afterend', errormsg);
    }
    if(regVille){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="Veuillez rentrer une ville existante.";
        document.querySelector('#ville').className="form-control border-danger text-danger";
        document.querySelector('#ville').insertAdjacentElement('afterend', errormsg);
    }
    if(regEmail){
        let  errormsg = document.createElement("small");
        errormsg.className="form-text text-danger";
        errormsg.innerHTML="L'adresse Email doit avoir un format valide 'Nom@exemple.com'.";
        document.querySelector('#Email').className="form-control border-danger text-danger";
        document.querySelector('#Email').insertAdjacentElement('afterend', errormsg);
    }
    //je return ces valeurs pour m'assurer que la fonction marchera, si un seul est faux, on renvoie un message d'erreur à celui qui est faux.
    //et on ne renvoie pas sur la page confirmation. 
     return !(regPrenom||regVille||regAddress||regEmail||regNom);
}

//j'ajoute les fonctionnalité quand on appuie sur le bouton commander(validation + envoie des données sous forme de tableau et objets+
//+envoie sur la page confirmation de la commande)

document.querySelector(".submitbutton").addEventListener("click", function(event){

    if(validation() === true && localStorage.length!= 0){
        //si la validation est validée, je crée un objet contenant les élements utilisateurs, et je renvoie à la page confirmation
            let contact = {
                firstName : document.getElementById('prénom').value,
                lastName : document.getElementById('Nom').value,
                address : document.getElementById('inputAddress').value,
                city : document.getElementById('ville').value,
                email : document.getElementById('Email').value
                };
            localStorage.setItem("contact", JSON.stringify(contact));
            localStorage.setItem("total", total);
            
        //si la validation est fausse ou que le panier est vide, je renvoie un message d'erreur et j'empêche l'action. 
    }if(validation() == false){
        document.forms[0].reset();
        event.preventDefault();
    }if(localStorage.length == 0){
        event.preventDefault();
        let table = document.querySelector(".table");
        let  errormsg = document.createElement("small");
        errormsg.className=" justify-content-center form-text text-danger";
        errormsg.innerHTML="Votre panier est vide";
        table.insertAdjacentElement('afterend', errormsg);
    }
    
})