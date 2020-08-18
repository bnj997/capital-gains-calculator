import React, {useState, useEffect} from 'react';
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';
import { useHttpClient } from '../http-hook';
import {useCapGain} from '../Formula/capital-gain';

import './Stocks.css';

const Table = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [rowData, setRowData] = useState('');
  const {calculateCapGain, capitalGain, stocksRemaining, showResults } = useCapGain();

  useEffect(() => {
    setRowData(props.info)
  }, [props]);


  const processAddition = async newData => {
    try {
      await sendRequest(
        'http://localhost:5000/api/transactions/',
        'POST',
        JSON.stringify({
          date: newData.date,
          bought: newData.bought,
          unitPrice: newData.unitPrice,
          brockerage: newData.brockerage,
          totalCost: newData.totalCost,
          stock: props.stock,
        }),
        { 'Content-Type': 'application/json' }
      );
      setRowData(prevDatas => {
        return [...prevDatas, newData];
      });
    } catch (err) {}
  }

  const processUpdate =  async (newData, oldData) => {
    try {
      await sendRequest(
        `http://localhost:5000/api/transactions/${oldData._id}`,
        'PATCH',
        JSON.stringify({
          date: newData.date,
          bought: newData.bought,
          unitPrice: newData.unitPrice,
          brockerage: newData.brockerage,
          totalCost: newData.totalCost,
        }),
        { 'Content-Type': 'application/json' }
      );
      setRowData((prevDatas) => {
        const data = [...prevDatas];
        data[data.indexOf(oldData)] = newData;
        return data;
      });
    } catch (err) {}

  }

  const processDeletion =  async (oldData) => {
    try {
      await sendRequest(
        `http://localhost:5000/api/transactions/${oldData._id}`,
        'DELETE',
        { 'Content-Type': 'application/json' }
      );
      setRowData(prevDatas => {
        return prevDatas.filter((transaction) => {
          return transaction._id !== oldData._id
        })
      })
    } catch (err) {}
  }




  const transactionColumn = [
    { 
      title: 'Date', 
      field: 'date' },
    { 
      title: 'Bought', 
      field: 'bought' },
    { 
      title: 'Unit Price', 
      field: 'unitPrice', 
      type: 'numeric' },
    {
      title: 'Brockerage',
      field: 'brockerage',
    },
    {
      title: 'Total Cost',
      field: 'totalCost',
    }
  ]
   
  const capGainColumns = [
    { 
      title: 'Batch Sell Date', 
      field: 'dateSold' 
    },
    { 
      title: 'Cost Base', 
      field: 'costBase' 
    },
    { 
      title: 'Portion of Batch Sold', 
      field: 'batchProp',
    }, 
    {
      title: 'Cost of Portion',
      field: 'costProp',
    },
    {
      title: 'Sales Value of Portion',
      field: 'salesValue',
    },
    {
      title: 'Capital Gain',
      field: 'capGain',
    },
  ]




  return (
    <React.Fragment>
      <MaterialTable
        title={props.stock}
        columns={transactionColumn}
        data={rowData}
        editable={{
          onRowAdd: (newData) =>
            processAddition(newData),
          onRowUpdate: (newData, oldData) =>
            processUpdate(newData, oldData),
          onRowDelete: (oldData) =>
            processDeletion(oldData)
        }}
      />
      <Button onClick={() => calculateCapGain(props.info, "fifo")}> CALCULATE FIFO </Button>
      <Button onClick={() => calculateCapGain(props.info, "lifo")}> CALCULATE LIFO </Button>

      {showResults && <MaterialTable
        title="Capital Gain"
        columns={capGainColumns}
        data={capitalGain}
        className="data-table"
      />}

      {showResults && <MaterialTable 
        title="Remaining Stocks"
        columns={transactionColumn}
        data={stocksRemaining}
        className="data-table"
      />}

    </React.Fragment>
  )
}

export default Table;