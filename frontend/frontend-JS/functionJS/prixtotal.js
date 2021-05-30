let prixtotal =[];
for(let i = 0; i<localStorage.length; i++){
    const objects = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const prixvalue = parseInt(`${objects.prix}`, 10);
    prixtotal.push(prixvalue);
 }
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const total = prixtotal.reduce(reducer, 0);
let affichageprix = document.createElement("tr");
affichageprix.className="border";
let tdprixt = document.createElement("td");
tdprixt.className="text-center font-weight-bold";
tdprixt.setAttribute("colspan", "4");
tdprixt.innerHTML=`Prix total : ${total} €`;
affichageprix.append(tdprixt)
maincontainer.insertAdjacentElement('beforeend', affichageprix);    

