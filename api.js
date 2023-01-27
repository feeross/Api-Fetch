console.log(" Fetch API");

const getUsers = (url = "https://reqres.in/api/users?delay=3") => {
  let caducidadFecha = localStorage.getItem("fecha-termino");
  if (Object.is(null, caducidadFecha) || (new Date().getTime() > caducidadFecha)) {

    fetch(url)
      .then(response => { return response.json() })
      .then(users => {
        localStorage.setItem("savedUsers", JSON.stringify(users.data));
        localStorage.setItem("fecha-termino", (new Date().getTime()) + 60000);
        imprimirDatos();
      })

      .catch(error => {
        console.log(error);
      })
  }
  else {
    imprimirDatos();
  }
}
function imprimirDatos() {
  const users = JSON.parse(localStorage.getItem("savedUsers"));
  console.log(users)
  const table = document.getElementById('data');
  table.innerHTML = "";
  for (let index = 0; index < users.length; index++) {
    table.innerHTML +=
      `<tr>
                <td id="id">${users[index].id}</td>
                  <td id="firstName">${users[index].first_name}</td>
                  <td id="lastName">${users[index].last_name}</td>
                  <td id="email">${users[index].email}</td>
                  <td><img id="avatar" src="${users[index].avatar}"></td>
                  </tr>`
  }
}




