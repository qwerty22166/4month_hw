import React from 'react';

function WorksList({worksList}) {
    return (
        <ul>
            {
                worksList.map(work => <li>{work}</li>)
            }
        </ul>
    );
}

export default WorksList;