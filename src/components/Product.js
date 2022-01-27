import axios from 'axios';
import React,{useState,useEffect}from 'react'
import { Container,Card,Row,Col,Button } from 'react-bootstrap'
export default function Product() {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        let url=" http://localhost:3001/Products";
        axios.get(url)
        .then(res=>{
            setProduct(res.data);
        })
    },[])
    const addCart = (id)=>{
        if(localStorage.getItem('mycart')!=undefined){
            let arr = JSON.parse(localStorage.getItem('mycart'));
            if(arr.find(x => x.id == id) != undefined){
                let ind = arr.findIndex(x => x.id === id);
                arr[ind] = {id: id,quantity:arr[ind].quantity + 1};
                localStorage.setItem('mycart',JSON.stringify(arr));
                alert("Product quantity is increased");
            }
            else{
            arr.push({id:id, quantity:1});
            localStorage.setItem('mycart',JSON.stringify(arr));
            alert("Product added to cart")
        }
            
        }
        else{
            let arr = [];
            arr.push({id:id, quantity:1});
            localStorage.setItem('mycart',JSON.stringify(arr));
            alert("Product added to cart")             
        }
    }
    return (
        <Container>
            <h2>Product list</h2>
            <Row>
                
            {product.map(pro=>
            <Col md={4}>
                <Card style={{ width: '18rem' }} key={pro.pid}>
                <Card.Img variant="top" src={`images/${pro.images}`} width="500px" height="200px" alt="Card cap" />
                <Card.Body>
                  <Card.Title>{pro.pname}</Card.Title>
                  <Card.Text>
                   {pro.price}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>addCart(pro.pid)}>Add Cart</Button>
                </Card.Body>
              </Card>
                    </Col>
                )}
                
                </Row>
        </Container>
    )
}
