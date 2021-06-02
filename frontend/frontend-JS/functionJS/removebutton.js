let removeButton = document.querySelectorAll(".removebutton");
for(let i = 0; i<removeButton.length; i++){
//je crée une boucle qui retire l'élement du panier ainsi que dans le localStorage quand on appuie sur le bouton remove. 
    removeButton[i].addEventListener('click', () => {
        //je récupère l'id ajouté à mon bouton, correspondant à l'id du produit en question, pour l'ajouter en paramètre removeitem() du localStorage
        //et m'assurer qu'il supprime bien le bon produit. 
    const ids = removeButton[i].getAttribute("value");
    let tr = removeButton[i].parentNode.parentNode;
    tr.remove();
    localStorage.removeItem(ids);
})
}