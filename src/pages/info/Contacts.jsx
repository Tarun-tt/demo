import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Checkbox, TextField, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";

const mockDataContacts =[{
  id: 1,
  name: "",
  rate: "",
  desc: "",
  quan: "",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId:"",
},
{
  id: 2,
  name: "",
  rate: "",
  desc: "",
  quan: "",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId:"",
},
{
  id: 3,
  name: "",
  rate: "",
  desc: "",
  quan: "",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId:"",
},
{
  id: "",
  name: "",
  rate: "",
  desc: "",
  quan: "",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId:"",
},
{
  id: "",
  name: "",
  rate: "",
  desc: "",
  quan: "",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId:"",
},

]
const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [visibleRows, setVisibleRows] = useState(5);
  const [rows, setRows] = useState([...mockDataContacts.slice(0, visibleRows)]);
  const [rate, setRate] = useState(0);
  const [icode, setICode] = useState(0);

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleRateChange = (event) => {
    const newRate = parseFloat(event.target.value) || 0;
    setRate(newRate);
    recalculateDiscountAmount(newRate, discountPercentage);
  };
  const handleItemChange = (event) => {
    const newItem = parseFloat(event.target.value) || 0;
    setICode(newItem);
  };
  const handleDiscountPercentageChange = (event) => {
    const newDiscountPercentage = parseFloat(event.target.value) || 0;
    setDiscountPercentage(newDiscountPercentage);
    recalculateDiscountAmount(rate, newDiscountPercentage);
  };

  const recalculateDiscountAmount = (newRate, newDiscountPercentage) => {
    const newDiscountAmount = (newRate * newDiscountPercentage) / 100;
    setDiscountAmount(newDiscountAmount);
  };

  const handleActiveChange = (event) => {
    setIsActive(event.target.checked);
  };
  
  const handleCellChange = (id, field, value) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      const rowIndex = updatedRows.findIndex((row) => row.id === id);
      
      if (rowIndex !== -1) {
        updatedRows[rowIndex] = {
          ...updatedRows[rowIndex],
          [field]: value,
        };
      }
  
      return updatedRows;
    });
  };
  const handleAddRow = () => {
    const newRow = {
      id: "",
      name: "",
      rate: "",
      desc: "",
      quan: "",
      discountPercentage: "",
      discountAmount: "",
      isActive: false,
      registrarId: "",
    };
    setRows((prevRows) => [...prevRows, newRow]);
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 1);
  };
  const contactsColumns = [
    { field: "id", headerName: "Item Code", flex: 0.7, renderCell: (params) => <TextField variant="standard" value={icode} onChange={handleItemChange} /> },
    { field: "registrarId", headerName: "HSN/SAC Code", renderCell: (params) => <TextField variant="standard" value={params.row.registrarId} onChange={(e) => handleCellChange(params.id, 'registrarId', e.target.value)} /> },
    { field: "name", headerName: "Job work Sac", flex: 1, renderCell: (params) => <TextField variant="standard" value={params.row.name} onChange={(e) => handleCellChange(params.id, 'name', e.target.value)} /> },
    { field: "desc", headerName: "Description", flex: 2.5, renderCell: (params) => <TextField fullWidth variant="standard" value={params.row.desc} onChange={(e) => handleCellChange(params.id, 'desc', e.target.value)} /> },
    { field: "quan", headerName: "Quantity", flex: 1, renderCell: (params) => <TextField variant="standard" value={params.row.quan} onChange={(e) => handleCellChange(params.id, 'quan', e.target.value)} /> },
    { field: 'rate', headerName: 'Rate', flex: 1, renderCell: (params) => <TextField variant="standard" value={rate} onChange={handleRateChange} /> },
    { field: 'discountPercentage', headerName: 'Discount %', renderCell: (params) => <TextField variant="standard" value={discountPercentage} onChange={handleDiscountPercentageChange} /> },
    { 
      field: 'discountAmount', 
      headerName: 'Discount Amount', 
      flex: 1, 
      value: discountAmount,  // This should be calculated based on rate and discountPercentage
      renderCell: (params) => <TextField variant="standard" value={discountAmount} disabled />, // Display the calculated value
    },
    { 
      field: 'isActive', 
      headerName: 'Active', 
      flex: 0.3, 
      renderCell: (params) => <Checkbox checked={isActive} onChange={handleActiveChange} />, 
    },
  ];
  return (
    <Box m="20px">
{/* <Header title="UNIT 2" subtitle="SIETZ TECHNOLOGIES INDIA PVT LTD." /> */}
      <Box
        // m="40px 0 0 0"
        height={`${visibleRows * 50 + 150}px`} 
        // custom css for material ui
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          // 🟧🟧🟧 data filter tool-bar present here 🟧🟧🟧
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={contactsColumns}
          components={{ Toolbar: GridToolbar }}
        />

      </Box>
    </Box>
  );
};

export default Contacts;