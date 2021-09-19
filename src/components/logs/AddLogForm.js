import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import Navbar from '../layout/Navbar'
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import { PropTypes } from 'prop-types';
import { getTechs } from '../../actions/techAction';
const AddLogForm = ({addLog, getTechs, tech: {techs}}) => {
    const [message, setMessage] = useState("");
    const [attention, setAttention] = useState(false);
    const [technician, setTechnician] = useState("");

    useEffect(() => {
        getTechs();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLog = {message, attention, technician, date: new Date()};
        addLog(newLog);
        toast.success("System Log Added Successfully");
    }

    return (
        <React.Fragment>
            <Navbar />
            <form className="mt-5 w-50 container">
                <div className="mb-3 text-center">
                    <h4 className="display-6">Enter System Logs</h4>
                </div>
                <div className="mb-3">
                    <input type="text" value={message} onChange={e => setMessage(e.target.value)} className="form-control" placeholder="Enter Message"/>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" checked={attention} value={attention} onChange={e => setAttention(!attention)} id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Need Attention
                    </label>
                </div>
                <div className="mb-3">
                   <select className="form-select" name="technician" value={technician} onChange={e => setTechnician(e.target.value)}>
                        <option value="" disabled>Select Technician</option>
                        {techs !== null && techs.map((t => (
                            <option value={`${t.firstName} ${t.lastName}`} key={t.id}>{t.firstName} {t.lastName}</option>
                        )))}
                    </select>
                </div>
                <button className="btn btn-primary w-100" onClick={e => handleSubmit(e)}>Enter Log</button>
            </form>
        </React.Fragment>
    )
}

AddLogForm.prototype = {
    addLog: PropTypes.func.isRequired,
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProp = (state) => ({
    tech: state.tech
});

export default connect(mapStateToProp, {addLog, getTechs})(AddLogForm)
