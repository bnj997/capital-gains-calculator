import React, {useState, useEffect} from 'react';
import { useHttpClient } from '../http-hook';
import { Button} from "@material-ui/core";
import './SideDrawer.css';

const SideDrawer = props => {
  const {sendRequest} = useHttpClient();
  const [stocks, setStocks] = useState([])
  const [newStock, setNewStock] = useState('');

  const handleChange = (event) => {
    setNewStock(event.target.value)
  }


  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/stocks'
        );
        setStocks(responseData.stocks);
      } catch (err) {}
    };
    fetchStocks();
  }, [sendRequest]);


  const addStock = async (event) => {
    try {
      await sendRequest(
        'http://localhost:5000/api/stocks/',
        'POST',
        JSON.stringify({
          _id: newStock,
        }),
        { 'Content-Type': 'application/json' }
      );
      setStocks(prevStocks => {
        return [...prevStocks, newStock];
      });
    } catch (err) {}
    event.preventDefault()
  }


  return (
    <div className="side-drawer">
      <ul className="nav-links">
        {stocks.map(function(stock,i) {
          return (
            <li onClick={() => props.onChange(stock._id)}> 
              {stock._id}
            </li>
          )
        })}
      </ul>
      <form onSubmit={addStock}>
        <input value={newStock} onChange={handleChange} id="stock" />
        <input className="button" type="submit" value="Submit"/> 
      </form>
    </div>

  )
};

export default SideDrawer;
