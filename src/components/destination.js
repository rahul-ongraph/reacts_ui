import React from 'react'
import Norway from '../images/norway.png'
import Finland from '../images/finland.png'
import Greenland from '../images/greenland.png'
import South from '../images/south-africa.png'
import Rwanda from '../images/Rwanda.jpg'
import zimbabwe from '../images/zimbabwe.png'
import Ethiopia from '../images/ethiopia.png'
import India from '../images/india.png'
import Mongolia from '../images/mongolia.png'
import Bhutan from '../images/bhutan.png'
import peru from '../images/peru.png'

function Destination() {
  const data = [
    {
     image:Norway,
     text:'Norway'
    },
    {
      image:Norway,
      text:'Iceland'
     },
    {
      image:Finland,
      text:'Finland'
     },
     {
      image:Greenland,
      text:'Greenland'
     },
     {
      image:South,
      text:'South'
     },
     {
      image:zimbabwe,
      text:'zimbabwe'
     },
     {
       image:Rwanda,
       text:"Rwanda"
     },
     {
      image:Ethiopia,
      text:"Ethiopia"
    },
    {
      image:India,
      text:"India"
    },
    {
      image:Mongolia,
      text:"Mongolia"
    },
    {
      image:Bhutan,
      text:"Bhutan"
    },
  ]
  return (
    <div style={{ backgroundColor:'white'}}>
      <div style={{marginLeft:50,display:'flex'}}>  
        <h3 style={{fontWeight:'bold'}}>Destination</h3>
        <h6 style={{marginLeft:'45%'}}>we have guides leading trips across the world.Select one country and explore it!</h6>
      </div>
      <div style={{display:"flex",marginEnd:20}}>
      {data.map((list,index) => (
        <div className="col-md-2 user"  style={{display:'flex',clear: (index !== 0 && index % 6 === 0) ? 'both' : 'none',marginLeft:35,width:'60%',height:50}}>
        <img style={{height:30,width:30}} src={list.image} alt={list.image}/>
        <h6 style={{marginLeft:40,marginTop:5}}>{list.text}</h6>
        </div>
        
      ))}
      </div>
    </div>
  );
}
export default Destination;
