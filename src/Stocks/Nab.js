import React, {useState} from 'react';
import MaterialTable from "material-table";
import { Button, TableContainer } from '@material-ui/core';

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
    // data: [
    //   { 
    //     date: '13/03/2020', 
    //     bought: 124, 
    //     unitPrice: 16.70, 
    //     brockerage: 19.95,
    //     totalCost: 2090.75,
    //   },
    //   {
    //     date: '16/03/2020', 
    //     bought: 58, 
    //     unitPrice: 17.30, 
    //     brockerage: 19.95,
    //     totalCost: 1023.35,
    //   },
    //   {
    //     date: '27/03/2020', 
    //     bought: -90, 
    //     unitPrice: 16.23, 
    //     brockerage: 19.95,
    //     totalCost: -1440.75,
    //   },
    //   {
    //     date: '22/04/2020', 
    //     bought: 64, 
    //     unitPrice: 15.50, 
    //     brockerage: 10.00,
    //     totalCost: 1002.00,
    //   },
    //   {
    //     date: '12/05/2020', 
    //     bought: 64, 
    //     unitPrice: 15.50, 
    //     brockerage: 10.00,
    //     totalCost: 1002.00,
    //   }
    // ],
  });

  const [showCapGain, setShowCapGain] = useState(false);

  const [capitalGain, setCapitalGain] = useState([]);
  const [remainder, setRemainder] = useState([]);


  const [column, setCol] = useState({
    columns: [
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
    ],
  })

  const addCap = (newData) => {
    setCapitalGain(prevDatas => {
      return [...prevDatas, newData];
    });
  }

  const addRemainder = (newData) => {
    // var i = newData.length
    // while (i--) {
    //   if (newData[i].bought < 0) {
    //     newData.splice(i, 1);
    //   }
    // }
    setRemainder(() => {
      return newData;
    });
  }
  
 
  const fifoCapGain = (table) => {
    var netGain = 0;
    setCapitalGain([])
    var transArray = [];
    var dateSold;
    var costBase;
    var batchProp;
    var costProp;
    var salesValue;
    var capGain;
    for (var i = 0; i < table.length; i++) {
      var costBase = table[i].totalCost / table[i].bought
      table[i].costBase = costBase
      var newRow = {...table[i]}
      transArray.push(newRow)
      var length = transArray.length
      if (transArray[length - 1].bought < 0) {
        var numStocksSold = -(transArray[length - 1].bought)
        var totalCost = transArray[length - 1].totalCost;
        var bought = transArray[length - 1].bought
        while(numStocksSold > 0) {
          if (numStocksSold > transArray[0].bought) {
            numStocksSold = numStocksSold - transArray[0].bought; 
            batchProp = transArray[0].bought; 
            transArray[0].bought = 0 
          } 
          else {
            batchProp = numStocksSold;
            transArray[0].bought = transArray[0].bought - numStocksSold 
            numStocksSold = 0 
          }
          dateSold = transArray[0].date;
          costBase = transArray[0].costBase; 
          costProp = batchProp * costBase; 
          salesValue = batchProp * (totalCost / bought); 
          capGain = salesValue - costProp; 
          netGain = netGain + capGain;
          addCap( {
            dateSold: dateSold,
            costBase: costBase,
            batchProp: batchProp,
            costProp: costProp, 
            salesValue: salesValue,
            capGain: capGain
          })
          if (transArray[0].bought <= 0) {
            transArray.shift();
            length--
          } 
        }
        transArray.splice(length - 1, 1)  
        length--
      } 
    }
    addCap( {
      dateSold: '',
      costBase: '',
      batchProp: '',
      costProp: '', 
      salesValue: '',
      capGain: netGain
    })
    addRemainder(transArray)
    setShowCapGain(true)
  };


  const lifoCapGain = (table) => {
    var netGain = 0;
    setCapitalGain([])
    var transArray = [];
    var dateSold;
    var costBase;
    var batchProp;
    var costProp;
    var salesValue;
    var capGain;
    for (var i = 0; i < table.length; i++) {
      var costBase = table[i].totalCost / table[i].bought
      table[i].costBase = costBase
      var newRow = {...table[i]}
      transArray.push(newRow)
      var length = transArray.length
      if (transArray[length - 1].bought < 0) {
        var numStocksSold = -(transArray[length - 1].bought)
        var totalCost = transArray[length - 1].totalCost;
        var bought = transArray[length - 1].bought
        while(numStocksSold > 0) {
          if (numStocksSold > transArray[length - 2].bought) {
            numStocksSold = numStocksSold - transArray[length - 2].bought; 
            batchProp = transArray[length - 2].bought; 
            transArray[length - 2].bought = 0 
          } 
          else {
            batchProp = numStocksSold;
            transArray[length - 2].bought = transArray[length - 2].bought - numStocksSold 
            numStocksSold = 0 
          }
          dateSold = transArray[length - 2].date;
          costBase = transArray[length - 2].costBase; 
          costProp = batchProp * costBase; 
          salesValue = batchProp * (totalCost / bought); 
          capGain = salesValue - costProp; 
          netGain = netGain + capGain;
          addCap( {
            dateSold: dateSold,
            costBase: costBase,
            batchProp: batchProp,
            costProp: costProp, 
            salesValue: salesValue,
            capGain: capGain
          })
          if (transArray[length - 2].bought === 0) {
            transArray.splice(length - 2, 1);
            length--
          } 
        }  
        transArray.splice(length - 1, 1)  
        length--
      } 
    }
    addCap( {
      dateSold: '',
      costBase: '',
      batchProp: '',
      costProp: '', 
      salesValue: '',
      capGain: netGain
    })
    addRemainder(transArray)
    setShowCapGain(true)
  };


  return (
    <React.Fragment>
      <MaterialTable style={{width: "80%"}}
        title="VTS"
        columns={data.columns}
        data={data.data}
      />
      <Button onClick={() => fifoCapGain(data.data)}> CALCULATE FIFO </Button>
      <Button onClick={() => lifoCapGain(data.data)}> CALCULATE LIFO </Button>

      {showCapGain && <MaterialTable style={{width: "80%"}}
        title="Capital Gain"
        columns={column.columns}
        data={capitalGain}
      />}

      {showCapGain && <MaterialTable style={{width: "80%"}}
        title="Remaining Stocks"
        columns={data.columns}
        data={remainder}
      />}

    </React.Fragment>
  )
}

export default Nab;