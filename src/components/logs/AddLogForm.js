import React, {useState} from 'react'
import { toast } from 'react-toastify';
import Navbar from '../layout/Navbar'


const AddLogForm = () => {
    const [message, setMessage] = useState("");
    const [attention, setAttention] = useState(false);
    const [technician, setTechnician] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message, technician, attention);
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
                   <select className="form-select" name={technician} onChange={e => setTechnician(e.target.value)}>
                        <option selected disabled>Select Technician</option>
                        <option value="Ajay">Ajay</option>
                        <option value="Tanu">Tanu</option>
                        <option value="Chau">Chau</option>
                    </select>
                </div>
                <button className="btn btn-primary w-100" onClick={e => handleSubmit(e)}>Enter Log</button>
            </form>
        </React.Fragment>
    )
}

export default AddLogForm
