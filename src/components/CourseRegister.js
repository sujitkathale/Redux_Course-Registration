import axios from 'axios';
import React,{useState} from 'react'
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import {useSelector} from 'react-redux';
import imag1 from '../imag1.webp'
const regforEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function CourseRegister() {
    let [name, setname] = useState('');
        let [email, setEmail] = useState('');
        let [age, setAge] = useState('');
        let [city, setcity] = useState('');
        let [contact, setcontact] = useState('');
        let [error, setError] = useState({
            name:'',
            email:'',
            age:'',
            city:'',contact:''
        });
        const course = useSelector(state => state)
        const navigate = useNavigate();

        const handle = (event)=>{
            let{name, value} = event.target;
            switch(name){
                case 'name': setname(value);
                setError({...error, name: value.length < 4 ? "name must be atleast 4 characters": ""});
                break;
                case 'email': setEmail(value);
                setError({...error, email: regforEmail.test(value) ? "": "Email is not valid"});
                break;
                case 'age': setAge(value);
                setError({...error, age: value < 18 || value > 60 ? "Age is not valid": ""});
                break;
                case 'city': setcity(value);
                setError({...error, city: value.length < 10 ? "city name must be atleast 8 characters": ""});
                break;case 'contact': setcontact(value);
                setError({...error, contact: value.length < 10 ? "contact number must be atleast 10characters": ""});
                break;

            }
        }

        const handleSubmit = async() =>{
            let postData = {name: name, email: email, age: age, city: city,contact:contact, id: course.id, course: course.course};
            if(validate(error)){
                await axios.post("http://localhost:3001/Registration", postData)
                alert("Course registered successfully");
                navigate("/course");
            }
            else{
                alert("Fill all the fields correctly");
            }
        }

        const validate = (error) =>{
            let valid = true;
            Object.values(error).find(er=>er.length > 1) && (valid = false);
            return valid;
        } 
    return (
        
        <>
        
           <Container  fluid className="mt-2">
               <Row>
                   <Col md={5} >
                <img src={imag1} alt="imag" width="500"height="700"/>
                </Col>
                <Col md={5}>
                <h2 className="p-4 bg-primary"style={{width:700}} >Registration for {course.course} course</h2>
           <Form style={{backgroundColor:"lightskyblue",width:700,height:580 ,textAlign:"justify",paddingLeft:100,paddingTop:100}}>
                <Form.Group as={Row} className="mb-3 pt-4">
                    <Form.Label column sm="3">
                    Name
                    </Form.Label>
                    <Col sm="6">
                    <Form.Control type="text" name="name" placeholder="Enter UserName" onChange={handle} />
                    {error.name.length > 0 && <Alert variant="danger" className="mt-2">
                    {error.name}
                </Alert>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                    Email
                    </Form.Label>
                    <Col sm="6">
                    <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handle} />
                    {error.email.length > 0 && <Alert variant="danger" className="mt-2">
                    {error.email}
                </Alert>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                    Age
                    </Form.Label>
                    <Col sm="6">
                    <Form.Control type="number" name="age" placeholder="Enter Age" onChange={handle}  />
                    {error.age.length > 0 && <Alert variant="danger" className="mt-2">
                    {error.age}
                </Alert>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                    city
                    </Form.Label>
                    <Col sm="6">
                    <Form.Control type="text" name="city" placeholder="Enter city Name" onChange={handle} />
                    {error.city.length > 0 && <Alert variant="danger" className="mt-2">
                    {error.city}
                </Alert>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                    Contact
                    </Form.Label>
                    <Col sm="6">
                    <Form.Control type="number" name="contact" placeholder="Enter Age" onChange={handle}  />
                    {error.contact.length > 0 && <Alert variant="danger" className="mt-2">
                    {error.contact}
                </Alert>}
                    </Col>
                </Form.Group>

                <Button onClick={()=>{handleSubmit()}} variant="success" style={{marginLeft:150}}>Submit</Button>
                </Form> 
                </Col>
                </Row>
               </Container> 
        </>
    )
}
