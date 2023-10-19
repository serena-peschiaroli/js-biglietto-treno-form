// The submit event fires when a <form> is submitted.

// Note that the submit event fires on the <form> element itself, and not on any <button> or <input type="submit"> inside it. However, the SubmitEvent which is sent to indicate the form's submit action has been triggered includes a submitter property, which is the button that was invoked to trigger the submit request.

// The submit event fires when the user clicks a submit button or presses Enter while editing a field (e.g. <input type="text">) in a form. The event is not sent to the form when calling the form.submit() method directly.

// syntax:
// Use the event name in methods like addEventListener(), or set an event handler property.

// addEventListener("submit", (event) => {});

// onsubmit = (event) => {};





let NameSurname = document.getElementById ("NameSurname");
let TotalKm = document.getElementById("TotalKm");
let UserAge = document.getElementById("Age-Select");
let quoteForm = document.getElementById("quoteForm");
const PriceKm = 0.21;
    
let TotPrice = TotalKm.value * PriceKm ;
const sDiscount = 0.20;
const bDiscount= 0.40;
let Discount = "";
let TotDiscount = TotPrice * Discount;

quoteForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    //preventDefault() on the form's submission will prevent the page from refreshing, allowing you to handle and process the form without causing the entire page to reload.
    let NameSurname = document.getElementById ("NameSurname");
    console.log (NameSurname.value);
    let TotalKm = document.getElementById("TotalKm");
    let UserAge = document.getElementById("age-select").value;

    document.getElementById("paxName").innerHTML = `Sig/Sig.ra ${NameSurname.value}`;
    const PriceKm = 0.21;
    
    let TotPrice = TotalKm.value * PriceKm ;
    const sDiscount = 0.20;
    const bDiscount= 0.40;
    let Discount = "";
    let TotDiscount = TotPrice * Discount;


    if (UserAge.value = "Minorenne" ) {
        console.log ("Minorenne, sconto del 20%");
        let Discount = 0.20;
        console.log (`€ ${TotPrice  * Discount}`);
        let TotDiscount = (TotPrice * Discount);
        let NetPrice =  (TotPrice -  TotDiscount).toFixed(2) ;
        document.getElementById("ticketCost").innerHTML =`€ ${NetPrice}`;
    }else if (UserAge.value = "Pensionato" ){
        console.log ("Pensionato, sconto del 40%");
        const Discount = 0.40;
        console.log (`€ ${TotPrice  * Discount}`);
        let TotDiscount = (TotPrice * Discount);
        let NetPrice = (TotPrice -  TotDiscount).toFixed(2); 
        document.getElementById("ticketCost").innerHTML =`€ ${NetPrice.value}`;
        
    }else{
        console.log ("Nessuno sconto applicato");
        console.log (`€ ${TotPrice}`);
        let NetPrice =  (TotPrice).toFixed(2);

    }


    
})

