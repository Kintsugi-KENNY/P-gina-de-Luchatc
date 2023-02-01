
function enviar() {
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    if (correo == "") {
      alert("Todos los campos deben estar llenos");
      document.getElementById("correo").focus();
    } else {
      if (asunto == "") {
        alert("Es obligatorio llenar todos los espacios");
        document.getElementById("asunto").focus();
      } else {
        if (mensaje == "") {
          alert("Es obligatorio llenar todos los espacios");
          document.getElementById("mensaje").focus();
        } else {
          console.log(correo + " " + asunto + " " + mensaje);
          document.getElementById("correo").value = "";
          document.getElementById("asunto").value = "";
          document.getElementById("mensaje").value = "";
          document.getElementById("nombre").focus();
        }
      }
    }
  }
