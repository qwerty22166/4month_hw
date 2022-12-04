import React, {useEffect, useState} from 'react';
import Users from "../../components/users/Users";
import {Container, Row, Spinner} from "react-bootstrap";

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);

    async function getUsers() {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, [update])
    return (
        <Container className={"text"}>
            <h1>users list</h1>
            <button onClick={() => setUpdate(!update)}>update</button>

            <Row>
                {
                    loading === true
                    ?
                        <div className={"text"}>
                            <Spinner animation="border" variant="primary" />
                            <Spinner animation="border" variant="secondary" />
                            <Spinner animation="border" variant="success" />
                            <Spinner animation="border" variant="danger" />
                            <Spinner animation="border" variant="warning" />
                            <Spinner animation="border" variant="info" />
                        </div>

                    :
                    users.map(user => <Users info={user}/>)
                }
            </Row>
        </Container>
    );
}

export default UsersPage;