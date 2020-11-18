import React, { useEffect, useState } from 'react';
import PaginatorItem from './PaginatorItem';

const Paginator = ({page, numPages, setPage})=>{
  const [preArr, setPreArr] = useState([]);

  useEffect(()=>{
    // setLiElms(()=>{
    //   const el = [];
    //   for (let i = 1; i < numPages+1; i++) {
    //     el.push(<PaginatorItem key={i} page={page} i={i} onPage={onPage}/>);
    //   }
    //   return el;
    // });
    //console.log('rerender numPages');
    
    setPreArr(Array(numPages).fill(null));
  },[numPages]);

  const changePage = (_page)=>{

    if(_page>numPages || _page<1){
      return;
    }

    setPage(_page);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><button className="page-link" onClick={()=>changePage(page-1)}>Previous</button></li>
        {preArr.map((_,i)=>{
          return <PaginatorItem key={i+1} page={page} i={i+1} onPage={setPage}/>
        })}
        
        <li className="page-item"><button className="page-link" onClick={()=>changePage(page+1)}>Next</button></li>
      </ul>
    </nav>
  );
}

export default Paginator;