import React from 'react';

const PaginatorItem = ({page, i, onPage}) => {

  return(
    <li 
      className={`page-item ${page===i ? 'active': ''}`}
    >
      <button className="page-link" 
        onClick={()=>{onPage(i)}}
      >
        {i}
      </button>
    </li>
  );
}

export default PaginatorItem;