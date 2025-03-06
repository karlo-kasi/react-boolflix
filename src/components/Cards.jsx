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
        let conversion = Math.ceil(vote / 2)

        let fullStar = "★"
        let emptyStar = "☆"

        let result = fullStar.repeat(conversion)
        let result2 = emptyStar.repeat(5 - conversion)

        let somma = result + result2

        return somma

    }

    return (
        <>

            <main className="bg-dark">
                <div className="container">
                    <div className="row">
                        <h2 className="text-white mt-4 fs-1">Film</h2>
                        {
                            movies.map((movie) => {

                                return (
                                    <div className="col-3 h-100 my-3">
                                        <div className="locandine">
                                            <div key={movie.id} className="">
                                                <img className="sfondo" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
                                                <div className="info">
                                                    <h3>{movie.title}</h3>
                                                    <h4>{movie.original_title}</h4>
                                                    <h4>{movie.original_language}</h4>
                                                    <h4>{newStars(movie.vote_average)}</h4>
                                                    <p>{movie.overview}</p>
                                                </div>
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
                        <h2 className="text-white mt-4 fs-1">Serie TV</h2>

                        {
                            series.map((serie) => {

                                return (
                                    <div className="col-3 h-100 my-3">
                                        <div className="locandine">
                                            <div key={series.id} className="card">
                                                <img className="sfondo" src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt={serie.title} />
                                                <div className="info">
                                                    <h3>{serie.name}</h3>
                                                    <h4>{serie.original_title}</h4>
                                                    <h4>{serie.original_language}</h4>
                                                    <h4>{newStars(serie.vote_average)}</h4>
                                                    <p>{serie.overview}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>
            </main>




        </>





    )
}

export default Cards