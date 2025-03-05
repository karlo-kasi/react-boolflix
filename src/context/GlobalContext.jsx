import { createContext, useState, useContext } from "react"
import axios from "axios"

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {  
    
    const [movies, setMovies] = useState([])

    const [searchMovies, setSearchMovies] = useState("")

    const handleSearch = (e) => {
        setSearchMovies(e.target.value)
    }

    const handleSummit = (e) => {
        e.preventDefault()
        getApiData()
        
    }

    const akey = import.meta.env.VITE_TMDB_API_KEY;
    const url = import.meta.env.VITE_TMDB_BASE_URL;
    const token = import.meta.env.VITE_TMDB_API_TOKEN;



    const getApiData = () => {
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
    


    const value = {
        movies,
        getApiData,
        handleSearch,
        handleSummit

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
