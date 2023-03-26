import { Navbar, Form, Nav, Button } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home/Home";
import Players from "./components/Players/Players";

function App() {
  return (
    <div className="App">
      {/* ============ header start ========= */}
      <header className="header">
        <Navbar className="w-75 m-auto">
          <Navbar.Brand href="#home">
            <img
              className="rounded-5 logo"
              src={
                "https://pixlok.com/wp-content/uploads/2021/04/IPL-Logo-PNG.jpg"
              }
              alt=""
            />
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3  links">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/math">Mathces</Nav.Link>
            <Nav.Link href="/team">Teams</Nav.Link>
            <Nav.Link href="/table">Point Table</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar>
      </header>

      {/* =============== Home page ================ */}

      <Home></Home>

      {/* =========== players =========== */}

      <Players></Players>
    </div>
  );
}

export default App;
