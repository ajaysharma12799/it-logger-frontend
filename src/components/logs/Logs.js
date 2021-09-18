import React, {useState, useEffect} from 'react'
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getLogs();
    }, []);

    const getLogs = async () => {
        setLoading(true);
        const response = await fetch("/logs");
        const data = await response.json();
        setLogs(data);
        setLoading(false);
    }

    if(loading) {
        return <Preloader />
    }

    return (
        <div className="container mt-2">
            <ul className="list-group">
            {
                !loading && logs.length === 0 ? (<Preloader />) : (
                    logs.map((log, index) => (
                        <LogItem key={index} log={log} />
                    ))
                )
            }
            </ul>
        </div>
    )
}

export default Logs
