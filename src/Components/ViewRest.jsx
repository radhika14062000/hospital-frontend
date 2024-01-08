import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import RestReview from './RestReview';

import {
 MDBCard,
 MDBCardBody,
 MDBCardTitle,
 MDBCardText,
 MDBCardHeader,
 MDBCardFooter,
 MDBBtn
} from 'mdb-react-ui-kit';
function ViewRest() {
 


 const [restDetails,setRestDetails]=useState({})
 

 const {id}=useParams()
 console.log(id);
 const base_url='https://hospital-backend-egta.onrender.com/doctors'
 const fetchRest=async()=>{
  const result = await axios.get(`${base_url}/${id}`)
  console.log(result.data);
  setRestDetails(result.data)
 }

 console.log(restDetails);

 useEffect(()=>{
  fetchRest()
 },[])
  return (
    <div>
     <Row>
     
      
      <Col>

    
      <MDBCard className='container my-5'  alignment='center'>
      <MDBCardHeader><h1><b>{restDetails.hospital}</b></h1></MDBCardHeader>
      <h2>{restDetails.name} ({restDetails.specialty})</h2> 
      <h3>Phone: {restDetails.phone}</h3>
      <MDBCardBody>
        <MDBCardTitle>Location:{restDetails.address}</MDBCardTitle>
       <h5>email: {restDetails.email}</h5>     
     <h5>Available Days:{restDetails. available_days}</h5>
      </MDBCardBody>
     <h6>Available Time : {restDetails.available_hours}</h6>
     <h5><RestReview review={restDetails.reviews} /></h5>
</MDBCard> 
      </Col>
     </Row>
    </div>
  )
}

export default ViewRest