import { fetchMovies } from '../http/movie.js';

export default function Search({
  $target,
  initialState,
  onChange,
}) {
  const $header = document.createElement('header');
  $target.appendChild($header);

  this.state = initialState;

  this.setState = nextState => {
    this.state = {
      ...this.state,
      ...nextState
    };
    this.render();
  };

  this.render = () => {
    $header.innerHTML = `
      <h1>π¬ μν κ²μ</h1>
      <form>
        <input type="text" placeholder="μν μ λͺ©μ μλ ₯ν΄μ£ΌμΈμ." value="${this.state.keyword}" />
      </form>
    `;
  };

  $header.addEventListener('keyup', e => {
    onChange(e.target.value);
  });

  this.render();
}
