let continuar = true;
while (continuar) {
  let Hola = prompt(
    "Bienvenidx, si gustas avanzar con la conversión escribi tu nombre."
  );
  let divisa = prompt("Ingresa la divisa por adquirir (Dolar, Euro, Libra):");
  let cambio = prompt("Ingresa cuantos pesos te gustaria convertir:");
  const dolarBlue = 404;
  const euroBlue = 340;
  const libraBlue = 240;

  if (isNaN(divisa == 0)) {
    alert("Por favor, ingresa un valor valido.");
  } else {
    let resultado;
    switch (divisa) {
      case "Dolar":
        resultado = parseFloat(cambio) / dolarBlue;
        break;
      case "dolar":
        resultado = parseFloat(cambio) / dolarBlue;
        break;
      case "Euro":
        resultado = parseFloat(cambio) / euroBlue;
        break;
      case "euro":
        resultado = parseFloat(cambio) / euroBlue;
        break;
      case "Libra":
        resultado = parseFloat(cambio) / libraBlue;
        break;
      case "libra":
        resultado = parseFloat(cambio) / libraBlue;
        break;
      default:
        alert("La operación ingresada no es válida.");
    }

    if (resultado !== undefined) {
      alert("La conversión da: " + resultado);
      let respuesta = prompt("¿Te gustaría seguir operando? (Si/No)");
      if (respuesta.toLowerCase() == "Si") {
        let cambio;
      } else {
        alert("Gracias por utilizar mi app <3");
        break;
      }
    }
  }
}
