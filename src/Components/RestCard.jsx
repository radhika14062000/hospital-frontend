import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function RestCard({doctor}) {
  console.log(doctor);
  return (
    <div>
      <Link to={`view/${doctor.id}`}style={{textDecoration:'none'}}>
      <MDBCard className='my-3'>
      <MDBCardBody className='text-center'>
        <MDBCardTitle>{doctor.hospital}</MDBCardTitle>
        <MDBCardText>
         {doctor.name}
         </MDBCardText>
         <MDBCardText>
         Specialty:{doctor.specialty}
        </MDBCardText>
        <MDBCardText>
         ⭐ {doctor.rating}
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
      </Link>
    </div>
  )
}

export default RestCard