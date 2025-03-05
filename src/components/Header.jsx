import axios from "axios"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const Header = () => {

    const { handleSummit, handleSearch } = useGlobalContext()

    // const [searchMovies, setSearchMovies] = useState("")

    // const handleSearch = (e) => {
    //     setSearchMovies(e.target.value)
    // }




    

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning" href="#">BOOFLIX</a>
                    <form className="d-flex" role="search" onSubmit={handleSummit}>
                        <input className="form-control me-2" type="search" placeholder="Search" onChange={handleSearch} aria-label="Search" />
                        <button className="btn btn-outline-success" >Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header