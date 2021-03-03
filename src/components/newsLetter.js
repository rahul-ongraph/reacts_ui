import React from 'react'
import { Button } from 'react-bootstrap'
import Arrow from '../images/arrow.png'
function NewsLetter() {
	return (
        <div style={{backgroundColor:'#f8f8f9'}}>
        <div style={{}}>
         <h3 style={{textAlign:'center',fontWeight:'bold'}}>Sign up for our monthly newsletter </h3>
         <p  style={{textAlign:'center'}}>Get the latest stories on our guides and trips</p>
        </div>
        <div style={{marginLeft:'40%' ,display:'flex' }}>
      <input style={{height:30,borderWidth:0.0,backgroundColor:'white',marginTop:10}} type="email" placeholder="Your email" />
			<Button style={{marginLeft:20}} variant="warning">Subscribe
			<img style={{height:20,width:20,marginLeft:20}} src={Arrow} /> 
			  </Button>
        </div>
      </div>
        );
}
export default NewsLetter;
