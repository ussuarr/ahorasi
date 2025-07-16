const malla = [
  {
    semestre: "I",
    asignaturas: [
      { nombre: "Álgebra", creditos: 8, requisitos: [] },
      { nombre: "Cálculo I", creditos: 8, requisitos: [] },
      { nombre: "Introducción a la Ing. Industrial", creditos: 10, requisitos: [] },
      { nombre: "Fundamentos Filosóficos", creditos: 4, requisitos: [] }
    ]
  },
  {
    semestre: "II",
    asignaturas: [
      { nombre: "Álgebra Lineal", creditos: 7, requisitos: ["Álgebra"] },
      { nombre: "Cálculo II", creditos: 7, requisitos: ["Cálculo I"] },
      { nombre: "Química", creditos: 6, requisitos: [] },
      { nombre: "Comunicación Ingenieril", creditos: 6, requisitos: ["Introducción a la Ing. Industrial"] },
      { nombre: "Fundamentos Teológicos", creditos: 4, requisitos: ["Fundamentos Filosóficos"] }
    ]
  }
  // Puedes seguir agregando el resto como ya lo tienes en tu código actual
];
