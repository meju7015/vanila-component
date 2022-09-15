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
      <h1>🎬 영화 검색</h1>
      <form>
        <input type="text" placeholder="영화 제목을 입력해주세요." value="${this.state.keyword}" />
      </form>
    `;
  };

  $header.addEventListener('keyup', e => {
    onChange(e.target.value);
  });

  this.render();
}
