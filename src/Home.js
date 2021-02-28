import React from 'react'
import FlatList from './components/flatList'
import Header from './components/header'
function Home() {
    return ( 
			<div style={{backgroundColor:'green'}}>
          <Header />,
          <FlatList />
					</div>
    );
}
export default Home;
