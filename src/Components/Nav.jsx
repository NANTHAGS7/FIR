import { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';





export default function Navbar() {
  const [openNavColorThird, setOpenNavColorThird] = useState(false);

  const navbarStyle = {
    backgroundColor: '#EEF5F9',
    fontFamily: 'Roboto, sans-serif',
    color: 'white', // Add your desired font color here
  };
  



  

  return (
    <>
      <MDBNavbar expand='lg' light style={navbarStyle}>
        <MDBContainer fluid>
          <MDBNavbarBrand  style={{color:'black', fontFamily:'sans-serif', fontSize:"1.5rem"}} >FIR</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorThird(!openNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'> <Link to="/">
                <MDBNavbarLink aria-current='page' style={{color:'black', fontFamily:'sans-serif'}}>
                Section Allocation
                </MDBNavbarLink></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                
                
              </MDBNavbarItem>
              <Link to="/Records">
              <MDBNavbarItem>
               <MDBNavbarLink  style={{color:'black', fontFamily:'sans-serif'}} >
               Past records 
                </MDBNavbarLink>
              </MDBNavbarItem></Link>
              <MDBNavbarItem>
                
                
              </MDBNavbarItem>
              <MDBNavbarItem>
                
                
              </MDBNavbarItem>
            </MDBNavbarNav>      
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
