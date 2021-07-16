const form = document.getElementById("form");
const success = document.getElementById("success");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");
const abo = document.getElementsByName("Newsletter");
const submitBtn = document.getElementById("submit-btn");
let selectedAbo;

function selectedAboFn(abo) {
    for (var i = 0; i < abo.length; i++) {
        if (abo[i].checked) {
            selectedAbo = abo[i].value;
            console.log(selectedAbo);
        }
    }
}

function switchPage(event){
    selectedAboFn(abo);
    let el = document.createElement("div");
    el.innerHTML = `<h1>${fname.value} ${lname.value} hat sich erfolgreich Registriert. Sie möchten den Newsletter ${selectedAbo} erhalten.</h1>`;
    success.appendChild(el);
    form.hidden = !form.hidden;
    success.hidden = !success.hidden;
}

function checkUserValidation(event){
    event.preventDefault();
    let valid=true;
    //check for validity
    if (valid){
        switchPage();
    } else {
        console.log("invalid user input");
    }
}

submitBtn.addEventListener('click', (event) => checkUserValidation(event));