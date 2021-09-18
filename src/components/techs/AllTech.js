import React, {useState, useEffect} from 'react'
import Preloader from '../layout/Preloader';
import TechItem from './TechItem';
import Navbar from '../layout/Navbar';

const AllTech = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getTechs();
    }, []);

    const getTechs = async () => {
        setLoading(true);
        const response = await fetch("/techs");
        const data = await response.json();
        setTechs(data);
        setLoading(false);
    }

    if(loading) {
        return <Preloader />
    }

    return (
        <React.Fragment>
        <Navbar/>
        <div className="container mt-3">
            <ul className="list-group">
            {
                !loading && techs.length === 0 ? (<Preloader />) : (
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

export default AllTech
