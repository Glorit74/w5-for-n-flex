const  counter = function(number) {
    number = parseInt(number);
    // if (!Number.isNaN(number)) {

    let numberLenght = number.toString().length;

    let startNumber = [];
    for (let i = 0; i < numberLenght-1; i++) {
          startNumber += 0;
        }
    // return startNumber;  ez miért nem látszott a következő fv-ben?
    let countNumber =[];
    let tagNumber =[];
    for (let i = 1; i < number+1; i+=12) {
        countNumber = startNumber + i;
    if (countNumber.length > numberLenght-1){
        countNumber = countNumber.substring((countNumber.length-startNumber.length-1), countNumber.length);

    }    
 
    tagNumber += `<div class="card">${countNumber}</div>`
    console.log(tagNumber);
    
}
/*   
console.log("a szám: ", number);
console.log("szám hossza ",numberLenght);
console.log("a kezdőszám: ", startNumber);
console.log("a kezdőszám hossza: ", startNumber.length);
*/
return tagNumber;
};
counter(100);

function loadEvent() {
    document.getElementById("root");
    const list = counter(150);
    root.insertAdjacentHTML("beforeend", list);
};

window.addEventListener("load", loadEvent);