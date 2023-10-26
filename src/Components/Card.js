import React from 'react';

const Card = (props) => {
  const {id, name, email} = props;

  return (
    <div className='bg-light-blue b--lightest-blue light-purple dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
       <img 
       alt='robo1'
       src={`https://robohash.org/robofriend${id}?size=250x180`}
       />
       <div>
       <h2>{name}</h2>{" "}
       <p className='light-purple'>{email}</p>
         </div>
      </div>
  )
}

export default Card;