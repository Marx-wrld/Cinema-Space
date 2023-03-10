import './App.css';
import React from 'react';
import { useEffect } from 'react';
import SearchIcon from './search.svg';


//creating a static variable where will get all our data from
const API_URL = 'https://www.omdbapi.com?apikey=d7ab4be0';

const App = () => {

    //calling a function that is going to fetch our movies
    const searchMovies = async(title) => {
    //aync function means that its going to take some time to fetch these movies
    //our searchMovies is going to accept a search title e.g- superman 
    //our response function is going to call our API 
    //once we get the response we need to get the data from it and we will use the const data function
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }

    //calling useEffect which will be called as soon as the app reloads
    useEffect(() => {
        searchMovies('Mr Robot');
    }, [])

    return (
        <div className="app">
           <h1> MovieLand </h1>

           <div className="search">
                <input 
                    placeholder="Search for Movies"
                />
            </div>
        </div>
    );
}

export default App;