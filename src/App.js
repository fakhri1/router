import './App.css';
import NavBar from './components/Navbar';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import Add from './components/Add';
import {movies} from './components/Movies';
import {useState} from 'react';
import Details from './components/Details';
import {Route,Switch} from 'react-router-dom';

//console.log(movies);
function App() {
const [movieList,setmovieList]=useState(movies)
console.log(movieList);

  return (

    <div className="App">
      <NavBar/>
      <Filter/>
      <Add/> 
      <Switch>
      
      <Route exact path="/" render={()=> <MovieList movieList={movieList}  />} />
      <Route path="/Details/:id" render={ (props) => <Details {...props} list={movies} />   } />
      </Switch>
    </div>
  );
}

export default App;