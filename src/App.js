import './App.css';
import { Container,Nav } from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import Product from './components/Product';
import Course from './components/Course';
import CourseRegister from './components/CourseRegister';
import RegisterdUsersdata from './components/RegisterdUsersdata'
function App() {
  return (
    <Container className="App">
     <Nav className="justify-content-center"style={{backgroundColor:"lightblue"}}>
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/" >Product</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/course">Course</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/coursereg">
        CourseRegister
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/userdetails">
      RegisterdUsersdata
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <Router>
    <Routes>
      <Route path="/" element={<Product/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/coursereg/" element={<CourseRegister/>}/>
      <Route path="/userdetails" element={<RegisterdUsersdata/>}/>
    </Routes>
  </Router>
    </Container>
  );
}

export default App;
