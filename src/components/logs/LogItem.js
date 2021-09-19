import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteLog, setCurrentLog } from '../../actions/logActions';
import { toast } from 'react-toastify';


const LogItem = ({log, deleteLog, setCurrentLog}) => {
    const {message, attention, date, tech, id} = log;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className={attention ? "text-danger fw-bold" : "text-primary fw-bold"}>
                    {message}
                </div>
                Technician : {tech}, Date : <Moment format="DD/MM/YYYY">{date}</Moment>
            </div>
            <div className="me-1">
                <Link onClick={e => setCurrentLog(log)} className="btn btn-primary" to="/UpdateLog"><i className="fas fa-pencil-alt"></i></Link>
            </div>
            <div className="ms-1">
                <button className="btn btn-danger" onClick={e => {
                    deleteLog(id);
                    toast.success("Log Deleted Successfully");
                }}><i className="fas fa-trash"></i></button>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrentLog: PropTypes.func.isRequired,
}

export default connect(null, {deleteLog, setCurrentLog})(LogItem)