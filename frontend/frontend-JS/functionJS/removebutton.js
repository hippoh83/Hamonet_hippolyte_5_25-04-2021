let removeButton = document.querySelectorAll(".removebutton");
for(let i = 0; i<removeButton.length; i++){
    
    removeButton[i].addEventListener('click', () => {
    const ids = removeButton[i].getAttribute("value");
    let tr = removeButton[i].parentNode.parentNode;
    tr.remove();
    localStorage.removeItem(ids);
})
}