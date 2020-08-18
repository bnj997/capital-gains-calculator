import React, {useState} from 'react';
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';
import {useCapGain} from '../Formula/capital-gain';

import './Stocks.css';

const Table = props => {

  const [data, setData] = useState({
    columns: [
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
      },
    ],
  });

   
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


  const {calculateCapGain, capitalGain, stocksRemaining, showResults } = useCapGain();


  return (
    <React.Fragment>
      <MaterialTable
        title={props.stock}
        columns={data.columns}
        data={props.info}
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
        columns={data.columns}
        data={stocksRemaining}
        className="data-table"
      />}

    </React.Fragment>
  )
}

export default Table;