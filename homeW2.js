const counter = function(number) {

    let numberLenght = number.toString().length;
    // let startNumber = [];
    let endNumber = [];
    for (let i = 1; i < number+1; i++) {
        startNumber = `${i}`;
        zeroNumber = (startNumber.padStart(numberLenght,'0'));
        endNumber += `<div class="card">${zeroNumber}</div>`
    }
    return endNumber;
};

function loadEvent() {
    document.getElementById("root");
    let list = counter(12);
   
    root.insertAdjacentHTML("beforeend", list);
};    

window.addEventListener("load", loadEvent);