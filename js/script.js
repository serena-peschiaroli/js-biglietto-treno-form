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
    console.log(NameSurname.value);

    let PNR = Math.floor(Math.random() * 2000)
    console.log(PNR);
    let carriage = Math.floor(Math.random() * 12)
    console.log= (carriage);
    
    let TotalKm = document.getElementById("TotalKm");
    let UserAge = document.getElementById("age-select").value;

    document.getElementById("paxName").innerHTML = `Sig/Sig.ra ${NameSurname.value}`;
    document.getElementById("carriageNo").innerHTML = `Carrozza # ${carriage}`;
    const PriceKm = 0.21;
    document.getElementById("PnrNo").innerHTML = `PNR # ${PNR}`;

    
    let TotPrice = TotalKm.value * PriceKm ;
    const sDiscount = 0.20;
    const bDiscount= 0.40;
    let Discount = "";
    let TotDiscount = TotPrice * Discount;
    


    if (UserAge.value = "Minorenne" ) {
        let Discount = 0.20;
        let TotDiscount = (TotPrice * Discount);
        let NetPrice =  (TotPrice -  TotDiscount).toFixed(2) ;
        document.getElementById("ticketCost").innerHTML =`€ ${NetPrice}`;
    }else if (UserAge.value = "Pensionato" ){

        const Discount = 0.40;
        let TotDiscount = (TotPrice * Discount);
        let NetPrice = (TotPrice -  TotDiscount).toFixed(2); 
        document.getElementById("ticketCost").innerHTML =`€ ${NetPrice}`;
        
    }else if (UserAge.value = "Maggiorenne"){
        let NetPrice =  (TotPrice).toFixed(2);
        document.getElementById("ticketCost").innerHTML = `€ ${NetPrice}`;


    }


    
})

document.getElementById("clear").addEventListener("click", function () {
    NameSurname.value = "";
    TotalKm.value = "";
    document.getElementById('age-select').selectedIndex = 0;
    document.getElementById("paxName").innerHTML = "";
    document.getElementById("carriageNo").innerHTML = "";
    document.getElementById("PnrNo").innerHTML = "";
    document.getElementById("ticketCost").innerHTML = "";
});

