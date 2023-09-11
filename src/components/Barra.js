import {
    Container,
    Navbar,
    NavbarBrand,
    NavbarText,
} from 'reactstrap';
function Barra() {
    return (
        <Container>
            <Navbar className='barra' color="faded" light>
   
                <NavbarBrand href="/Home" className="me-auto">
                    Jobs
                </NavbarBrand>

                <NavbarText>Samir Rojas</NavbarText>

            </Navbar>
        </Container>
    );
}

export default Barra;