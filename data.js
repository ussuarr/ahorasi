// data.js
export const malla = [
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
  },
  {
    semestre: "III",
    asignaturas: [
      { nombre: "Cálculo III", creditos: 7, requisitos: ["Cálculo II"] },
      { nombre: "Estática y Dinámica", creditos: 8, requisitos: ["Cálculo I"] },
      { nombre: "Probabilidades", creditos: 6, requisitos: ["Álgebra", "Cálculo I"] },
      { nombre: "Ética Profesional", creditos: 4, requisitos: ["Fundamentos Filosóficos"] }
    ]
  },
  {
    semestre: "IV",
    asignaturas: [
      { nombre: "Ecuaciones Diferenciales", creditos: 6, requisitos: ["Cálculo III"] },
      { nombre: "Física II", creditos: 8, requisitos: ["Física I"] },
      { nombre: "Contabilidad y Costos", creditos: 6, requisitos: [] },
      { nombre: "Modelación y Simulación", creditos: 6, requisitos: ["Probabilidades"] }
    ]
  },
  {
    semestre: "V",
    asignaturas: [
      { nombre: "Investigación de Operaciones", creditos: 6, requisitos: ["Modelación y Simulación"] },
      { nombre: "Mecánica de Materiales", creditos: 6, requisitos: ["Física II"] },
      { nombre: "Tecnología de Materiales", creditos: 6, requisitos: ["Química"] },
      { nombre: "Gestión Organizacional", creditos: 6, requisitos: [] },
      { nombre: "Formación Ciudadana", creditos: 4, requisitos: [] }
    ]
  },
  {
    semestre: "VI",
    asignaturas: [
      { nombre: "Optimización", creditos: 6, requisitos: ["Investigación de Operaciones"] },
      { nombre: "Procesos de Manufactura", creditos: 6, requisitos: ["Tecnología de Materiales"] },
      { nombre: "Gestión de Personas", creditos: 6, requisitos: ["Gestión Organizacional"] },
      { nombre: "Gestión de la Producción", creditos: 6, requisitos: ["Procesos de Manufactura"] }
    ]
  },
  {
    semestre: "VII",
    asignaturas: [
      { nombre: "Estadística", creditos: 6, requisitos: ["Probabilidades"] },
      { nombre: "Evaluación de Proyectos", creditos: 6, requisitos: ["Contabilidad y Costos"] },
      { nombre: "Electivo Profesional I", creditos: 6, requisitos: [] },
      { nombre: "Ética y Responsabilidad Social", creditos: 4, requisitos: ["Ética Profesional"] }
    ]
  },
  {
    semestre: "VIII",
    asignaturas: [
      { nombre: "Logística", creditos: 6, requisitos: ["Gestión de la Producción"] },
      { nombre: "Gestión de Calidad", creditos: 6, requisitos: ["Optimización"] },
      { nombre: "Electivo Profesional II", creditos: 6, requisitos: ["Electivo Profesional I"] },
      { nombre: "Derecho Empresarial", creditos: 4, requisitos: [] }
    ]
  },
  {
    semestre: "IX",
    asignaturas: [
      { nombre: "Formulación y Evaluación de Proyectos", creditos: 6, requisitos: ["Evaluación de Proyectos"] },
      { nombre: "Gestión de Procesos Industriales", creditos: 6, requisitos: ["Gestión de Calidad"] },
      { nombre: "Electivo Profesional III", creditos: 6, requisitos: ["Electivo Profesional II"] },
      { nombre: "Proyecto Integrador de Procesos Industriales", creditos: 8, requisitos: ["Gestión de Procesos Industriales"] }
    ]
  },
  {
    semestre: "X",
    asignaturas: [
      { nombre: "Sustentabilidad", creditos: 6, requisitos: [] },
      { nombre: "Gestión de Recursos Humanos", creditos: 6, requisitos: ["Gestión de Personas"] },
      { nombre: "Gestión de Negocios", creditos: 6, requisitos: ["Gestión Organizacional"] },
      { nombre: "Electivo Profesional IV", creditos: 6, requisitos: ["Electivo Profesional III"] }
    ]
  },
  {
    semestre: "XI",
    asignaturas: [
      { nombre: "Innovación y Emprendimiento", creditos: 6, requisitos: [] },
      { nombre: "Electivo Profesional V", creditos: 6, requisitos: ["Electivo Profesional IV"] },
      { nombre: "Proyecto Integrador de RRHH y Negocios", creditos: 8, requisitos: ["Gestión de RRHH", "Gestión de Negocios"] }
    ]
  },
  {
    semestre: "XII",
    asignaturas: [
      { nombre: "Práctica Profesional", creditos: 10, requisitos: ["Proyecto Integrador de RRHH y Negocios"] },
      { nombre: "Trabajo de Titulación", creditos: 10, requisitos: ["Proyecto Integrador de RRHH y Negocios"] }
    ]
  }
];
