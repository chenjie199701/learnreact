import React from 'react';
// import logo from './logo.svg';
import './App.css';

export interface Props{
  name: string;
  enthusiasmLevel?: number;

}

function Hello({name,enthusiasmLevel = 1}:Props){

  return (
    <div>
      <div>
        陈杰Hello3 { name }
      </div>
    </div>
  )
}
export default Hello;




