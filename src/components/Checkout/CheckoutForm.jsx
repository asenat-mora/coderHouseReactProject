import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CheckoutForm({onSubmit}){
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    onSubmit({name, phone, email});
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" value={name} onChange={(event) => setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="number" placeholder="Ingrese su numero de telefono" value={phone} onChange={(event) => setPhone(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(event) => setEmail(event.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  )

}

export default CheckoutForm;