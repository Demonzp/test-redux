import React, { useEffect, useState } from 'react';
import PaginatorItem from './PaginatorItem';

let _page = 1;

const Paginator = ({page, numPages, onPage})=>{
  const [preArr, setPreArr] = useState([]);
  
  useEffect(()=>{
    _page = page;
  },[]);

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

  const changePage = (page)=>{
    if(_page===page){
      return;
    }

    if(page>numPages || page<1){
      return;
    }

    _page = page;
    onPage(page);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><button className="page-link" onClick={()=>changePage(_page-1)}>Previous</button></li>
        {preArr.map((_,i)=>{
          return <PaginatorItem key={i+1} page={_page} i={i+1} onPage={changePage}/>
        })}
        
        <li className="page-item"><button className="page-link" onClick={()=>changePage(_page+1)}>Next</button></li>
      </ul>
    </nav>
  );
}

export default Paginator;