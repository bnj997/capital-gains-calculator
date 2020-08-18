import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Stocks/Table';
import { useHttpClient } from './http-hook';
import SideDrawer from './UIElements/SideDrawer';

const App = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [stockType, setType] = useState('VAS')
  const [stockData, setData] = useState([])

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/transactions/${stockType}`
        );
        setData(responseData.transactions);
      } catch (err) {}
    };
    fetchStockData();
  }, [sendRequest, stockType])


  const changeStock = (stock) => {
    setType(stock)
  }


  return (
    <div className="container">
      <SideDrawer onChange={changeStock}/>
      <div className="content">
        <h1 className="heading"> CAPITAL GAINS CALCULATOR</h1>
        <Table info={stockData} stock={stockType}/> 
      </div>
    </div>
  );
}

export default App;
