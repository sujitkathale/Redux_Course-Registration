import React,{useState,useEffect}from 'react'
import { Container,Card,Row,Col,Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

export default function Course() {
    const [course,setCourse]=useState([]);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        let url=" http://localhost:3001/Courses";
        axios.get(url)
        .then(res=>{
            setCourse(res.data);
        })
    },[])
    const Enquire=(id,course)=>{
       let pay={id:id,course:course}
        dispatch({type:'Add', payload: pay});
        navigate("/coursereg");
    }
    return (
        <Container>
        <Row>
            
        {course.map(pro=>
        <Col md={4}>
            <Card style={{ width: '18rem' }} key={pro.pid}>
            <Card.Img variant="top" src={`images/${pro.images}`} width="500px" height="200px" alt="Card cap" />
            <Card.Body>
              <Card.Title>{pro.course}</Card.Title>
              <Card.Text>
               {pro.price}
               <p>{pro.description}</p>
              </Card.Text>
              <Button variant="primary" onClick={()=>Enquire(pro.id,pro.course)}>Enquire</Button>
            </Card.Body>
          </Card>
                </Col>
            )}
            
            </Row>
    </Container>
    )
}
