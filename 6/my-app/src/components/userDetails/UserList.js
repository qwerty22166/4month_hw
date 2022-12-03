import React from "react";

function UserDetails({data}) {
    return (
        <ul>
            {
                 <li key={data.id}>
                    <p>name: {data.name}</p>
                    <p>address: {data.address.city}</p>
                    <p>email: {data.email}</p>
                </li>
            }
        </ul>
    )
}

export default UserDetails;