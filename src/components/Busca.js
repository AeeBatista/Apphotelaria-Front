export default function Busca() {
  const busca = document.createElement('div');
  busca.className = "busca-container d-flex justify-content-center align-items-center mt-4 px-3";

  busca.innerHTML = `
    <form class="busca-form d-flex flex-wrap shadow-sm rounded-4 p-2 bg-white">

      <!-- Campo Local -->
      <div class="busca-item flex-grow-1">
        <label class="form-label small mb-0 text-muted"><i class="bi bi-geo-alt"></i> Para onde você vai?</label>
        <input type="text" class="form-control border-0" placeholder="Digite o destino">
      </div>

      <!-- Campo Datas -->
      <div class="busca-item position-relative">
        <label class="form-label small mb-0 text-muted"><i class="bi bi-calendar-event"></i> Datas</label>
        <input type="text" id="dataInput" class="form-control border-0" placeholder="Escolha a data" readonly>
        <div id="calendario" class="calendar d-none position-absolute p-3" style="z-index:1000; width: 340px; border-radius: 20px; background: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.2);"></div>
      </div>

      <!-- Campo Viajantes -->
      <div class="busca-item">
        <label class="form-label small mb-0 text-muted"><i class="bi bi-people"></i> Viajantes</label>
        <input type="text" class="form-control border-0" placeholder="2 viajantes, 1 quarto">
      </div>

      <!-- Botão -->
      <button type="submit" class="btn btn-dark rounded-pill px-4 ms-2">
        Buscar
      </button>
    </form>
  `;

  const dataInput = busca.querySelector("#dataInput");
  const calendario = busca.querySelector("#calendario");

  let startDate = new Date();
  let tempStart = null;
  let tempEnd = null;
  let selectedStart = null;
  let selectedEnd = null;

  function formatDate(date) {
    return `${date.getDate().toString().padStart(2,'0')}/${(date.getMonth()+1).toString().padStart(2,'0')}/${date.getFullYear()}`;
  }

  function formatDateRange(start, end) {
    if (!start) return '';
    if (!end) return formatDate(start);
    return `${formatDate(start)} - ${formatDate(end)}`;
  }

  function criarCalendarioMes(ano, mes) {
    const firstDay = new Date(ano, mes, 1).getDay();
    const diasNoMes = new Date(ano, mes + 1, 0).getDate();

    const mesContainer = document.createElement("div");
    mesContainer.style.textAlign = "center";

    const titulo = document.createElement("div");
    titulo.textContent = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(new Date(ano, mes));
    titulo.style.fontWeight = "600";
    titulo.style.marginBottom = "5px";
    mesContainer.appendChild(titulo);

    const semana = ["D","S","T","Q","Q","S","S"];
    const semanaRow = document.createElement("div");
    semanaRow.style.display = "flex";
    semanaRow.style.justifyContent = "space-between";
    semana.forEach(dia => {
      const d = document.createElement("div");
      d.textContent = dia;
      d.style.width = "36px";
      d.style.fontSize = "12px";
      d.style.color = "#888";
      semanaRow.appendChild(d);
    });
    mesContainer.appendChild(semanaRow);

    const diasContainer = document.createElement("div");
    diasContainer.style.display = "flex";
    diasContainer.style.flexWrap = "wrap";
    diasContainer.style.justifyContent = "space-between";

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div");
      empty.style.width = "36px";
      empty.style.height = "36px";
      diasContainer.appendChild(empty);
    }

    for (let dia = 1; dia <= diasNoMes; dia++) {
      const diaElem = document.createElement("div");
      diaElem.textContent = dia;
      diaElem.style.width = "36px";
      diaElem.style.height = "36px";
      diaElem.style.lineHeight = "36px";
      diaElem.style.borderRadius = "50%";
      diaElem.style.cursor = "pointer";
      diaElem.style.margin = "2px 0";
      diaElem.style.transition = "all 0.2s";
      diaElem.style.boxShadow = "0 1px 5px rgba(0,0,0,0.1)";

      const diaAtual = new Date(ano, mes, dia);

      function marcarDia(elem) {
        if (tempStart && tempEnd && diaAtual >= tempStart && diaAtual <= tempEnd) {
          elem.style.background = "linear-gradient(90deg, #343a40, #6c757d)";
          elem.style.color = "#fff";
        } else if (tempStart && diaAtual.getTime() === tempStart.getTime()) {
          elem.style.backgroundColor = "#343a40";
          elem.style.color = "#fff";
        } else {
          elem.style.background = "";
          elem.style.color = "";
        }
      }

      marcarDia(diaElem);

      diaElem.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!tempStart || (tempStart && tempEnd)) {
          tempStart = diaAtual;
          tempEnd = null;
        } else {
          const diff = Math.ceil((diaAtual - tempStart)/(1000*60*60*24));
          if (diff >=0 && diff <=13) {
            tempEnd = diaAtual;
          } else if (diff < 0 && diff >= -13) {
            tempEnd = tempStart;
            tempStart = diaAtual;
          } else {
            tempStart = diaAtual;
            tempEnd = null;
          }
        }
        renderCalendario();
      });

      // Hover efeito centopeia
      diaElem.addEventListener("mouseenter", () => {
        if (tempStart && !tempEnd) {
          for (const d of diasContainer.children) {
            const num = parseInt(d.textContent);
            if (!isNaN(num)) {
              const tempDate = new Date(ano, mes, num);
              if (tempDate >= tempStart && tempDate <= diaAtual) {
                d.style.background = "linear-gradient(90deg, #ededeeff, #6c3b8cff)";
                d.style.color = "#fff";
              } else if (tempDate !== tempStart) {
                d.style.background = "";
                d.style.color = "";
              }
            }
          }
        }
      });
      diaElem.addEventListener("mouseleave", renderCalendario);

      diasContainer.appendChild(diaElem);
    }

    mesContainer.appendChild(diasContainer);
    return mesContainer;
  }

  function renderCalendario() {
    calendario.innerHTML = "";

    const nav = document.createElement("div");
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.marginBottom = "10px";

    const prev = document.createElement("button");
    prev.textContent = "<";
    prev.className = "btn btn-sm btn-light";
    prev.addEventListener("click", (e) => {
      e.preventDefault();
      startDate.setMonth(startDate.getMonth() - 1);
      renderCalendario();
    });

    const next = document.createElement("button");
    next.textContent = ">";
    next.className = "btn btn-sm btn-light";
    next.addEventListener("click", (e) => {
      e.preventDefault();
      startDate.setMonth(startDate.getMonth() + 1);
      renderCalendario();
    });

    nav.appendChild(prev);
    nav.appendChild(next);
    calendario.appendChild(nav);

    calendario.appendChild(criarCalendarioMes(startDate.getFullYear(), startDate.getMonth()));

    const okBtn = document.createElement("button");
    okBtn.textContent = "OK";
    okBtn.className = "btn btn-dark mt-3 w-100";
    okBtn.addEventListener("click", (e) => {
      e.preventDefault();
      selectedStart = tempStart;
      selectedEnd = tempEnd || tempStart;
      dataInput.value = formatDateRange(selectedStart, selectedEnd);
    });
    calendario.appendChild(okBtn);
  }

  dataInput.addEventListener("click", (e) => {
    e.stopPropagation();
    calendario.classList.toggle("d-none");
    renderCalendario();
  });

  calendario.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", () => {
    calendario.classList.add("d-none");
  });

  return busca;
}
