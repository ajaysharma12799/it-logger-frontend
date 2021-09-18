import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand display-4 fw-bold" to="/">IT-Logger</Link>
                    <button onClick={e => setClicked(!clicked)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        {clicked ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex ms-auto me-1">
                            <form className="d-flex">
                                <input className="form-control me-2" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-primary">Search</button>
                            </form>
                            <div className="floating-add-button btn btn-success ms-2">
                                <Link to="/AddTech"><i className="fas fa-plus text-white"></i></Link>
                            </div>
                            <div className="floating-user-button btn btn-success ms-2">
                                <Link to="/SeeTechnicians"><i className="fas fa-user-alt text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
