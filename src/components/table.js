import React from "react";
import './table.css'

const Table = (props) => {
    const { restaurants }= props;
    return (
        
<table className="tablel" style={{ width:"100%" }}>
  <tr>
    <th>Name</th>
    <th>Address</th> 
    <th>Price</th>
   
  </tr>
  
    {restaurants.map(item => {
      return (
          <tr>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.price}</td>
              
          </tr>
      )
  } )}
  
</table>
    )
}

export default Table;