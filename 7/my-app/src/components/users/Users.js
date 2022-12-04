import React from 'react';
import {Col, Card, Button} from "react-bootstrap";

function Users({info}) {
    return (
        <Col lg={4}>
            <Card style={{width: '100%', marginBottom: '20px'}}>
                <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Card.Text>{info.email}</Card.Text>
                    <Card.Text>{info.phone}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Users;