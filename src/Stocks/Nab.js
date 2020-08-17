import React, {useState} from 'react';
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';
import {useCapGain} from '../Formula/capital-gain';

import './Stocks.css';

const Nab = () => {
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
    // data: [
    //   { 
    //     date: '16/03/2020', 
    //     bought: 60, 
    //     unitPrice: 16.68, 
    //     brockerage: 10.00,
    //     totalCost: 1010.8,
    //   },
    //   {
    //     date: '17/03/2020', 
    //     bought: 58, 
    //     unitPrice: 17.10, 
    //     brockerage: 10.00,
    //     totalCost: 1001.8,
    //   },
    //   {
    //     date: '18/03/2020', 
    //     bought: 58, 
    //     unitPrice: 17.01, 
    //     brockerage: 10.00,
    //     totalCost: 996.58,
    //   },
    //   {
    //     date: '27/03/2020', 
    //     bought: -85, 
    //     unitPrice: 15.78, 
    //     brockerage: 19.95,
    //     totalCost: -1321.41,
    //   },
    //   {
    //     date: '8/04/2020', 
    //     bought: 64, 
    //     unitPrice: 15.50, 
    //     brockerage: 10.00,
    //     totalCost: 1002.0,
    //   },
    //   {
    //     date: '12/04/2020', 
    //     bought: 64, 
    //     unitPrice: 15.48, 
    //     brockerage: 10.00,
    //     totalCost: 1000.72,
    //   },
    // ],
    // data: [
    //   {
    //     date: '16/03/2020', 
    //     bought: 47, 
    //     unitPrice: 21.10, 
    //     brockerage: 10.00,
    //     totalCost: 1001.7,
    //   },
    //   { 
    //     date: '16/03/2020', 
    //     bought: 49, 
    //     unitPrice: 20.12, 
    //     brockerage: 10.00,
    //     totalCost: 995.88,
    //   },
    //   {
    //     date: '17/03/2020', 
    //     bought: 52, 
    //     unitPrice: 18.95, 
    //     brockerage: 10.00,
    //     totalCost: 995.40,
    //   },
    //   {
    //     date: '18/03/2020', 
    //     bought: 90, 
    //     unitPrice: 16.70, 
    //     brockerage: 19.95,
    //     totalCost: 1522.95,
    //   },
    //   {
    //     date: '18/03/2020', 
    //     bought: 74, 
    //     unitPrice: 14.29, 
    //     brockerage: 19.95,
    //     totalCost: 1077.04,
    //   },
    //   {
    //     date: '19/03/2020', 
    //     bought: 100, 
    //     unitPrice: 11.60, 
    //     brockerage: 19.95,
    //     totalCost: 1179.95,
    //   },
    //   {
    //     date: '20/03/2020', 
    //     bought: 75, 
    //     unitPrice: 13.75, 
    //     brockerage: 19.95,
    //     totalCost: 1051.20,
    //   },
    //   {
    //     date: '20/03/2020', 
    //     bought: 42, 
    //     unitPrice: 14.10, 
    //     brockerage: 10.00,
    //     totalCost: 602.20,
    //   },
    //   {
    //     date: '25/03/2020', 
    //     bought: -469, 
    //     unitPrice: 14.92, 
    //     brockerage: 19.95,
    //     totalCost: -6977.53,
    //   },
    //   {
    //     date: '26/03/2020', 
    //     bought: -60, 
    //     unitPrice: 16.10, 
    //     brockerage: 10.00,
    //     totalCost: -956.00,
    //   },
    // ],
    // data: [
    //   { 
    //     date: '6/01/2020', 
    //     bought: 10, 
    //     unitPrice: 235.00, 
    //     brockerage: 19.95,
    //     totalCost: 2369.95,
    //   },
    //   {
    //     date: '23/03/2020', 
    //     bought: 14, 
    //     unitPrice: 195.00, 
    //     brockerage: 19.95,
    //     totalCost: 2749.95,
    //   },
    //   {
    //     date: '27/03/2020', 
    //     bought: -8, 
    //     unitPrice: 216.00, 
    //     brockerage: 19.95,
    //     totalCost: -1708.05,
    //   },
    //   {
    //     date: '7/04/2020', 
    //     bought: -8, 
    //     unitPrice: 216.47, 
    //     brockerage: 19.95,
    //     totalCost: -1711.81,
    //   }
    // ],
    data: [
      { 
        date: '13/03/2020', 
        bought: 124, 
        unitPrice: 16.70, 
        brockerage: 19.95,
        totalCost: 2090.75,
      },
      {
        date: '16/03/2020', 
        bought: 58, 
        unitPrice: 17.30, 
        brockerage: 19.95,
        totalCost: 1023.35,
      },
      {
        date: '27/03/2020', 
        bought: -90, 
        unitPrice: 16.23, 
        brockerage: 19.95,
        totalCost: -1440.75,
      },
      {
        date: '22/04/2020', 
        bought: 64, 
        unitPrice: 15.50, 
        brockerage: 10.00,
        totalCost: 1002.00,
      },
      {
        date: '12/05/2020', 
        bought: 64, 
        unitPrice: 15.50, 
        brockerage: 10.00,
        totalCost: 1002.00,
      }
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
        title="VTS"
        columns={data.columns}
        data={data.data}
      />
      <Button onClick={() => calculateCapGain(data.data, "fifo")}> CALCULATE FIFO </Button>
      <Button onClick={() => calculateCapGain(data.data, "lifo")}> CALCULATE LIFO </Button>

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

export default Nab;