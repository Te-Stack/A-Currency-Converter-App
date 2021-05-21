const inserted = document.getElementById("myinput");
inserted.addEventListener('input',function(e){
    let converted = e.target.value
    let dollarValue = document.getElementById("dollarsid");
    dollarValue.innerHTML = converted * 410.50
    let poundValue = document.getElementById("poundsid");
    poundValue.innerHTML = converted * 584.42
    let euroValue = document.getElementById("eurosid");
    euroValue.innerHTML = converted *502.48
    let cedisValue = document.getElementById("cedisid");
    cedisValue.innerHTML = converted *71.32
})

