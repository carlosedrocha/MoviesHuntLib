import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><BiCameraMovie /> MoviesHuntLib</Link>
            </h2>
            <form>
                <input type="text" placeholder='Search for movies' />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar