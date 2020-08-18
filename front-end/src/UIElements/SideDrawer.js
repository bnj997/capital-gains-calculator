import React, {useState, useEffect} from 'react';
import { useHttpClient } from '../http-hook';
import './SideDrawer.css';

const SideDrawer = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [stocks, setStocks] = useState([])

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

  return (
    <div className="side-drawer" onClick={props.onClick}>
      <ul className="nav-links">
        {stocks.map(function(stock,i) {
          return (
            <li onClick={() => props.onChange(stock._id)}> 
              {stock._id}
            </li>
          )
        })}
      </ul>
    </div>

  )
};

export default SideDrawer;
