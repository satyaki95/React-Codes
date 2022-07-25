// finding the element

const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener("submit", formhandeler);

function formhandeler(e){
    e.preventDefault();
    
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);

    const userinfo = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    console.log(userinfo);

    name.value="";
    email.value="";
    password.value="";
    

}