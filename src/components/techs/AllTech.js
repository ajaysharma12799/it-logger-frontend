import React, {useEffect} from 'react'
import Preloader from '../layout/Preloader';
import TechItem from './TechItem';
import Navbar from '../layout/Navbar';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';
import { PropTypes } from 'prop-types';

const AllTech = ({tech: {techs, loading}, getTechs}) => {
    
    useEffect(() => {
        getTechs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [techs]);

    if(loading || techs === null) {
        return <Preloader />
    }

    return (
        <React.Fragment>
        <Navbar/>
        <div className="container mt-3">
            <h4 className="display-5 text-center">All Technicians</h4>
            <ul className="list-group">
            {
                !loading && techs.length === 0 ? (
                    <div>
                        <h4 className="display-5 text-center">No Technician</h4>
                    </div>
                ) : (
                    techs.map((tech, index) => (
                        <TechItem key={index} tech={tech} />
                    ))
                )
            }
            </ul>
        </div>
        </React.Fragment>
    )
}

AllTech.prototype = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    tech: state.tech
});

export default connect(mapStateToProps, {getTechs})(AllTech)
