function loadEvent() {

    document.getElementById("roots");
    let input = `
    <div class="dataInput">
        <label for="">Meddig számoljak?</label>
        <input type="text" id="number" value="">
        <label for="">Hányasával?</label>
        <input type="text" id="step" value="1">
        <button type="button">Click</button>
    </div><br>
    <div class="msg"></div>`
    root.insertAdjacentHTML("afterbegin", input);
    
    button = document.querySelector("button");
        
    button.addEventListener("click", getNumber);
    
    function getNumber() {
       
        inputNumber = document.querySelector("#number").value;
        inputStep = document.querySelector("#step").value;
        if (inputNumber === '') {

        msg = document.querySelector(".msg");msg.classList.add("msg");
        msg.textContent = "Írj ide egy tetszőleges számot";
        setTimeout(() => msg.remove(), 3000);
        } else {
            let numberLenght = inputNumber.toString().length;
            let stop = parseInt(inputNumber);
            let step = parseInt(inputStep);
            let startNumber = [];
            let endNumber = [];
            for (let i = 1; i < stop+1; i +=step){             
                startNumber = `${i}`;
                zeroNumber = (startNumber.padStart(numberLenght,'0'));
                endNumber += `<div class="card3">${zeroNumber}</div>`
            }
            
            root.insertAdjacentHTML("beforeend", `<div class='container'> ${endNumber} </div>`);     
        };
    }
}

    
window.addEventListener("load", loadEvent);