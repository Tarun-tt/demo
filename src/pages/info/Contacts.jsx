import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {  Autocomplete, Button, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { Box } from "@mui/material";
import { useState } from "react";
// import Header from "../../components/Header";
import ClearIcon from '@mui/icons-material/Clear';
const mockDataContacts =[{
  id: 1,
  item: "",
  name: "",
  rate: "",
  desc: "",
  quan: "",
  discountPercentage: "",
  discountAmount: "",
  isActive: true,
  registrarId:"",
},
{
  id: 2,
  item: "",
  name: "",
  rate: "",
  desc: "",
  quan: "",
  discountPercentage: "",
  discountAmount: "",
  isActive: false,
  registrarId:"",
},
{
  id: 3,
  item: "",
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
  id: 4,
  item: "",
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
  id: 5,
  item: "",
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
  const [icode, setICode] = useState("");
  const [hsn, setHsn] = useState("");
  const [job, setJob] = useState("");
  const [decription, setdescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [idCounter, setIdCounter] = useState(mockDataContacts.length + 1);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [totalDiscountAmount, setTotalDiscountAmount] = useState(0);
const [totalAmountWith18Percent, setTotalAmountWith18Percent] = useState(0);
const itemsList = ["1R0010001", "1C0010001"];
const [sgstValue, setSgstValue] = useState("");
const [ugstValue, setUgstValue] = useState("");
const [igstValue, setIgstValue] = useState("");
const handleFormSubmit = () => {
  const formDataArray = [];

  rows.forEach((row) => {
    const rowData = {
      id: row.id || '',
      item: row.item || '',
      registrarId: row.registrarId || '',
      name: row.name || '',
      desc: row.desc || '',
      quan: row.quan || '',
      rate: row.rate || '',
      discountPercentage: row.discountPercentage || '',
      discountAmount: row.discountAmount || '',
      isActive: row.isActive || '',
    };

    formDataArray.push(rowData);
  });

  console.log('formDataArray:', formDataArray);
};




  const handleRateChange = (event, id) => {
    const newRate = parseFloat(event.target.value) || 0;
    setRate(newRate);
    recalculateDiscountAmount(newRate, discountPercentage, id);
  };
  const handleItemChange = (event, id) => {
    const newItem = event.target.value;
    setICode(newItem);

    if (newItem === "1R0010001") {
      handleHsnChange({ target: { value: "87089900" } }, id);
      handleDescriptionChange({ target: { value: "Sheet 1000 * 1200" } }, id);
      // Additional logic for SGST and UGST values based on the selected item
      setSgstValue(9);
      setUgstValue(9);
      setIgstValue(""); // Clear IGST value
    } else if (newItem === "1C0010001") {
      handleJobChange({ target: { value: "40169390" } }, id);
      handleDescriptionChange({ target: { value: "Washer" } }, id);
      // Additional logic for IGST value based on the selected item
      setIgstValue(18);
      setSgstValue(""); // Clear SGST value
      setUgstValue(""); // Clear UGST value
    }
    handleCellChange(id, "item", newItem);
  };

  const handleHsnChange = (event,id) => {
    const newHsn = (event.target.value) || 0;
    setHsn(newHsn);
    handleCellChange(id, "registrarId", newHsn);
  };
  const handleJobChange = (event,id) => {
    const newJob = (event.target.value) || "";
    // setJob(newJob);
    handleCellChange(id, "name", newJob);

  };
  const handleDescriptionChange = (event, id) => {
    const newDesc = event.target.value;
    handleCellChange(id, "desc", newDesc);
  };
  const handleQuantityChange = (event,id) => {
    const newQuan = parseFloat(event.target.value) || 0;
    setQuantity(newQuan);
    handleCellChange(id, "quan", newQuan);

  };
  const handleDiscountPercentageChange = (event, id) => {
    const newDiscountPercentage = parseFloat(event.target.value) || 0;
    if (newDiscountPercentage >= 0 && newDiscountPercentage <= 99) {
      setDiscountPercentage(newDiscountPercentage);
      recalculateDiscountAmount(rate, newDiscountPercentage, id);
    } else {
      console.log("Discount percentage must be between 1 and 99");
    }
  };
  const calculateTotalDiscountAmount = (rows) => {
    return rows.reduce((total, row) => {
      return total + (row.discountAmount || 0);
    }, 0);
  };
  const recalculateDiscountAmount = (newRate, newDiscountPercentage, id) => {
    const newDiscountAmount = quantity * newRate * (1 - newDiscountPercentage / 100);
  
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row) => {
        if (row.id === id) {
          return { ...row, rate: newRate, discountPercentage: newDiscountPercentage, discountAmount: newDiscountAmount };
        }
        return row;
      });
    setDiscountAmount(newDiscountAmount);

    handleCellChange(id, 'rate', newRate);
    handleCellChange(id, 'discountPercentage', newDiscountPercentage);
    handleCellChange(id, 'discountAmount', newDiscountAmount);
    
    const updatedTotalDiscountAmount = calculateTotalDiscountAmount(updatedRows);
    setTotalDiscountAmount(updatedTotalDiscountAmount);
    const updatedTotalAmountWith18Percent = updatedTotalDiscountAmount * 1.18;
    setTotalAmountWith18Percent(updatedTotalAmountWith18Percent);

    return updatedRows;
  });
};
  const handleActiveChange = (event, id) => {
    const isChecked = event.target.checked;
  
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row) => {
        if (row.id === id) {
          return { ...row, isActive: isChecked };
        }
        return row;
      });
  
      return updatedRows;
    });
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
  const createNewRow = () => {
    return {
      id: idCounter,
      item: "",
      name: "",
      rate: "",
      desc: "",
      quan: "",
      discountPercentage: "",
      discountAmount: "",
      isActive: false,
      registrarId: "",
    };
  };
  const handleAddRow = () => {
    const newRow = createNewRow();
    setRows((prevRows) => [...prevRows, newRow]);
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 1);
    setIdCounter((prevIdCounter) => prevIdCounter + 1);
  };
  
  const handleDeleteRow = (id) => {
    setRows((prevRows) => {
      const updatedRows = prevRows.filter((row) => row.id !== id);
      
      const updatedTotalDiscountAmount = calculateTotalDiscountAmount(updatedRows);
      setTotalDiscountAmount(updatedTotalDiscountAmount);
      const updatedTotalAmountWith18Percent = updatedTotalDiscountAmount * 1.18;
      setTotalAmountWith18Percent(updatedTotalAmountWith18Percent);
  
      return updatedRows;
    });
  };
  
  const contactsColumns = [
    
    { field: "item", headerName: "Item Code",   type: 'number',flex:1,   renderCell: (params) => ( <TextField fullWidth select variant="standard" name="item" value={params.row.item} onChange={(event) => handleItemChange(event, params.row.id)}> {itemsList.map((item) => ( <MenuItem key={item} value={item}>{item}</MenuItem>))} </TextField>  ),},  
    { field: "registrarId", headerName: "HSN/SAC Code", renderCell: (params) => <TextField variant="standard" name="registrarId" value={params.row.registrarId} onChange={(event) => handleHsnChange(event, params.row.id)}/> },
    { field: "name", headerName: "Job work Sac", flex: 1,editable: true , renderCell: (params) => <TextField variant="standard" name="name" value={params.row.name}  onChange={(event) => handleJobChange(event, params.row.id)} /> },
    { field: "desc", headerName: "Description", flex: 2.5,editable: true ,renderCell: (params) => <TextField fullWidth variant="standard" name="desc" value={params.row.desc} onChange={(event) => handleDescriptionChange(event, params.row.id)} /> },
    { field: "quan", headerName: "Quantity", flex: 1,   type: 'number', renderCell: (params) => <TextField variant="standard" name="rate" value={params.row.quan}  onChange={(event) => handleQuantityChange(event, params.row.id)} /> },
    { field: 'rate', headerName: 'Rate', flex: 1,renderCell: (params) => <TextField variant="standard" name="discountPercentage" value={params.row.rate}  onChange={(event) => handleRateChange(event, params.row.id)} /> },
    { field: 'discountPercentage', headerName: 'Discount %',   type: 'number' , renderCell: (params) => <TextField variant="standard" name="item" value={params.row.discountPercentage}         onChange={(event) => handleDiscountPercentageChange(event, params.row.id)} /> },
    { field: 'discountAmount',   headerName: 'Discount Amount', flex: 1, value: discountAmount, renderCell: (params) => <TextField variant="standard"    name="discountAmount"  value={params.row.discountAmount} disabled />, },
    { field: 'isActive', headerName: 'Acton',  flex: 1,  renderCell: (params) => (
      <Box style={{ display: 'flex', alignItems: 'center' }} name="isActive">
        <Checkbox
          checked={params.row.isActive}
          onChange={(event) => handleActiveChange(event, params.row.id)}
        />
        <IconButton onClick={() => handleDeleteRow(params.row.id)}>
          <ClearIcon />
        </IconButton>
      </Box>
    ),
  },
  ];
  const [rateUnit, setRateUnit] = useState(1.000);
  const [rateUnitError, setRateUnitError] = useState(false);

  const handleRateUnitChange = (event) => {
    const value = parseFloat(event.target.value);
    setRateUnit(value);

    // Check if the value is less than 1.000
    if (value < 1.000) {
      setRateUnitError(true);
    } else {
      setRateUnitError(false);
    }
  };  



  return (
    <Box m="20px">
{/* <eader title="UNIT 2" subtitle="SIETZ TECHNOLOGIES INDIA PVT LTD." /> */}
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
        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 2 }}> */}
        <Button variant="contained" color="primary" onClick={handleAddRow} >
          Add New Row
        </Button>
      {/* </Box> */}
        <DataGrid
          rows={rows}
          columns={contactsColumns}
          components={{ Toolbar: GridToolbar }}
          
        />

      </Box>
      <Box component={Paper} sx={{ mt: 3 , display:"flex",flexDirection: "row",  gap: 5, padding: 2 }} >
  <Typography variant="h6"    sx={{color: "black",fontWeight: "bold",}}>
    Total Discount Amount: {totalDiscountAmount.toFixed(2)}
  </Typography>
  <Typography variant="h6" sx={{color: "black",fontWeight: "bold",}}>
    Total Amount with GST: {totalAmountWith18Percent.toFixed(2)}
  </Typography>
</Box>

<Box component={Paper} sx={{ mt: 3 , display:"flex",flexDirection: "column", gap: 2, padding: 2 }} >

      <Box component={Paper} sx={{ mt: 3 , display:"flex",flexDirection: "row", gap: 2, padding: 2 }} >
  
  <Typography
    variant="h4"
    component="div"
    sx={{
      color: "black",
      fontWeight: "bold",
      mb: 2,
      alignItems:"center",
      mt:5,
    }}
  >
    GST:
  </Typography>

  <FormGroup component={Paper} sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      sx={{ flexDirection: "column" }}
    >
      <FormControlLabel value="female" control={<Radio />} label="%" />
      <FormControlLabel value="male" control={<Radio />} label="Value" />
    </RadioGroup>
  </FormGroup>

<Box sx={{width:"auto"}}>    
  <Grid container spacing={2}  >
    <Grid item xs={12} sm={6} md={3} sx={{display:"flex",mb:2}}>
      <Typography
        variant="h5"
        component="div"
        
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr:2
        }}
      >
        SGST
      </Typography>
      <TextField id="outlined-basic" label="SGST" variant="outlined"  value={sgstValue} disabled />
    </Grid>
    <Grid item xs={12} sm={6} md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr:2
        }}
      >
        UGST
      </Typography>
      <TextField id="outlined-basic" label="UGST" variant="outlined" value={ugstValue} disabled />
    </Grid>
    <Grid item xs={12} sm={6} md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr:2
        }}
      >
        CGST
      </Typography>
      <TextField id="outlined-basic" label="CGST" variant="outlined" disabled/>
    </Grid>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr:2
        }}
      >
        IGST
      </Typography>
      <TextField id="outlined-basic" label="IGST" variant="outlined" value={igstValue} disabled/>
    </Grid>



  </Grid>
  <Grid container spacing={2} a>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr:2
        }}
      >
        CESS
      </Typography>
      <TextField id="outlined-basic" label="CESS" variant="outlined" disabled/>
    </Grid>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr:2
        }}
      >
      CESS
      </Typography>
      <TextField id="outlined-basic" label="CESS" variant="outlined" disabled/>
    </Grid>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr:2
        }}
      >
        CESS
      </Typography>
      <TextField id="outlined-basic" label="CESS" variant="outlined" disabled/>
    </Grid>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr:2
        }}
      >
        CESS
      </Typography>
      <TextField id="outlined-basic" label="CESS" variant="outlined" disabled/>
    </Grid>
    
  </Grid>
  </Box>
</Box>
<Box component={Paper} sx={{ mt: 3 , display:"flex",flexDirection: "row", gap: 2, padding: 2 }} >
<Typography
    variant="h4"
    component="div"
    sx={{
      color: "black",
      fontWeight: "bold",
      mb: 2,
      alignItems:"center",
      mt:2,
    }}
  >
    Others:
  </Typography>
  <Grid container spacing={2}  >
    <Grid item xs={12} sm={6} md={3} sx={{display:"flex",mb:2}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr: 2
        }}
      >
        Packing
      </Typography>
      <TextField id="outlined-basic" label="Packing" variant="outlined" />
    </Grid>
    <Grid item xs={12} sm={6} md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr: 2
        }}
      >
        Rate Unit
      </Typography>
      <TextField
            id="outlined-basic"
            label="Rate Unit"
            variant="outlined"
            type="number"
            value={rateUnit.toFixed(3) || ""} 
            onChange={handleRateUnitChange}
            error={rateUnitError}
            helperText={rateUnitError && 'Value must be greater than or equal to 1.000'}
          />
    </Grid>
    <Grid item xs={12} sm={6} md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr: 2
        }}
      >
        Fabrication Charges
      </Typography>
      <TextField id="outlined-basic" label="   Fabrication Charges" variant="outlined" />
    </Grid>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2,
          mr: 2
        }}
      >
        UOM
      </Typography>
      <TextField id="outlined-basic" label="UOM" variant="outlined" />
    </Grid>
  </Grid>
</Box>
<Box component={Paper} sx={{display:"flex",mt:3,p:2}}>
<Typography
    variant="h4"
    component="div"
    sx={{
      color: "black",
      fontWeight: "bold",
      mb: 2,
      alignItems:"center",
      mt:2,
      mr: 2
    }}
  >
    Remarks: 
  </Typography>
  <TextField fullWidth id="outlined-basic" label="Remarks" variant="outlined" inputProps={{ maxLength: 4000 }}  />
</Box>
<Grid container spacing={2} my={5}>
                            <Grid item xs={12} sm={6} align="right">
                                <Button  variant="contained" style={{ fontSize: "15px" }} color="success" onClick={handleFormSubmit} > Save </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} align="left">
                                <Button variant='outlined' style={{ fontSize: "15px" }} > Cancel</Button>
                            </Grid>
                        </Grid>
    </Box>
    </Box>
  );
};

export default Contacts;