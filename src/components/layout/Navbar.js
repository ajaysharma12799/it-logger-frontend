import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { searchLog } from '../../actions/logActions';
import { PropTypes } from 'prop-types';
const Navbar = ({searchLog}) => {
    const [clicked, setClicked] = useState(false);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        searchLog(text);
    }

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
                                <input className="form-control me-2" value={text} onChange={e => setText(e.target.value)} placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-primary" onClick={e => handleSubmit(e)}>Search</button>
                            </form>
                            <div className="log-button btn btn-success ms-2">
                                <Link to="/AddLog">Add Logs</Link>
                            </div>
                            <div className="add-button btn btn-success ms-2">
                                <Link to="/AddTech">Add Technician</Link>
                            </div>
                            <div className="user-button btn btn-success ms-2">
                                <Link to="/SeeTechnicians">See All Technicians</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

Navbar.prototype = {
    searchLog: PropTypes.func.isRequired,
}

export default connect(null, {searchLog})(Navbar)
