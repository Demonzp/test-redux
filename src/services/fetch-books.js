const dataBooks = [
  {
    id:'dwadakjrfoip3',
    title:'book1',
    author:'Ddwadaerf Ardfj',
    price:10
  },
  {
    id:'dwadwadrfoip3',
    title:'book2',
    author:'Ddwadaerf Ardfj',
    price:15
  },
  {
    id:'dwat6foip3',
    title:'book3',
    author:'Ddwadaerf Ardfj',
    price:10
  },
  {
    id:'dwafertyrfoip3',
    title:'book4',
    author:'Ddwadaerf Ardfj',
    price:20
  },
  {
    id:'456yhakjrfoip3',
    title:'book5',
    author:'Ddwadaerf Ardfj',
    price:12
  },
  {
    id:'vsgtyjrfoip3',
    title:'book6',
    author:'Ddwadaerf Ardfj',
    price:10
  },
  {
    id:'frt56yujn',
    title:'book7',
    author:'Ddwadaerf Ardfj',
    price:10
  }
]

export const fetchBooksReq = ( page )=>{
  let delay = 800;

  if(page===2){
    delay = 1600;
  }

  return new Promise((resolve)=>{

    setTimeout(()=>{
      const start = (page-1)*3;
      const numPages = Math.ceil(dataBooks.length / 3);

      const data = {
        books: dataBooks.slice(start, start+3),
        page,
        prevPage: page>1 ? page-1 : 1,
        nextPage: page<numPages ? page+1 : numPages,
        numPages
      };
      //console.log('data = ', data);
      resolve(data);
    }, delay);
  });
  
}