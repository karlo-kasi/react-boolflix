import { createContext, useState, useContext } from "react"
import axios from "axios"

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {  
    
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([]) 

    const [searchMovies, setSearchMovies] = useState("")

    const handleSearch = (e) => {
        setSearchMovies(e.target.value)
    }

    const handleSummit = (e) => {
        e.preventDefault()
        getApiDataMovies()
        getApiDataSeries()
        
    }

    const akey = import.meta.env.VITE_TMDB_API_KEY;
    const url = import.meta.env.VITE_TMDB_BASE_URL;
    const token = import.meta.env.VITE_TMDB_API_TOKEN;


    //Prima chiamata API - Film
    const getApiDataMovies = () => {
        const options = {
            method: 'GET',
            url: `${url}movie?query=${searchMovies}&include_adult=false&language=it-IT&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
    
        axios.request(options)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error(`Errore API ${err}`));
    }
    
    //Seconda chiamata API - SerieTV
    const getApiDataSeries = () => {
        const options = {
            method: 'GET',
            url: `${url}tv?query=${searchMovies}&include_adult=false&language=it-IT&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
    
        axios.request(options)
            .then(res => setSeries(res.data.results))
            .catch(err => console.error(`Errore API ${err}`));
    }


    const value = {
        movies,
        getApiDataMovies,
        handleSearch,
        handleSummit,
        series,
        getApiDataSeries

    }   
    
    
    
    return(
    <GlobalContext.Provider value={ value }>
        {children}
    </GlobalContext.Provider>
)
}

// custom hooks
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
