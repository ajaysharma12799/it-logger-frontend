import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techAction';
import { toast } from 'react-toastify';

const TechItem = ({tech, deleteTech}) => {
    const {firstName, lastName, id} = tech;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div>
                    {firstName} {lastName}
                </div>
            </div>
            <div className="ms-1">
                <button className="btn btn-danger" onClick={e => {
                    deleteTech(id);
                    toast.success("Technician Deleted Successfully");
                }}><i className="fas fa-trash"></i></button>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
}

export default connect(null, {deleteTech})(TechItem);