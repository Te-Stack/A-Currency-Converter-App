const inserted = document.getElementById("myinput");
inserted.addEventListener('input',function(event){
    let converted = event.target.value
    let dollarValue = document.getElementById("dollarsid");
    dollarValue.innerHTML = converted * 413
    let poundValue = document.getElementById("poundsid");
    poundValue.innerHTML = converted * 582.48
    let euroValue = document.getElementById("eurosid");
    euroValue.innerHTML = converted *501.63
    let cedisValue = document.getElementById("cedisid");
    cedisValue.innerHTML = converted *71.65
})

