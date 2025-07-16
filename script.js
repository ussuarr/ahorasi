let aprobadas = [];

function calcularCreditos() {
  return malla
    .flatMap(s => s.asignaturas)
    .filter(a => aprobadas.includes(a.nombre))
    .reduce((acc, a) => acc + a.creditos, 0);
}

function requisitosCumplidos(reqs) {
  return reqs.every(r => aprobadas.includes(r));
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  const creditos = calcularCreditos();
  document.getElementById("creditos").textContent = `Créditos aprobados: ${creditos}`;

  malla.forEach(sem => {
    const titulo = document.createElement("div");
    titulo.className = "semestre";
    titulo.textContent = `Semestre ${sem.semestre}`;
    contenedor.appendChild(titulo);

    sem.asignaturas.forEach(asig => {
      const aprobada = aprobadas.includes(asig.nombre);
      const disponible = requisitosCumplidos(asig.requisitos);
      const estado = aprobada ? "aprobada" : disponible ? "disponible" : "bloqueada";

      const card = document.createElement("div");
      card.className = `asignatura ${estado}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = aprobada;
      checkbox.disabled = estado === "bloqueada";
      checkbox.onchange = () => {
        if (checkbox.checked) {
          aprobadas.push(asig.nombre);
        } else {
          aprobadas = aprobadas.filter(a => a !== asig.nombre);
        }
        renderMalla();
      };

      const nombre = document.createElement("p");
      nombre.textContent = asig.nombre;

      const cred = document.createElement("p");
      cred.textContent = `Créditos: ${asig.creditos}`;

      card.appendChild(checkbox);
      card.appendChild(nombre);
      card.appendChild(cred);

      if (asig.requisitos.length > 0) {
        const req = document.createElement("p");
        req.textContent = `Requiere: ${asig.requisitos.join(", ")}`;
        req.style.fontSize = "0.8em";
        req.style.color = "#555";
        card.appendChild(req);
      }

      contenedor.appendChild(card);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderMalla);
