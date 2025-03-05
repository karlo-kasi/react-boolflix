import axios from "axios"
import { useEffect,useState } from "react"

const Cards = () => {

    const [movies,setMovies] = useState([])
    

    const apiKey= process.env.REACT_APP_TMDB_API_KEY
    const apiUrl= process.env.REACT_APP_TMDB_API_KEY

    useEffect(()=> {

    }, [] )

    return(

        <div className="card">
            <img className="card-img-top" src="" alt="Title" />
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                
            </div>
        </div>
        
    )
}