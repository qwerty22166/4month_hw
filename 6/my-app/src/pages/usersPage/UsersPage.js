import React, {useState} from 'react';
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    return (
        <div>
            <h1>users</h1>
            <button onClick={getUsers}>get users</button>
            <UsersList usersList={users}/>
        </div>
    );
}

export default UsersPage;