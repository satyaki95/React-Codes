import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Boot = () => {
  return (
    <Card style={{width:"20rem"}}>
        <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Consetetur dolore voluptua erat dolor sanctus.
             Voluptua sit accusam dolores.
        </Card.Text>
        <Button>Learn more</Button>
        </Card.Body>
    </Card>
  )
}

export default Boot

