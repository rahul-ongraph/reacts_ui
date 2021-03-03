import React from 'react'
import Ethopia1 from '../images/manEthopia.jpg'
import Ethiopia from '../images/ethiopia.png'
import Kenaya from '../images/manKenaya.jpg'
import Portugal1 from '../images/manPortugal.jpg'
import Rwanda1 from '../images/manRw.jpg'
import Rwanda from '../images/Rwanda.jpg'
import South1 from '../images/manSouth.jpg'
import South from '../images/south-africa.png'
import Zimbabwe1 from '../images/manZimababwe.jpg'
import zimbabwe from '../images/zimbabwe.png'
import Load from '../images/load.png'
function Guides() {
	const data = [
		{
			image: Rwanda1,
			image1: Rwanda,
			text: 'RWANDA',
			name: 'Greg Bakunzi',
		},
		{
			image: Portugal1,
			image1: Rwanda,
			text: 'PORTUGAL',
			name: 'Alexis Morgan',
		},
		{
			image: Ethopia1,
			image1: Ethiopia,
			text: 'Ethopia',
			name: 'Washihun Ayele(Kanu)',
		},
		{
			image: Zimbabwe1,
			image1: zimbabwe,
			text: 'ZIMBABWE',
			name: 'Gary DOugals',
		},
		{
			image: South1,
			image1: South,
			text: 'SOUTH AFRICA',
			name: 'Chris Fallows',
		},
		{
			image: South1,
			image1: South,
			text: 'SOUTH AFRICA',
			name: 'Kian Barker',
		},
		{
			image: Zimbabwe1,
			image1: zimbabwe,
			text: 'ZIMBABWE',
			name: 'David Amvot',
		},
		{
			image: Kenaya,
			image1: South,
			text: 'KENAYA',
			name: 'Paul Kirui',
		},
	]
	return (
		<div style={{ marginLeft: 80, marginTop: 10 }}>
			<h2>Our guides</h2>
			<div style={{ marginLeft: 8, display: 'flex' }}>
				<h5 style={{ color: '#ff8c02' }}>All</h5>
				<p>*Africa*Europe*North America*Asia*South Africa</p>
			</div>
			<div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', marginTop: 10 }}>
				{data.map((list) => (
					<div style={{ marginTop: 20 }}>
						<img style={{ height: 250, width: '90%' }} src={list.image} alt={list.image} />
						<div style={{ display: 'flex', marginTop: 10 }}>
							<img style={{ height: 30, width: 30 }} src={list.image1} alt={list.image1} />
							<h6 style={{ marginLeft: 20, color: '#ff8c02' }}>{list.text}</h6>
						</div>
						<h6 style={{ marginLeft: 5 }}>{list.name}</h6>
					</div>
				))}
			</div>
			<div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
				<h6>SEE MORE</h6>
				<img style={{ height: 20, width: 20, marginLeft: 20, backgroundColor: '#ff8c02' }} src={Load} />
			</div>
		</div>
	)
}
export default Guides;