 import Sidebar from "../Sidebar";
 import Barra from "../Barra";
 import { Footer } from "../Footer";
 import { Container } from "reactstrap";

 const Dashboard =({isAdmin}) => {
  console.log(isAdmin);
  
    return (
        <div className="home-container">
          <div className="sidebar">
            <Sidebar isAdmin={isAdmin} />
          </div>
          
          <Barra />
          <div className="main-content">
            <Container className='Gridcontainer' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <iframe title="Dashboard Content" width="1024" height="720" allowFullScreen src="https://lookerstudio.google.com/embed/reporting/670b0315-752d-43de-a7ce-16deeed1fff9/page/p_lq97qyj1ad" frameBorder="0" ></iframe>
            </Container>
            <Footer />
          </div>
        </div>
      );


      
}

export default Dashboard;