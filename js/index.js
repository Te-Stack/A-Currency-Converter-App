const inserted = document.getElementById("myinput");
inserted.addEventListener('input',function(e){
    let converted = e.target.value
    let dollarValue = document.getElementById("dollarsid");
    dollarValue.innerHTML = converted * 410.83
    let poundValue = document.getElementById("poundsid");
    poundValue.innerHTML = converted * 582.10
    let euroValue = document.getElementById("eurosid");
    euroValue.innerHTML = converted *501.72
    let cedisValue = document.getElementById("cedisid");
    cedisValue.innerHTML = converted *71.32
})

