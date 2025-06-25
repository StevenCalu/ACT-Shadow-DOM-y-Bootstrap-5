class CalculadoraBasica extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/public/lib/bootstrap-5.3.6-dist/css/bootstrap.min.css">
      <div>
        <h3>Calculadora</h3>
        <form>
          <input type="number" id="num1" placeholder="número 1">
          <select id="op">
            <option value="suma">+</option>
            <option value="resta">-</option>
            <option value="multi">*</option>
            <option value="divi">/</option>
          </select>
          <input type="number" id="num2" placeholder="número 2">
          <button type="button" id="btn">calcular</button>
        </form>
        <div id="res"></div>
        <h5>Historial</h5>
        <ul id="histo">
          <li>No existen registros/li>
        </ul>
      </div>
    `;

    this.shadowRoot.getElementById('btn').addEventListener('click', () => {
    this.calculo();
    });
  }
  
}
