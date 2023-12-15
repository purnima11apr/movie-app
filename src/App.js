import React , {useState} from "react";
import MovieDisplay from "./components/MovieDisplay";
import MovieList from "./components/MovieList";
import "./style.css";

const App = () => {

    const [selectedMovie , setSelectedMovie] = useState(null);
    console.log(selectedMovie);

    return(
        <div>
            <h1>Movies App</h1>
            <div className="main">
           <MovieList updateSelectedMovie={setSelectedMovie} />

           <MovieDisplay selectedMovie={selectedMovie}/>
           </div>
          </div>
    );
}

export default App;