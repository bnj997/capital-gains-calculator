import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Stocks/Table';
import SideDrawer from './UIElements/SideDrawer';

const App = () => {

  const [stockType, setType] = useState('VAS')
  const [stockData, setData] = useState([])

  useEffect(() => {
    
  }, [])

  return (
    <div className="container">
      <SideDrawer onChange={setType}/>
      <div className="content">
        <h1 className="heading"> CAPITAL GAINS CALCULATOR</h1>
        <Table data={stockData}/> 
      </div>
    </div>
  );
}

export default App;
