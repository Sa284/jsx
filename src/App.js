// App.js
import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './json/name';
import Price from './json/price';
import Description from './json/Description';
import Image from './json/ph';

const firstName = "to my store"; // Replace with your first name

const App = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Image />

  <Card.Body>
    <Name />

    <Price />
    <Description />
  </Card.Body>
</Card>

      <p>Welcome, {firstName ? firstName : "there"}!</p>
    </div>
  );
};

export default App;
