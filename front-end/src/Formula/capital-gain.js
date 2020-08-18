import {useState} from 'react';

export const useCapGain = () => {
  const [capitalGain, setCapitalGain] = useState([]);
  const [stocksRemaining, setRemaining] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const addCap = (newData) => {
    setCapitalGain(prevDatas => {
      return [...prevDatas, newData];
    });
  }

  const addRemainder = (newData) => {
    setRemaining(() => {
      return newData;
    });
  }
  const calculateCapGain = (table, type) => {
    setCapitalGain([])
    var netGain = 0;
    var transArray = [];
    var dateSold;
    var costBase;
    var batchProp;
    var costProp;
    var salesValue;
    var capGain;
    var calc;
    for (var i = 0; i < table.length; i++) {
      costBase = table[i].totalCost / table[i].bought
      table[i].costBase = costBase
      var newRow = {...table[i]}
      transArray.push(newRow)
      var length = transArray.length
      if (transArray[length - 1].bought < 0) {
        var numStocksSold = -(transArray[length - 1].bought)
        var totalCost = transArray[length - 1].totalCost;
        var bought = transArray[length - 1].bought
        while(numStocksSold > 0) {
          if (type === "fifo") {
            calc = 0
          } else if (type === "lifo") {
            calc = length - 2;
          }
          if (numStocksSold > transArray[calc].bought) {
            numStocksSold = numStocksSold - transArray[calc].bought; 
            batchProp = transArray[calc].bought; 
            transArray[calc].bought = 0 
          } 
          else {
            batchProp = numStocksSold;
            transArray[calc].bought = transArray[calc].bought - numStocksSold 
            numStocksSold = 0 
          }
          dateSold = transArray[calc].date;
          costBase = transArray[calc].costBase; 
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
          if (transArray[calc].bought === 0) {
            if (type === "fifo") {
              transArray.shift();
            } else if (type === "lifo") {
              transArray.splice(length - 2, 1);
            }
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
      salesValue: "NET GAIN/LOSS",
      capGain: netGain
    })
    addRemainder(transArray)
    setShowResults(true)
  };
  return {calculateCapGain, capitalGain, stocksRemaining, showResults }
}