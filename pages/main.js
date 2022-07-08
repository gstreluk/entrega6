// Funciones
function saludar() {
    alert("Hola " + nombre + ", inscribite a tu próximo curso " );
    }
  
  
  function elegirCuotas () {
    cuotas = prompt(
      "En cuantas cuotas querés pagarlo? \n 1: 6 cuotas  \n 2: 12 cuotas \n 3: 24 cuotas "
    );
  
    if (cuotas === "1") {
      alert(" elegiste 6 cuota");
    } else if (cuotas === "2") {
      alert(" elegiste 12 cuotas");
    } else if (cuotas === "3") {
      alert(" elegiste 24 cuotas");
    } 
  
    /*plazo = prompt(
      "Vuelva a ingresar una opcion \n 2: mostrar monto final  \n 3: Terminar"
    );*/
    finalizarSimulador();
  }
  
  function finalizarSimulador() {
    if (cuotas === "1") {
      alert(
        "usted eligio 6 cuotas, el monto a pagar es: $ " + (monto /6) *
        seisCuotas
      );
    } else if (cuotas === "2") {
      alert(
        "usted eligio 12 cuotas, el monto a pagar es: $ " + (monto /12) * 
        doceCuotas
      );
    } else if (cuotas == "3") {
      alert(
        "usted eligio 24 cuotas, el monto a pagar es: $ " + (monto /24) *
        veinticuatroCuotas 
      );
    }
  }
  function unPago (){
    alert (monto)
  }
  
  
   
  // variables
  let cuotas;
  let interesFijo = 1.05
  let seisCuotas = 1.2;
  let doceCuotas = 1.15;
  let veinticuatroCuotas = 1.1;
  let nombre = prompt("Ingrese su nombre");
  saludar();
  let curso = prompt(
    "Seleccione el curso: \n 1: Locución radial \n 2: Voz en off  \n 3: Artística \n 4: Oratoria \n 5: Salir "
  );
  
  while (plazo !== "5") {
    if (plazo === "1") {
      unPago();
    }   
    if (plazo === "2") {
      elegirCuotas();
    }
    if (plazo === "3") {
        elegirCuotas();
    }
    if (plazo === "4") {
        elegirCuotas();
    }
    //monto = parseFloat(prompt("Ingrese el monto"));
    plazo = prompt (
      "Ingrese una opcion:  \n 1:  Pago único \n 2: Cuotas \n 3: Terminar "
    );
  }
  
  alert ("Gracias por confiar en Prestamos Ya!")