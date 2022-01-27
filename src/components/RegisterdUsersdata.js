import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table} from 'react-bootstrap';

export default function RegisterdUsersdata() {
    let [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/Registration")
        .then(res=>{
        setData(res.data);
    })
    },[]);
    return (
        <>
        {/* Add table */}
                <Container>
                <h2 className="bg-primary text-white p-2 mt-2">User Enquired</h2>
                
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>City</th>
                <th>Email</th>
                <th>Age</th>
                <th>Contact</th>
                </tr>
            </thead>
            <tbody>
            {data.map(data1 => 
                <tr key={data1.id}>
                <td>{data1.name}</td>
                <td>{data1.city}</td>
                <td>{data1.email}</td>
                <td>{data1.age}</td>
                <td>{data1.contact}</td>
                </tr>)}
                </tbody>
                </Table>
               
                    </Container>
   </>
    )
}
