import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerInsideExample() {
  return (
    <Navbar className = "nav" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">Tissue Slide Annotation</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;