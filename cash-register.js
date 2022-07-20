//this algorithm it's not so well thought, I thinked much ways of doing this one but I kinda fed up and did only what fcc needed
function checkCashRegister(price, cash, cid) {
  let change = cash-price;
  let changeCpy = change;
  let cidTotal = cid.reduce((prev,current)=>(prev+current[1]), 0).toFixed(2);
  const NO_FUNDS = "INSUFFICIENT_FUNDS"
  const CLOSED = "CLOSED";
  const OPEN = "OPEN";
  const registerStatus = {
    status:OPEN,
    change:[],
  }
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME":0.1,
    "QUARTER":0.25,
    "ONE":1,
    "FIVE": 5,
    "TEN":10,
    "TWENTY":20,
    "ONE HUNDRED": 100,
  }

  for(let i = cid.length-1; i >=0; i--){
    const unitValue = currencyUnit[cid[i][0]];
    const currencyTotal = cid[i][1]

    if(change < unitValue && currencyTotal > 0){
      continue
    }else{
      if(change >= currencyTotal){//use all
        change -= currencyTotal;
        registerStatus.change.push(cid[i]);
      }else{
        let unitsRequired = change - change % unitValue; 
        change -= ( cid[i][1] = unitsRequired );
        registerStatus.change.push(cid[i]);
      }
    }
    change = change.toFixed(2);//because javascript can't quite handle the float operations
  }
  if(change > 0 ){
    registerStatus.status = NO_FUNDS;
    registerStatus.change = [];
  }else if(changeCpy == cidTotal){
    registerStatus.status = CLOSED;
    registerStatus.change.sort((a,b)=>currencyUnit[a[0]]-currencyUnit[b[0]]);
  }
  return registerStatus;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
