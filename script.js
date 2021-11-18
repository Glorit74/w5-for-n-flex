const generalArray =  function (amount) {
    let returnArray = [];

/*    
 let amountConverted = parseInt(amount);
    amount = amountConverted;
 */

    amount = parseInt(amount);  // azért lehet ezt megcsinálni, mert nem azonnal változik meg a amount értéke, előbb futtatja le a jobb oldalt és utána teszi egyenlővé a két oldalt.
    // console.log(amount);
    // console.log(typeof amount);

/* 
if (typeof amount === "number") { 
    E helyett lehet így is csinálni ->
    Number.isNaN(amount) !== true
*/
if (!Number.isNaN(amount)) {
    
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);  //terplate iterállal csináljuk, hogy a végeredmény string típusú legyen
        //    console.log(returnArray);
           
        }   
} else {
        returnArray.push("error");
}
  //  console.log(returnArray);  ez csak akkor műkdöhet, ha a returnArray nem a for cikluson belül van deklarálva, mert ott block típusú, for után megszűnik létezni.
    return returnArray;
};

function loadEvent() {
   console.log(generalArray(10));  // azért csináljuk, hogy lássuk a parseInt milyen értéket ad vissza az átalakítás után
   /* console.log(generalArray("10"));
   console.log(generalArray([10]));
   console.log(generalArray("kiskutya"));
   console.log(generalArray("1 kiskutya")); */

    const root = document.getElementById("root")
    const list = generalArray(6);
    console.log(list);

    if (list[0] !== "error") {

        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
        } 
    }

};

window.addEventListener("load", loadEvent);

/* 
window.addEventListener("load", function() {

});
ez is valid megoldás, memória spórolósabb ez a módszer


array fv-nyel
window.addEventListener("load", () => {
    
});
ha nincsenek paraméterek, akkor a zárójelek helyett alávonás is elég
window.addEventListener("load", _ => {
});

mindegyik akkor hívódik meg, amikor a load esemény megtörténik
 */

/* Önálóan kiszervezhető fv-eket külön írjuk meg, nem a loadEventbe tesszük */