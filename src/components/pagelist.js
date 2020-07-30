import React from "react";
import './table.css'

const PageList = (props) => {
  const { count }= props;

  const pageNumber = [];
  for(var i=1;i<((count/10)+1);i++){
    pageNumber.push(i);
  }

  return(
    <div className="pagel pagination" > 
      {pageNumber.map(item=>{
        return(<a className="pagenumber " onClick={(e)=>props.onPageClick(e, item)}>{item}</a>)
      })}
    </div>
  )
   
}

export default PageList;