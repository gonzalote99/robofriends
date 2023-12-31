import React from 'react';
import './Scroll.css';


const Scroll = (props) => {
  return (
    <div 
    style={{
      overflowY: 'scroll',
      border: '2px solid #83b3c1',
      height: '500px',
    }}
    > {props.children}
      </div>
  );
};

export default Scroll;