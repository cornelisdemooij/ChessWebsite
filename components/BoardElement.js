import { LitElement, html, css } from 'lit';

class BoardElement extends LitElement {
  static get styles() {
    return css`
      #container {
        height: 80vmin;
        width: 80vmin;
      }

      table {
        height: 100%;
        width: 100%;
        table-layout: fixed; /* for equal spacing */
      }

      tr:nth-child(even) td:nth-child(even) {background: #FFF}
      tr:nth-child(even) td:nth-child(odd) {background: #CCC}
      tr:nth-child(odd) td:nth-child(even) {background: #CCC}
      tr:nth-child(odd) td:nth-child(odd) {background: #FFF}
    `;
  }

  static get properties() {
    return {
      height: { type: Number },
      width: { type: Number },

      // Array of rows, each containing multiple squares, containing pieces:
      grid: { type: Array }
    };
  }

  constructor() {
    super();
    this.height = 8;
    this.width = 8;
    this.grid = Array(this.height);
    for (let i = 0; i < this.height; i++) {
      this.grid[i] = Array(this.width);
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j] = "-";
      }
    }
  }

  render() {
    return html`
      <div id="container">
        <table>
          ${this.grid.map((row, rowIndex) => 
            html`<tr>${
              row.map((column, columnIndex) => 
                html`<td>${this.rowIndexToNumber(rowIndex)}${this.columnIndexToLetter(columnIndex)}</td>`
              )
            }</tr>`
          )}
        </table>
      </div>
    `;
  }

  rowIndexToNumber(rowIndex) {
    return this.height - rowIndex;
  }
  columnIndexToLetter(columnIndex) {
    return String.fromCharCode(65 + columnIndex)
  }
}

customElements.define('board-element', BoardElement);