const divisions = [
    {label:'FARIDABAD',id:1},
    {label:'DELHI',id:2},
    {label:'PUNE',id:3},
];
const category = [
    {label:'DI',id:1},
    {label:'IN',id:2},
    {label:'JW',id:3},
];
const vendors = [
    {label:'A0001',id:1,description:"ABC LTD",payment_id:1},
    {label:'V0001',id:2,description:"VICTORY LTD",payment_id:2},
    {label:'R0001',id:3,description:"RAM LTD",payment_id:2},
];
const currency = [
    {label:'RUPEES',id:1},
    {label:'EURU',id:2},
    {label:'DOLLAR',id:3},
];
const vendorState = [
    {label:'DELHI',id:1},
    {label:'MUMBAI',id:2},
    {label:'GUJRAT',id:3},
];
const paymentTerm = [
    {label:'100% advance Payment',id:1},
    {label:'10% advance & balance after delivery',id:2},
    
];
const store = [
    {label:'RECIEVING STORE',wc_id:1,description:"RECIEVING STORE",id:1},
    {label:'MAIN STORE',description:"MAIN STORE",wc_id:2,id:2},
    
];
const priceBasis = [
    {label:"EX FACTORY",id:1},
    {label:"CIF",id:2}
];
const modeTransport = [
    {label:'50',id:1,description: "BY ROAD"},
    {label:'51',id:2,description: "BY AIR"},
    {label:'52',id:3,description: "BY HAND"},
];
const top100Films = [
    { label: 'P1', year: 1994 },
    { label: 'P2', year: 1972 },
    { label: 'P3', year: 1974 },
    { label: 'P4', year: 2008 },
];

export  {divisions,top100Films,category,vendors,currency,modeTransport,paymentTerm,vendorState,store,priceBasis};