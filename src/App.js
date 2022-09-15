import Search from './components/search.js';
import MovieList from './components/movieList.js';

import { fetchMovies } from './http/movie.js';
import debounce from './plugins/debounce.js';

export default function App({ $target }) {
  this.state = {
    movieList: {}
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    };
  }

  const search = new Search({
    $target,
    initialState: {
      keyword: '',
      movieList: this.state.movieList
    },
    onChange: debounce(async (keyword) => {

        this.setState({
          movieList: await fetchMovies({ keyword })
        });

        movieList.setState({
          movieList: this.state.movieList
        });
    }, 500)
  });

  const movieList = new MovieList({
    $target,
    initialState: {
      movieList: this.state.movieList,
    }
  });
}
