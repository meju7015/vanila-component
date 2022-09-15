 export default function MovieList({
   $target,
   initialState,
  }) {
    const $movieList = document.createElement('ul');
    $target.appendChild($movieList);

    this.state = initialState;

    this.setState = nextState => {
      this.state = {
        ...this.state,
        ...nextState
      };
      this.render();
    };

    this.render = () => {
      if (this.state.movieList) {
        const { Search } = this.state.movieList;
        if (Search && Search.length > 0) {
          $movieList.innerHTML = Search.map(movie => `
            <li>
              <img src="${movie.Poster}"  alt=""/>
              <h2>${movie.Title}</h2>
              <p>${movie.Year}</p>
            </li>
          `).join('')
        } else {
          $movieList.innerHTML = '영화를 찾을 수 없습니다.';
        }
      }
    };

    this.render();
 }
