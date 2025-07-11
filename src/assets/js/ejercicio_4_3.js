sistemaAcademico = () => {
  let estudiantes = [];
  let cantidad = parseInt(prompt("¿Cuántos estudiantes ingresará?"));

  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt(`Nombre del estudiante ${i + 1}:`);
    let promedio = parseFloat(prompt(`Promedio de ${nombre}:`));
    estudiantes.push({ nombre, promedio });
  }

  let sumaPromedios = estudiantes.reduce(
    (total, est) => total + est.promedio,
    0
  );
  let promedioGeneral = sumaPromedios / estudiantes.length;

  let mejorEstudiante = estudiantes.reduce((mejor, est) =>
    est.promedio > mejor.promedio ? est : mejor
  );

  let estudiantesOrdenados = [...estudiantes].sort(
    (a, b) => b.promedio - a.promedio
  );

  console.log(`Promedio general del grupo: ${promedioGeneral.toFixed(2)}`);
  console.log(
    `Estudiante con mejor promedio: ${mejorEstudiante.nombre} (${mejorEstudiante.promedio})`
  );
  console.log("\nEstudiantes ordenados por promedio:");
  estudiantesOrdenados.forEach((est) => {
    console.log(`${est.nombre}: ${est.promedio}`);
  });
};

sistemaAcademico();
