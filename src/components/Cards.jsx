import axios from "axios"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const Cards = () => {

    const { movies, getApiDataMovies, series, getApiDataSeries } = useGlobalContext()
    // const [movies, setMovies] = useState([])


    // const akey = import.meta.env.VITE_TMDB_API_KEY;
    // const url = import.meta.env.VITE_TMDB_BASE_URL;
    // const token = import.meta.env.VITE_TMDB_API_TOKEN;



    useEffect(() => {

        getApiDataMovies()
        getApiDataSeries()
        // const options = {
        //     method: 'GET',
        //     url: `${url}movie?query=batman&include_adult=false&language=it-IT&page=1`,
        //     headers: {
        //         accept: 'application/json',
        //         Authorization: `Bearer ${token}`
        //     }
        // };

        // axios.request(options)
        //     .then(res => setMovies(res.data.results))
        //     .catch(err => console.error(`Errore API ${err}`));
    }, [])

    
    function newStars(vote) {
        let conversion =   Math.ceil(vote / 2)
        
        let fullStar = "★"
        let emptyStar = "☆"

        let result = fullStar.repeat(conversion)
        let result2 = emptyStar.repeat(5-conversion)

        let somma = result + result2

        return somma
        
    }

    return (
        <>


            <div className="container">
                <div className="row">
                    <h2>Film</h2>
                    {
                        movies.map((movie) => {
                                                               
                            return (
                                <div className="col-4 my-3">
                                    <div key={movie.id} className="card">
                                        <img className="card-img-top" />
                                        <div className="card-body">
                                            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
                                            <h3 className="card-title">{movie.title}</h3>
                                            <h4 className="card-title">{movie.original_title}</h4>
                                            <h4 className="card-title">{movie.original_language}</h4>
                                            <h4 className="card-title">{newStars(movie.vote_average)}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>


            <div className="container">
                <div className="row">
                    <h2>Serie TV</h2>

                    {
                        series.map((serie) => {

                            return (
                                <div className="col-4 my-3">
                                    <div key={series.id} className="card">
                                        <img className="card-img-top" />
                                        <div className="card-body">
                                            <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt={serie.title} />
                                            <h3 className="card-title">{serie.name}</h3>
                                            <h4 className="card-title">{serie.original_title}</h4>
                                            <h4 className="card-title">{serie.original_language}</h4>

                                            <h4 className="card-title">{newStars(serie.vote_average)}</h4>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>


            </div>

        </>





    )
}

export default Cards