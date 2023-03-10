import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//creating a static variable where will get all our data from
const API_URL = 'https://www.omdbapi.com?apikey=d7ab4be0';

const movie1 = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
    "Title": "Mr. Robot",
    "Type": "series",
    "imdbID": "tt4158110",
    "Year": "2015–2019"
}

const App = () => {
    //Trying to map over all our movies from the console.log(data.Search) upto down the <MovieCard />
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //calling a function that is going to fetch our movies
    const searchMovies = async(title) => {
    //aync function means that its going to take some time to fetch these movies
    //our searchMovies is going to accept a search title e.g- superman 
    //our response function is going to call our API 
    //once we get the response we need to get the data from it and we will use the const data function
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    //calling useEffect which will be called as soon as the app reloads
    useEffect(() => {
        searchMovies('Mr Robot');
    }, [])

    return (
        <div className="app">
           <h1> Cinema Space </h1>

           <div className="search">
                <input 
                    placeholder="Search for Movies"
                    value={searchTerm} //statically set to now dynamically set
                    onChange={(e) => setSearchTerm(e.target.value)} //e is the event we are getting from our callback function
                />
                <img 
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className='container'>
                        {/*opening a dynamic block of code then mapping over movies*/}
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}

                    </div>
                ) : //else
                (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }     
        </div>
    );
}

export default App;