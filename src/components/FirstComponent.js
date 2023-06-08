import React from 'react';
import  {people}  from '../data.js';
import { getImageUrl } from '../getImageUrl.js';
export default function FirstComponent() {
  const lista = people.filter((e)=>{
    return e.profession==="chemist";
  })
  const listi = lista.map((e) =>  (
    <li key = {e.id}> 
    <img src={getImageUrl(e)} alt={e.name} />
    <p>
      <b>{e.name}</b>
      {' ' + e.profession + ' ' + e.accomplishment}
    </p>
    </li>

  ))

    return (
      <div>
       {listi}
      </div>
    );
  }