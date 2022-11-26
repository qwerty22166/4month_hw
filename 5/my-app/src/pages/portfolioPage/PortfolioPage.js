import React, {useState} from 'react';
import WorksList from "../../components/worksList/WorksList";

function PortfolioPage(props) {

    const [work, setWork] = useState([])

    const getWork = () => {
        setWork(["Work1", "Work2"])
    }

    return (
        <>
            <button onClick={getWork}>get</button>
            <WorksList worksList={work}/>
        </>
    );
}

export default PortfolioPage;