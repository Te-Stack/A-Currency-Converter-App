const inserted = document.getElementById("myinput");
inserted.addEventListener('input',function(e){
    let converted = e.target.value
    let dollarValue = document.getElementById("dollarsid");
    dollarValue.innerHTML = converted * 411.25
    let poundValue = document.getElementById("poundsid");
    poundValue.innerHTML = converted * 580.03
    let euroValue = document.getElementById("eurosid");
    euroValue.innerHTML = converted *500.43
    let cedisValue = document.getElementById("cedisid");
    cedisValue.innerHTML = converted *71.32
})

