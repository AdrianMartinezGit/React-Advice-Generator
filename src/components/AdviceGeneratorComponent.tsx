import React, { useState } from 'react';
import logo from '../logo.svg';
import Advice from '../Interfaces/Interface';
import '../App.css';

const AdviceGeneratorComponent = (props: {id: number, advice: string}) => {

  return (
    <div className="App">
      <header className="App-header">
        <p>Advice #{props.id}</p>
        <p>"{props.advice}"</p>
      </header>
    </div>
  )
}

export default AdviceGeneratorComponent
