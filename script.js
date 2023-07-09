console.log("Loading Javascript.......")


function saveUser(){


    let nameUser = document.getElementById("name");
    let empresaUser = document.getElementById("empresa");
    let cargoUser = document.getElementById("cargo");
    let vacanteUser = document.getElementById("vacante");
    let correoUser = document.getElementById("correo");
    let telefonoUser = document.getElementById("telefono");
    
    let user = {
        name: nameUser.value,
        empresa: empresaUser.value,
        cargo: cargoUser.value,
        vacante: vacanteUser.value,
        correo: correoUser.value,
        telefono: telefonoUser.value
    }
    
    console.log(user);

let url = "http://localhost:8000/api/crear";

let params = {
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
}

fetch(url,params).then((response) =>{

    console.log(response);
    
    if(response.status == 201){
        alert("Gracias por su tiempo, me contactaré proximamente!!");
    }else{
        alert("No se pudieron enviar sus datos !!");
    }
});

return true;
}
  


