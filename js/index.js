const inserted = document.getElementById("myinput");
inserted.addEventListener('input',function(event){
    let converted = event.target.value
    let dollarValue = document.getElementById("dollarsid");
    dollarValue.innerHTML = converted * 365
    let poundValue = document.getElementById("poundsid");
    poundValue.innerHTML = converted * 420
    let euroValue = document.getElementById("eurosid");
    euroValue.innerHTML = converted *440
    let cedisValue = document.getElementById("cedisid");
    cedisValue.innerHTML = converted *50
})

