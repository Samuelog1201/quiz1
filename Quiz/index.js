// Ejercicio 1
const tareas = [
    {
      Name: "Samuel",
      Id: 34,
      Estado: true,
    },
    {
      Name: "Juan",
      Id: 12,
      Estado: false,
    },
    {
      Name: "David",
      Id: 2,
      Estado: true,
    }
  ];

  const completadaTarea = (tareas) => {
    const resultado = tareas.filter(tarea => tarea.Estado === true);
    return resultado;
  }

  const resultadoFiltrado = completadaTarea(tareas);
  
  console.log(resultadoFiltrado);

  // Ejercicio 2


  const ciudades = [
    { 
    nombre: "Cali", 
    poblacion: 50000 
},
    { 
    nombre: "medellin", 
    poblacion: 75000 
},
{ 
    nombre: "bogota", 
    poblacion: 60000 
}
  ];
  
  
  function ciudadConMayorPoblacion(ciudades) {
    if (ciudades.length === 0) return null; 
    
    let ciudadMayorPoblacion = ciudades[0];
  
  
    for (let i = 1; i < ciudades.length; i++) {
      if (ciudades[i].poblacion > ciudadMayorPoblacion.poblacion) {
        ciudadMayorPoblacion = ciudades[i];
      }
    }
  
    return ciudadMayorPoblacion;
  }

  const resultado = ciudadConMayorPoblacion(ciudades);
  console.log(resultado);