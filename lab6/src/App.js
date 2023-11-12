// Importing CSS files for styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing React components and Bootstrap components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Importing routing components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing custom components for different routes
import Read from './components/read';
import Create from './components/create';
import Books from './components/books';

// Defining the main App component
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      {/* Navbar for navigation */}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* Routing configuration */}
      <Routes>
        {/* Route for the home page */}
        <Route path='/' element={<Content></Content>}></Route>
        
        {/* Route for the 'Read' page */}
        <Route path='/read' element={<Read></Read>}></Route>
        
        {/* Route for the 'Create' page */}
        <Route path='/create' element={<Create></Create>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
