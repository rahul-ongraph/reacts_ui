import React from 'react'
import {Dropdown } from 'react-bootstrap'
import North from '../images/northCap.jpg'
import Load from '../images/load.png'
function Popular() {
	const data = [
		{
			image:North,
			culture:'Cultural -8 days',
			text:'North Cap and Lapland Aurora Boreails'
		},
		{
			image:North,
			culture:'Cultural -5 days',
			text:'Lapland and Alta Northern Lights'
		},
		{
			image:North,
			culture:'Cultural -7 days',
			text:'Lapland Northern Lights with Tallinn and Helsinki'
		},
		{
			image:North,
			culture:'Cultural -4 days',
			text:'Northern Lights with Husies'
		},
		{
			image:North,
			culture:'Cultural -6 days',
			text:'Aurora Borealis Arctic experience'
		},
		{
			image:North,
			culture:'Cultural -7 days',
			text:'Norway Nutshell with Northern Lights'
		},
		{
			image:North,
			culture:'Cultural -4 days',
			text:'Norway Northern Light Adventure'
		},
		{
			image:North,
			culture:'Cultural -4 days',
			text:'Walking tour to the  summit of Mount Abune Yosef of 3- days '
		},
	]
	return (    
		<div style={{backgroundColor:'#f8f8f9'}}>
		<div style={{marginLeft:50}}>
     <h1 style={{fontWeight:'bold'}}>Popular Adventure</h1>
		 <div style={{display:'flex'}}>
		 <h6 style={{marginTop:5}}>Category:</h6>
		 <Dropdown style={{marginLeft:10,borderRadius:20,width:100}} >
					<Dropdown.Toggle variant="#ff8c02" id="dropdown-basic">
						All
           </Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			<p style={{marginLeft:'35%' ,width:'40%'}}>our uides have a lot of great adventure in different 
			categories like Hiking,Rafting,Walking ciltural experiences.</p>
				</div>
				<div style={{display:'flex',width:'100%',flexWrap:'wrap'}} >
					{ data.map((list) => (
						<div style={{marginLeft:20 ,width:'30%'}}>
            <img style={{height:250,width:'80%'}} src={list.image} alt={list.image} />
						<h6 style={{marginLeft:20,color:'#ff8c02'}}>{list.culture}</h6>
						<p style={{marginLeft:20,fontWeight:'bold',width:'70%'}}>{list.text}</p>
						</div>
						))}
				</div>
				<div style={{marginTop:30,display:'flex',justifyContent:'center'}}>
        <h6>SEE MORE</h6>
				<img style={{height:20,width:20,marginLeft:20,color:'#ff8c02'}} src={Load}  />
				</div>
		</div>
		</div>
	)}
export default Popular;
