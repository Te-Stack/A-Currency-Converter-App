const inserted = document.getElementById("myinput");
inserted.addEventListener('input',function(e){
    let converted = e.target.value
    let dollarValue = document.getElementById("dollarsid");
    dollarValue.innerHTML = converted * 412.50
    let poundValue = document.getElementById("poundsid");
    poundValue.innerHTML = converted * 583.89
    let euroValue = document.getElementById("eurosid");
    euroValue.innerHTML = converted *504.82
    let cedisValue = document.getElementById("cedisid");
    cedisValue.innerHTML = converted *71.02
})

