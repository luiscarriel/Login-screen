alert("Bem vindo, Dev.")

function validar(){
    var name = document.getElementById("name").value;


    if(name == ""){
        alert("E-mail obrigatório");
    } else if(name.length >= 25){
        alert('limite de 25 caracteres atingido. ')
    } 

    const password = document.getElementById("password").value;

    if(password == ""){
        alert("Senha obrigatória");
    }
};

