import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import RestCard from './RestCard'
function AllRest() {
 const base_url='https://hospital-backend-egta.onrender.com/doctors'
 const[AllRestData,setAllRestData]=useState([])
 const fetchdata=async()=>{
  const result=await axios.get(base_url)
  console.log(result.data)
  setAllRestData(result.data)
 }
 console.log(AllRestData);
 useEffect(()=>{
  fetchdata()
 },[])
  return (
    <div>
      <div>
        <Row>
          {
            AllRestData.map(item=>(
              <Col sm={12} md={6} lg={5} xl={3} >
                <RestCard doctor={item}/>
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
  )
}

export default AllRest