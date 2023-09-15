import {
    Navbar,
    NavbarBrand,
    NavbarText,
} from 'reactstrap';
function Barra() {
    return (
            <Navbar className='barra'>
                <NavbarBrand href="/Home" className="title" style={{fontFamily: 'Arial', color:'white'}}>
                    Jobs
                </NavbarBrand>
                <NavbarText style={{fontFamily: 'Arial', color:'white'}}>Samir Rojas</NavbarText>
            </Navbar>
    );
}

export default Barra;