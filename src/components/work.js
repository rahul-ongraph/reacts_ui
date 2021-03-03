import React from 'react'
import Arrow from '../images/arrow.png'
import South1 from '../images/manSouth.jpg'
import Zimbabwe1 from '../images/manZimababwe.jpg'
import Portugal1 from '../images/manPortugal.jpg'
import Ethopia1 from '../images/manEthopia.jpg'
function Work() {
	return (
		<div style={{ display: 'flex', marginLeft: 70 }}>
			<div className="Left" style={{ width: '30%', height: 400 }}>
				<img style={{ height: 180, width: '100%' }} src={South1} />
				<img style={{ height: 180, width: '100%',marginTop:30}} src={Portugal1} />
			</div>
			<div className="Left" style={{  width: '30%', height: 400 }}>
				<img style={{ height: 180, width: '100%',marginLeft:20 }} src={Zimbabwe1} />
				<img style={{ height: 180, width: '100%',marginTop:30,marginLeft:20}} src={Ethopia1} />
			</div>
			<div className="Right" style={{ width: '60%', height: 300 }}>
				<div style={{ marginLeft: 80 }}>
					<h1>How it works?</h1>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					<div style={{ marginTop: 20, display: 'flex' }}>
						<h6>SEE MORE</h6>
						<img style={{ height: 20, width: 20, marginLeft: 20, color: '#ff8c02' }} src={Arrow} />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Work;