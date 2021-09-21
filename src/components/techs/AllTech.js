import React, {useEffect} from 'react'
import Preloader from '../layout/Preloader';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';
import { PropTypes } from 'prop-types';

const AllTech = ({tech: {techs, loading}, getTechs}) => {
    
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    if(loading || techs === null) {
        return <Preloader />
    }
    return (
        <div className="container mt-3">
            <ul className="list-group">
            {
                !loading && techs.length === 0 ? (
                    <div>
                        <h4 className="display-5 text-center">No Technician To Show</h4>
                    </div>
                ) : (
                    techs.map((tech, index) => (
                        <TechItem key={index} tech={tech} />
                    ))
                )
            }
            </ul>
        </div>
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
