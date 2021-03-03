import React from 'react'
import Destination from './components/destination'
import Header from './components/header'
import Popular from './components/popualr'
import Guides from './components/guides'
import About from './components/about'
import Work from './components/work'
import Zebra from './components/zebra'
import NewsLetter from './components/newsLetter'
import Footer from './components/footer'
function Home() {
	return (
		<div style={{}}>
			<Header />,
			<Destination />,
			<Popular />,
			<Guides/>,
			<About />,
			<Work/>,
			<Zebra/>,
     <NewsLetter />,
		 <Footer />
			
		</div>
	);
}
export default Home;
