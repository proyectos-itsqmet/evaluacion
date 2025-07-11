cajeroAutomatico = () => {
  let saldo = parseFloat(
    prompt("Cajero Automático ITSQMET\nIngrese su saldo inicial:")
  );
  if (isNaN(saldo) || saldo < 0) {
    alert("Saldo inválido. Se asignará $0.00 por defecto.");
    saldo = 0;
  }

  let opcion = 0;
  while (opcion !== 4) {
    opcion = parseInt(
      prompt(
        "Seleccione una opción:\n" +
          "1. Consultar saldo\n" +
          "2. Depositar dinero\n" +
          "3. Retirar dinero\n" +
          "4. Salir"
      )
    );
    switch (opcion) {
      case 1:
        alert("Su saldo actual es: $ " + saldo.toFixed(2));
        break;

      case 2:
        let deposito = parseFloat(prompt("Ingrese el monto a depositar:"));
        if (!isNaN(deposito) && deposito > 0) {
          saldo += deposito;
          alert("Depósito exitoso\nSu nuevo saldo es: $ " + saldo.toFixed(2));
        } else {
          alert("El monto a depositar debe ser mayor a 0");
        }

        break;

      case 3:
        let retiro = parseFloat(prompt("Ingrese el monto a retirar:"));
        if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {
          saldo -= retiro;
          alert("Retiro exitoso\nSu nuevo saldo es: $ " + saldo.toFixed(2));
        } else {
          alert("Fondos insuficientes o monto inválido :V");
        }
        break;
      case 4:
        alert("Gracias por usar el Cajero Automático ITSQMET :D");
        break;

      default:
        alert("Seleccione una opción válida del menú.");
    }
  }
};

cajeroAutomatico();
