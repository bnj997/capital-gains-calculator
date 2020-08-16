import React, {useState} from 'react';
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';

const Nab = () => {
  const [state, setState] = useState({
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
    data: [
      { 
        date: '16/03/2020', 
        bought: 60, 
        unitPrice: 16.68, 
        brockerage: 10.00,
        totalCost: 1010.8,
        costBase: 16.85
      },
      {
        date: '16/03/2020', 
        bought: 58, 
        unitPrice: 17.10, 
        brockerage: 10.00,
        totalCost: 1001.8,
        costBase: 17.27
      },
      {
        date: '16/03/2020', 
        bought: 58, 
        unitPrice: 17.01, 
        brockerage: 10.00,
        totalCost: 996.58,
        costBase: 17.18
      },
      {
        date: '27/03/2020', 
        bought: -85, 
        unitPrice: 15.78, 
        brockerage: 19.95,
        totalCost: -1321.41,
        costBase: 15.55
      },
      {
        date: '8/04/2020', 
        bought: 64, 
        unitPrice: 15.50, 
        brockerage: 10.00,
        totalCost: 1002.0,
        costBase: 15.66
      },
      {
        date: '12/04/2020', 
        bought: 64, 
        unitPrice: 15.48, 
        brockerage: 10.00,
        totalCost: 1000.72,
        costBase: 15.64
      },
    ],
    // data: [
    //   { 
    //     date: '6/01/2020', 
    //     bought: 10, 
    //     unitPrice: 235.00, 
    //     brockerage: 19.95,
    //     totalCost: 2369.95,
    //     costBase: 237.00
    //   },
    //   {
    //     date: '23/03/2020', 
    //     bought: 14, 
    //     unitPrice: 195.00, 
    //     brockerage: 19.95,
    //     totalCost: 2749.95,
    //     costBase: 196.43
    //   },
    //   {
    //     date: '27/03/2020', 
    //     bought: -8, 
    //     unitPrice: 216.00, 
    //     brockerage: 19.95,
    //     totalCost: -1708.05,
    //     costBase: 213.51
    //   },
    //   {
    //     date: '7/04/2020', 
    //     bought: -8, 
    //     unitPrice: 216.47, 
    //     brockerage: 19.95,
    //     totalCost: -1711.81,
    //     costBase: 213.98
    //   }
    // ],
    // data: [
    //   { 
    //     date: '6/01/2020', 
    //     bought: 2, 
    //     unitPrice: 235.00, 
    //     brockerage: 10.00,
    //     totalCost: 480.00
    //   },
    //   {
    //     date: '23/03/2020', 
    //     bought: 14, 
    //     unitPrice: 195.00, 
    //     brockerage: 19.95,
    //     totalCost: 2749.95
    //   },
    //   {
    //     date: '7/04/2020', 
    //     bought: -8, 
    //     unitPrice: 216.47, 
    //     brockerage: 19.95,
    //     totalCost: -1711.81
    //   }
    // ],
  });


  const calculateCapGain = (table) => {
    var transArray = [];
    var capGainArray = [];
    var dateSold;
    var batch;
    var costBase;
    var batchProp;
    var costProp;
    var salesValue;
    var capGain;

    for (var i = 0; i <= table.length - 1; i++) {
      transArray.push(table[i])
      if (transArray[i].bought < 0) {
        var numStocksSold = -(transArray[i].bought)
        for (var j = 0; j <= transArray.length - 1; j++) {
          if (numStocksSold > 0) {
            dateSold = transArray[j].date;
            batch = transArray[j].bought; 
            costBase = transArray[j].costBase; 
            if (numStocksSold > transArray[j].bought ) {
              numStocksSold = numStocksSold - transArray[j].bought; 
              batchProp = transArray[j].bought; 
              costProp = batchProp * costBase; 
              salesValue = batchProp * (transArray[i].totalCost / transArray[i].bought);
              capGain = salesValue - costProp; 
              transArray[j].bought = 0 
            } 
            else {
              batchProp = numStocksSold;
              costProp = batchProp * costBase; 
              salesValue = batchProp * (transArray[i].totalCost / transArray[i].bought); 
              capGain = salesValue - costProp; 
              transArray[j].bought = transArray[j].bought - numStocksSold 
              numStocksSold = 0 
            }
            capGainArray.push( 
              {
                dateSold: dateSold,
                batch: batch,
                costBase: costBase,
                batchProp: batchProp,
                costProp: costProp, 
                salesValue: salesValue,
                capGain: capGain,
              }
            )
          } else {
            break;
          }
        }
      }
    }
    console.log(transArray);
    console.log(capGainArray);
  };


  return (
    <React.Fragment>
      <MaterialTable style={{width: "80%"}}
        title="NAB"
        columns={state.columns}
        data={state.data}
      />
      <Button onClick={() => calculateCapGain(state.data)}> CALCULATE </Button>
    </React.Fragment>
  )
}

export default Nab;