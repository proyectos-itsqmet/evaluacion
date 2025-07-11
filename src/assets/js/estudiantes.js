let estudiantes = [
  { nombre: Juan, nota: 8.5 },
  { nombre: Gustavo, nota: 9 },
  { nombre: Margot, nota: 8 },
  { nombre: Luz, nota: 10 },
];

calcularPromedio = () => {
  let sumaNotas = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    sumaNotas += estudiantes[i].nota;
  }

  let promedio = sumaNotas / estudiantes.length;
  console.log("El promedio general es: " + promedio.toFixed(2));
};

calcularPromedio();
