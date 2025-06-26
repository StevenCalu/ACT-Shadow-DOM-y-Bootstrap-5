class CalculadoraBasica extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/public/lib/bootstrap-5.3.6-dist/css/bootstrap.min.css">
      <div class="container mt-4">
        <div class="card border-primary shadow-sm rounded-4">
          <div class="card-header text-center bg-primary text-white fw-semibold">
            Calculadora
          </div>
          <div class="card-body">
            <form class="row gy-2 gx-3 align-items-center justify-content-center">
              <div class="col-sm-3">
                <input type="number" id="num1" class="form-control" placeholder="Número 1">
              </div>
              <div class="col-sm-2">
                <select id="op" class="form-select">
                  <option value="suma">+</option>
                  <option value="resta">-</option>
                  <option value="multi">*</option>
                  <option value="divi">/</option>
                </select>
              </div>
              <div class="col-sm-3">
                <input type="number" id="num2" class="form-control" placeholder="Número 2">
              </div>
              <div class="col-sm-3">
                <button type="button" id="btn" class="btn btn-success w-100">Calcular</button>
              </div>
            </form>

            <div id="res" class="mt-4 text-center fs-5 text-primary"></div>

            <h6 class="mt-4 border-bottom pb-1">Historial</h6>
            <ul id="histo" class="list-group list-group-flush small">
              <li class="list-group-item text-muted">No existen registros</li>
            </ul>
          </div>
        </div>
      </div>
    `;

    this.shadowRoot.getElementById('btn').addEventListener('click', () => {
      this.calculo();
    });
  }

  calculo() {
    let n1 = this.shadowRoot.getElementById('num1').value;
    let n2 = this.shadowRoot.getElementById('num2').value;
    let operacion = this.shadowRoot.getElementById('op').value;
    let resultado = this.shadowRoot.getElementById('res');
    let historial = this.shadowRoot.getElementById('histo');
  }
}

