import React from 'react'
import header from '../images/header.jpg'
import { Button,Dropdown } from 'react-bootstrap'
function Header() {
	return (
		<div style={{ backgroundImage: `url(${header})`,backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat', height: '350px', width: '100%' }}>
			<div style={{ marginLeft: 30, display: 'flex' }} className="Left">
				<p style={{ color: 'white' }}>GERAT</p>
				<div style={{ display: 'flex', marginLeft: '50%' }}>
					<h6 style={{ color: 'white' }}>Location</h6>
					<h6 style={{ marginLeft: 10, color: 'white' }}>stories</h6>
					<h6 style={{ marginLeft: 10, color: 'white' }}>Team</h6>
					<h6 style={{ marginLeft: 10, color: 'white' }}>Become a guide</h6>
					<Button className="light" style={{ marginLeft: 20, width: '100px' }}>Log in</Button>
					<p style={{ marginLeft: 10 }}>or</p>
					<Button className="light" style={{ marginLeft: 20, width: '100px', color: 'white' }}>Sign up </Button>
				</div>
			</div>
			<div style={{ marginTop: 50 }}>
				<h1 style={{ textAlign: 'center', color: 'white' }}>Great Adventure</h1>
				<h1 style={{ textAlign: 'center', color: 'white' }}>need Great Guides!</h1>
			</div>
			<div style={{ marginTop: 50 , marginLeft:50,display:'flex' }}>
				<div style={{display:'flex'}}>
				<Dropdown style={{marginLeft:20,backgroundColor:'white' , borderRadius:20 , width:250}}>
					<Dropdown.Toggle variant="#ff8c02" id="dropdown-basic">
						Destination
           </Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown style={{marginLeft:20,backgroundColor:'white' , borderRadius:20}}>
					<Dropdown.Toggle variant="#ff8c02" id="dropdown-basic">
						Departure Date
           </Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown style={{marginLeft:20,backgroundColor:'white' , borderRadius:20}}>
					<Dropdown.Toggle variant="#ff8c02" id="dropdown-basic">
						Day/Multi-Day
           </Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown style={{marginLeft:20,backgroundColor:'#ff8c02',borderRadius:20,width:250}} >
					<Dropdown.Toggle variant="ff8c02" id="dropdown-basic">
						Find
           </Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				</div>
			</div>
		</div>
	);
}
export default Header;
