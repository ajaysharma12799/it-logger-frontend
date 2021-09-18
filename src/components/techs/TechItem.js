import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({tech}) => {
    const {firstName, lastName} = tech;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div>
                    {firstName} {lastName}
                </div>
            </div>
            <div className="ms-1">
                <button className="btn btn-danger" onClick={e => {
                    console.log("Delete Clicked");
                }}><i className="fas fa-trash"></i></button>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
}

export default TechItem