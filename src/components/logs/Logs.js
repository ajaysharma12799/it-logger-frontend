import React, {useEffect} from 'react'
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getLogs } from '../../actions/logActions';
const Logs = ({ log: {logs, loading}, getLogs }) => {
    
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);


    if(loading || logs === null) {
        return <Preloader />
    }
    return (
        <div className="container mt-2">
            <ul className="list-group">
            {
                !loading && logs.length === 0 ? (
                    <div>
                        <h4 className="display-5 text-center">No Logs To Show</h4>
                    </div>
                ) : (
                    logs.map((log, index) => (
                        <LogItem key={index} log={log} />
                    ))
                )
            }
            </ul>
        </div>
    )
}

Logs.prototype = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

const mapStateToProp = (state) => ({
    log: state.log,
});

export default connect(mapStateToProp, {getLogs})(Logs)
