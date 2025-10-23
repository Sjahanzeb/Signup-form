import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicForm() {
  const [type, setType] = useState("SignUp"); 

  return (
     <div className="form-container">
      {type === "SignUp" ? (
       <Form className="form-box">
          <h1>SignUp Form</h1><br />

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter FullName" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" />
          </Form.Group>

          <Button className="custom-btn" type="submit">SignUp</Button>

          <div className="account-text">
            Already have an account?{" "}
            <Button 
              className="Btn"
              variant="link"
              onClick={() => setType("LogIn")}
            >
              LogIn
            </Button>
          </div>
        </Form>
      ) : (
        <Form className="form-box"  >
          <h1>LogIn Form</h1><br />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email / Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button className="custom-btn" type="submit">LogIn</Button>

          <div className="account-text">
            Don’t have an account?{" "}
            <Button 
              className="Btn"
              variant="link"
              onClick={() => setType("SignUp")}
            >
              SignUp
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
}

export default BasicForm;