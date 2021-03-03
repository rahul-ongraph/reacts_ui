import React from 'react'
import South1 from '../images/manSouth.jpg'
import Zimbabwe1 from '../images/manZimababwe.jpg'
import Portugal1 from '../images/manPortugal.jpg'
import Arrow from '../images/arrow.png'
function About() {
	return (
		<div>
			<div style={{ marginLeft: 70 }}>
				<h3 style={{ fontWeight: 'bold' }}>About Us</h3>
			</div>
			<div style={{ display: 'flex'}}>
				<div className="Right" style={{ width: '50%', height: 320, marginTop: 30, marginLeft: 70 }}>
					<p style={{ width: '70%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text ever since the 1500s, when
							 an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					<p style={{ width: '70%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text ever since the 1500s, when
							 an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							 <div style={{marginTop:20,display:'flex'}}>
        <h6>SEE MORE</h6>
				<img style={{height:20,width:20,marginLeft:20,color:'#ff8c02'}} src={Arrow}  />
				</div>
				</div>
				<div className="Left" style={{ width: '20%', height:320}}>
				<img style={{height:155,width:'100%'}} src={South1}    />
				<img style={{height:155,width:'100%',marginTop:10}} src={Portugal1} />
				</div>
				<div className="Left" style={{ width:'30%', height: 300,marginLeft:10}}>
        <img style={{height:320,width:'80%'}} src={Zimbabwe1}   />
				</div>
			</div>
		</div>
	);
}
export default About;