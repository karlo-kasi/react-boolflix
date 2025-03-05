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


    return (
        <>


            <div className="container">
                <div className="row">
                    <h2>Film</h2>
                    {
                        movies.map((movie) => {
                            return (
                                <div className="col-3 my-3">
                                    <div key={movie.id} className="card">
                                        <img className="card-img-top" />
                                        <div className="card-body">
                                            <h3 className="card-title">{movie.title}</h3>
                                            <h4 className="card-title">{movie.original_title}</h4>
                                            <h4 className="card-title">{movie.original_language}</h4>
                                            <h4 className="card-title">{movie.vote_average}</h4>
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
                        series.map((movie) => {
                            return (
                                <div className="col-3 my-3">
                                    <div key={movie.id} className="card">
                                        <img className="card-img-top" />
                                        <div className="card-body">
                                            <h3 className="card-title">{movie.name}</h3>
                                            <h4 className="card-title">{movie.original_title}</h4>
                                            <h4 className="card-title">{movie.original_language}</h4>
                                            <h4 className="card-title">{movie.vote_average}</h4>
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