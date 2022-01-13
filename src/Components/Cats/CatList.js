import React from 'react';

const CatList = (props) => {
  return (
    <div className='main'>
      <div className='mainDiv'>
        {props.cats.map(cat => <li>{cat}</li> )}
      </div>
    </div>
 )
}


export default CatList;
