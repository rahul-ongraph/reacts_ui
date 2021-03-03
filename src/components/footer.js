import React from 'react'
import facebook from '../images/fb.png'
import instagram from '../images/instagram.jpg'
import twitter from '../images/twitter.png'

function Footer() {
	return (
		<div>
      <div style={{display:'flex',marginTop:20}}>
      <h3 style={{marginLeft:'6%',width:5}}>Great Guides</h3>
			<div style={{marginLeft:'40%',display:'flex',marginTop:30}}>
			<img style={{height:20,width:20}} src={facebook}     />
			<img style={{height:20,width:20,marginLeft:20}} src={twitter}     />
			<img style={{height:20,width:20,marginLeft:20}} src={instagram}     />
			</div>
			<h6 style={{marginLeft:50,width:'37%',marginTop:20}}>Copyright @ 2018 GreatGuides
			 corp.All rights reserved.Privacy Policy</h6>
			</div>
			<div style={{height:50}}>
			</div>
			</div>
        );
    }
    export default Footer;