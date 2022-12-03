import React, {useEffect, useState} from 'react';
import UserDetails from "../userList/UserList";

function UsersList({usersList}) {

    const [userInfo, setUserInfo] = useState(null)
    console.log(userInfo)

    useEffect(() => {
        return () => {

        }
    }, [])

    function getUserInfo(event) {
        const id = event.target.dataset.id;
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUserInfo(data))

        console.log(userInfo)
    }

    return (
        <ul>
            {userInfo !== null ? <UserDetails data={userInfo} /> : usersList.map(user =>
                <li key={user.id}>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <button data-id={user.id} onClick={getUserInfo}>информация о пользователе</button>
                    <p>----------------------------</p>
                </li>)

            }
        </ul>
    );
}

export default UsersList;