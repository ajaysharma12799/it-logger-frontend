import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteLog, setCurrentLog } from '../../actions/logActions';
import { toast } from 'react-toastify';


const LogItem = ({log, deleteLog, setCurrentLog}) => {
    const {message, attention, date, technician, _id} = log;
    return (
        <div className={attention ? "accordion accordion-flush text-danger mt-2" : "accordion accordion-flush text-primary mt-2"} id="accordionFlush">
            <div className={attention ? "accordion-item" : "accordion-item"}>
                <h2 className="accordion-header" id={`flush-heading${_id}`}>
                    <button className={attention ? "accordion-button collapsed bg-danger text-white" : "accordion-button collapsed bg-primary text-white"} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${_id}`} aria-expanded="false" aria-controls={`flush-collapse${_id}`}>
                        {message}
                    </button>
                </h2>
                <div id={`flush-collapse${_id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${_id}`} data-bs-parent="#accordionFlush">
                    <div className="accordion-body">
                        Technician : {technician}
                        <br/>
                        Priority : {attention ? "High" : "Basic"}
                        <br/>
                        Date : <Moment format="DD/MM/YYYY">{date}</Moment>
                    </div>
                    <div className="accordian-body">
                        <div className="d-flex justify-content-between">
                            <Link onClick={e => setCurrentLog(log)} className="btn btn-primary" to="/UpdateLog"><i className="fas fa-pencil-alt"></i></Link>
                            <button className="btn btn-danger" onClick={e => {
                                deleteLog(_id); toast.success("Log Deleted Successfully");
                            }}><i className="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrentLog: PropTypes.func.isRequired,
}

export default connect(null, {deleteLog, setCurrentLog})(LogItem)
