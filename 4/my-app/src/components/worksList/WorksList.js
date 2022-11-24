import React from "react";

function WorksList({workslist}) {
    return (
        <ul>
            {
                workslist.length > 0
                ?
                workslist.map((work, index) => <li key={index}>{work}</li>)
                :
                <li>Данных нет</li>
            }
        </ul>
    )
}

export default WorksList;