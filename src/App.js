import './App.css';
import MovieCard from './Components/MovieCard'; 
import MovieList from './Components/MovieList'
import { useState } from 'react';
import { Nav} from "react-bootstrap";
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import Trailer from './Components/Trailer';
import { BrowserRouter as Router, Switch, Route,Link, useRouteMatch,useParams} from "react-router-dom";
function App ()  {
    const [movie,setMovie]=useState( [
      {
        'id': "01",
      'title': "The Hangover",
      'description': " is a 2009 American black comedy film directed by Todd Phillips, co-produced with Daniel Goldberg, and written by Jon Lucas and Scott Moore. It is the first installment in The Hangover trilogy.",
      'posterUrl': "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg",
      'rating': "4.2",
      'trailerLink':"https://www.youtube.com/embed/tcdUhdOlz9M"
      },
      {
        'id': "02",
      'title': "The Paramedic",
      'description': " is a 2020 Spanish thriller film directed by Carles Torras, written by David Desola and Hèctor Hernández Vicens and starring Mario Casas and Déborah François. ",
      'posterUrl': "https://upload.wikimedia.org/wikipedia/en/0/0a/The_Paramedic.jpg",
      'rating': "3.5",
      'trailerLink':"https://www.youtube.com/embed/28kIf_9kbQk"

      },
      {
        'id':"03",
        'title': "The Occupant",
        'description': " is a Spanish 2020 thriller directed by David Pastor and Àlex Pastor, and written by David Pastor and Àlex Pastor. The plot revolves around Javier Muñoz, a former executive who is forced to sell his apartment because of unemployment.",
        'posterUrl': "http://www.albiladdailyeng.com/wp-content/uploads/2020/03/1-4.jpg",
        'rating': "4",
        'trailerLink':"https://www.youtube.com/embed/FxYsrX-1YPA"

      },
      {
          'id':"04",
          'title': "Bad Boys For Life",
          'description': " is a 2020 American action comedy film that is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith and Martin Lawrence reprise their starring roles in the film, which is directed by Adil & Bilall and written by Chris Bremner.",
          'posterUrl': "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
          'rating': "3.5",
          'trailerLink':"https://www.youtube.com/embed/jKCj3XuPG8M"

      },
      {
            'id':"05",
            'title': "Bird Box",
            'description': " is a 2018 American post-apocalyptic horror thriller film directed by Susanne Bier, following a screenplay written by Eric Heisserer, and based on the 2014 novel of the same name by Josh Malerman.",
            'posterUrl': "https://upload.wikimedia.org/wikipedia/en/b/bd/Bird_Box_%28film%29.png",
            'rating': "4.3",
            'trailerLink':"https://www.youtube.com/embed/o2AsIXSh2xo"

      },
      {
              'id':"06",
              'title': "After",
              'description': "  is a 2019 American romantic drama film directed by Jenny Gage, based on the 2014 new adult fiction novel of the same name by Anna Todd, originally released as a fanfiction on Wattpad.",
              'posterUrl': "https://img4.cdn.cinoche.com/images/d4838e820f582291e0bdf4433f3e167c.jpg",
              'rating': "2.9",
              'trailerLink':"https://www.youtube.com/embed/95BKJA2QhCc"

      }
      ])
      const [searchMovie,setSearchMovie]= useState(movie)
      const handleSearch=(search)=>{
          setSearchMovie(movie.filter((item) => { return item.title.toLowerCase().includes(search.toLowerCase())  || item.rating === search; }))
        }
  
      const addMovie=(film)=>{
        setMovie([...movie, film]);
        }
    return (
      <>
      <Router>
      <div>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      </ul>
      <hr />
      <Switch>
      <Route exact path="/">
      <br></br>
      <Filter movies={movie} FnSearch={handleSearch} ></Filter>
      <br></br>
      <AddMovie addMovie={addMovie}></AddMovie>
      <br></br>
      <MovieList movies={searchMovie}></MovieList>
      </Route>
      <Route path="/Trailer/:id">
      <Trailer  movies={movie}></Trailer>
      </Route>
      </Switch>
      </div>
      </Router>
      </>
  );
};

export default App;
