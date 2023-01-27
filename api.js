console.log(" Fetch API");

const getUsers = ( ) => {
  const url = `https://reqres.in/api/users?delay=3` ;

    fetch(url)
        .then( response=> {
            console.log("Status: " + response.status);
            return response.json();
        })
        .then( users => {
            console.log("Total de elementos: " +  users.total  );
            //Leer a Data = [ {},{},{} ]
            //console.log( users.data );
            localStorage.setItem("users", JSON.stringify(users)  );
            localStorage.setItem("fecha-actual", (new Date().getTime()) );
            for ( let user of users.data)
            document.getElementById('data').innerHTML += 
            `<tr>
            <td id="id">${user.id}</td>
              <td id="firstName">${user.first_name}</td>
              <td id="lastName">${user.last_name}</td>
              <td id="email">${user.email}</td>
              <td><img id="avatar" src="${user.avatar}"></td>
              </tr>`             

        })
        .catch( error => console.log(error));
}


function readLocalStorage(){
    console.log( JSON.parse(localStorage.getItem('users'))   );
}

//almacenar datos de fecha
localStorage.setItem("fecha-caducidad", (new Date().getTime()) + 60_000 );
var fechaCaducidad = parseInt(localStorage.getItem("fecha-caducidad"));
//console.log(fechaCaducidad);

localStorage.setItem("fecha-actual", (new Date().getTime()) );
var fechaActual = parseInt(localStorage.getItem("fecha-actual"));
//console.log(fechaActual);

var fechaFinal = fechaCaducidad - fechaActual;
//console.log(fechaFinal);

//borrar datos de localSotrage
function borrarLocalStorage () {
  if (fechaCaducidad - fechaActual >= 6000) {
    localStorage.removeItem("users"); 
  }
  
}








