import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Autocomplete, Button, Checkbox, FormControlLabel, FormGroup, Grid, Paper, Radio, RadioGroup, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { Box } from "@mui/material";
import { useState } from "react";
// import Header from "../../components/Header";

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
  const [hsn, setHsn] = useState("");
  const [job, setJob] = useState("");
  const [decription, setdescription] = useState("");
  const [quantity, setQuantity] = useState("");


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
  const handleHsnChange = (event) => {
    const newHsn = parseFloat(event.target.value) || 0;
    setHsn(newHsn);
  };
  const handleJobChange = (event) => {
    const newJob = (event.target.value) || "";
    setJob(newJob);
  };
  const handleDescriptionChange = (event) => {
    const newdesc = (event.target.value) || "";
    setdescription(newdesc);
  };
  const handleQuantityChange = (event) => {
    const newQuan = parseFloat(event.target.value) || 0;
    setQuantity(newQuan);
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
    { field: "registrarId", headerName: "HSN/SAC Code", renderCell: (params) => <TextField variant="standard" value={hsn} onChange={handleHsnChange}/> },
    { field: "name", headerName: "Job work Sac", flex: 1, renderCell: (params) => <TextField variant="standard" value={job} onChange={handleJobChange} /> },
    { field: "desc", headerName: "Description", flex: 2.5, renderCell: (params) => <TextField fullWidth variant="standard" value={decription} onChange={handleDescriptionChange} /> },
    { field: "quan", headerName: "Quantity", flex: 1, renderCell: (params) => <TextField variant="standard" value={quantity} onChange={handleQuantityChange} /> },
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
        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 2 }}> */}
        <Button variant="contained" color="primary" onClick={handleAddRow} >
          Add New Row
        </Button>
      {/* </Box> */}
        <DataGrid
          rows={rows}
          columns={contactsColumns}
          components={{ Toolbar: GridToolbar }}
          sx={{mb:2}}
        />

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
      mt:5,
    }}
  >
    GST
  </Typography>

  <FormGroup component={Paper} sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      sx={{ flexDirection: "row" }}
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
          mt: 2
        }}
      >
        SGST
      </Typography>
      <TextField id="outlined-basic" label="SGST" variant="outlined" />
    </Grid>
    <Grid item xs={12} sm={6} md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2
        }}
      >
        UGST
      </Typography>
      <TextField id="outlined-basic" label="UGST" variant="outlined" />
    </Grid>
    <Grid item xs={12} sm={6} md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2
        }}
      >
        CGST
      </Typography>
      <TextField id="outlined-basic" label="CGST" variant="outlined" />
    </Grid>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2
        }}
      >
        IGST
      </Typography>
      <TextField id="outlined-basic" label="IGST" variant="outlined" />
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
          mt: 2
        }}
      >
        CESS
      </Typography>
      <TextField id="outlined-basic" label="CESS" variant="outlined" />
    </Grid>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2
        }}
      >
      CESS
      </Typography>
      <TextField id="outlined-basic" label="CESS" variant="outlined" />
    </Grid>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2
        }}
      >
        CESS
      </Typography>
      <TextField id="outlined-basic" label="CESS" variant="outlined" />
    </Grid>
    <Grid item xs={12} sm={6}  md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2
        }}
      >
        CESS
      </Typography>
      <TextField id="outlined-basic" label="CESS" variant="outlined" />
    </Grid>
    
  </Grid>
  </Box>
</Box>
<Box component={Paper}>
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
    Others
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
          mt: 2
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
          mt: 2
        }}
      >
        Rate Unit
      </Typography>
      <TextField id="outlined-basic" label="Rate Unit" variant="outlined" />
    </Grid>
    <Grid item xs={12} sm={6} md={3} sx={{display:"flex"}}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "black",
          fontWeight: "bold",
          mb: 2,
          mt: 2
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
          mt: 2
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
      
    }}
  >
    Remarks
  </Typography>
  <TextField fullWidth id="outlined-basic" label="Remarks" variant="outlined" />
</Box>
    </Box>
  );
};

export default Contacts;