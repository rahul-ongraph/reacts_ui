import React from 'react'
import Arrow from '../images/arrow.png'
import Zebras from '../images/zebra.jpg'
function Zebra() {
	return (
		<div>
			<div style={{ marginLeft: 70 }}>
				<h3 style={{ fontWeight: 'bold' }}>Why we are diiferent</h3>
			</div>
			<div style={{ display: 'flex' }}>
				<div className="Left" style={{ width: '50%', height: 320, marginTop: 30, marginLeft: 70 }}>
					<p style={{ width: '70%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text ever since the 1500s, when
					an unknown printer took a galley of type and scrambled it to
							 make a type specimen book scrambled it to make a type specimen book.</p>
					<div style={{ marginTop: 20, display: 'flex' }}>
						<h6>SEE MORE</h6>
						<img style={{ height: 20, width: 20, marginLeft: 20, color: '#ff8c02' }} src={Arrow} />
					</div> 
					</div> 
					<div className="Left" style={{ width:'10%', height:350,display:'flex',marginLeft:40}}>
              <img style={{height:320,width:'100%'}} src={Zebras}    />
							 <img style={{height:320,width:'100%',marginLeft:20}} src={Zebras}    />
							 <img style={{height:320,width:'100%',marginLeft:20}} src={Zebras}    />
					</div>
			</div>
		</div>
	);
}
export default Zebra;