import React, {useState} from 'react'
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTech } from '../../actions/techAction';

const AddTechForm = ({addTech}) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTech = {firstName, lastName, email};
        addTech(newTech);
        toast.success("Technician Added Successfully");
    }

    return (
        <React.Fragment>
            <div className="w-100">
            <form className="mt-5 w-75 container">
                <div className="mb-3 text-center">
                    <h4 className="display-6">Add Technician</h4>
                </div>
                <div className="mb-3">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter Email"/>
                </div>
                <div className="mb-3">
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" placeholder="Enter FirstName"/>
                </div>
                <div className="mb-3">
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" placeholder="Enter LastName"/>
                </div>
                <button className="btn btn-primary w-100" onClick={e => handleSubmit(e)}>Add Technician</button>
            </form>
            </div>
        </React.Fragment>
    )
}

AddTechForm.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, {addTech})(AddTechForm)
