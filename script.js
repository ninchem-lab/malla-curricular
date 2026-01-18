const cursos = {
  "Matemática Básica I": [],
  "Matemática Básica II": ["Matemática Básica I"],

  "Cálculo Diferencial": [],
  "Cálculo Integral": ["Cálculo Diferencial"],
  "Cálculo Multivariable": ["Cálculo Integral"],

  "Física General": [],
  "Física I": ["Física General"],
  "Electrónica I": ["Física I"],
  "Electrónica II": ["Electrónica I"],
  "Automatización de Procesos": ["Electrónica II"],

  "Estadística General": [],
  "Inferencia Estadística": ["Estadística General"],

  "Lenguaje de Programación I": [],
  "Lenguaje de Programación II": ["Lenguaje de Programación I"],

  "Ingeniería de Software I": ["Lenguaje de Programación I"],
  "Ingeniería de Software II": ["Ingeniería de Software I"],

  "Sistemas de Bases I": [],
  "Sistemas de Bases II": ["Sistemas de Bases I"],
  "Inteligencia de Negocios": ["Sistemas de Bases II"],
  "Minería de Datos": ["Inteligencia de Negocios"],

  "Arquitectura del Computador": ["Teoría de la Computación"],
  "Sistemas Operativos": ["Arquitectura del Computador"],
  "Redes de Computadoras I": ["Sistemas Operativos"],
  "Redes de Computadoras II": ["Redes de Computadoras I"],

  "Investigación de Operaciones I": ["Cálculo Multivariable"],
  "Investigación de Operaciones II": ["Investigación de Operaciones I"],
  "Simulación": ["Investigación de Operaciones II"],

  "Seminario de Tesis I": [],
  "Seminario de Tesis II": ["Seminario de Tesis I"],
  "Seminario de Tesis III": ["Seminario de Tesis II"],

  "Prácticas Preprofesionales I": [],
  "Prácticas Preprofesionales II": ["Prácticas Preprofesionales I"]
};

const estado = JSON.parse(localStorage.getItem("estadoCursos")) || {};

const malla = document.getElementById("malla");

function puedeDesbloquear(requisitos) {
  return requisitos.every(r => estado[r]);
}

function render() {
  malla.innerHTML = "";

  Object.keys(cursos).forEach(nombre => {
    const div = document.createElement("div");
    div.classList.add("curso");

    const requisitos = cursos[nombre];

    if (estado[nombre]) {
      div.classList.add("aprobado");
    } else if (requisitos.length > 0 && !puedeDesbloquear(requisitos)) {
      div.classList.add("bloqueado");
    }

    div.textContent = nombre;

    div.onclick = () => {
      if (div.classList.contains("bloqueado") || estado[nombre]) return;
      estado[nombre] = true;
      localStorage.setItem("estadoCursos", JSON.stringify(estado));
      render();
    };

    malla.appendChild(div);
  });
}

render();
