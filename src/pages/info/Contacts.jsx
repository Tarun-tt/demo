import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Autocomplete, Button, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
// import Header from "../../components/Header";
import ClearIcon from '@mui/icons-material/Clear';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

import {  useNavigate } from "react-router-dom";
const mockDataContacts = [{
  id: 1,
  item: "",
  name: "",
  rate: "",
  desc: "",
  quan: "",
  discountPercentage: "",
  discountAmount: "",
  isActive: true,
  registrarId: "",
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
  registrarId: "",
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
  registrarId: "",
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
  registrarId: "",
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
  registrarId: "",
},

]
const Contacts = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const { register, handleSubmit, reset } = useForm();
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
  const [disPercent, setDisPercent] = useState(true);
  const [rateDisabled, setRateDisabled] = useState(true);
  
  const [selectedValue, setSelectedValue] = useState("perc");
  useEffect(() => {
    if (props?.formdata?.vendorState === "DELHI") {
      setSgstValue(9);
      setUgstValue(9);
      setIgstValue("");
    } else {
      setSgstValue("");
      setUgstValue("");
      setIgstValue(18);
    }
    window.scrollTo(0, 0)
  }, [props?.formdata?.vendorState]);
  const isJobWorkCategory = props?.formdata?.category === "JW";
  const handleFormSubmit = (formDataNew) => {console.log(formDataNew);
    const formDataArray = [];
  //  let formData=[];
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
    formDataNew={formDataNew,...props.formdata};
    formDataNew['igst']=igstValue;
    formDataNew['ugst']=ugstValue;
    formDataNew['sgst']=sgstValue;
    formDataNew['remark']=formDataNew.formDataNew.remark
    formDataNew['fabric']=formDataNew.formDataNew.fabric
    formDataNew['packing']=formDataNew.formDataNew.packing
    formDataNew['rate_unit']=formDataNew.formDataNew.rateunit
    formDataNew['uom']=formDataNew.formDataNew.uom
    
    formDataNew['po_value']=totalAmountWith18Percent;
    formDataNew["itemsData"]=JSON.stringify(formDataArray);
    console.log('formDataArray:', formDataNew);

    axios.post('http://localhost:8080/api/poc/add', formDataNew)
    .then(res=>{
     // const { navigate } = this.props
     
      console.log(res);
      //toast.success('Added Successfully');
      
      toast.success("Added Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      
      //setFormData(formData);
    }).catch(error => { //console.log(history.push('/companyDetail'),"jjjjjjjj");
      console.log(error.response);
      toast.error('Some error!');
      
    });
    navigate("/show")
  };
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
};
  const handleRateChange = (event, id) => {
    const newRate = parseFloat(event.target.value) || 0;
    if(event.target.value.length>0){
      setDisPercent(false);
     }else{
      setDisPercent(true);
     }
    setRate(newRate);
    recalculateDiscountAmount(newRate, discountPercentage, id);
  };
  const handleItemChange = (event, id) => {
    const newItem = event.target.value;
    setICode(newItem);
    
    // if (newItem === "1R0010001") {
    //   handleHsnChange({ target: { value: "87089900" } }, id);
    //   handleDescriptionChange({ target: { value: "Sheet 1000 * 1200" } }, id);
     
    // } else if (newItem === "1C0010001") {
    //   handleHsnChange({ target: { value: "40169390" } }, id);
    //   handleDescriptionChange({ target: { value: "Washer" } }, id);
     
    // }
    handleRateChange({ target: { value: 0 } }, id);
    handleDiscountPercentageChange({ target: { value: 0 } }, id);
    if (newItem === "1R0010001" || newItem === "1C0010001") {
      handleActiveChange({ target: { checked: true } }, id); 
      handleDiscountPercentageChange({ target: { value: 0 } }, id); 
    }
    if (isJobWorkCategory) {
      if (newItem === "1R0010001") {
        handleHsnChange({ target: { value: "" } }, id);  
        handleJobChange({ target: { value: "Job Work" } }, id); 
        handleDescriptionChange({ target: { value: "Sheet 1000 * 1200" } }, id); 
      } else if (newItem === "1C0010001") {
        handleHsnChange({ target: { value: "" } }, id);  
        handleJobChange({ target: { value: "Job Work" } }, id); 
      handleDescriptionChange({ target: { value: "Washer" } }, id);
      }
    } else {
      if (newItem === "1R0010001") {
        handleHsnChange({ target: { value: "87089900" } }, id);
        handleDescriptionChange({ target: { value: "Sheet 1000 * 1200" } }, id);
      } else if (newItem === "1C0010001") {
        handleHsnChange({ target: { value: "40169390" } }, id);
      handleDescriptionChange({ target: { value: "Washer" } }, id);

      }
    }
    handleCellChange(id, "item", newItem);
  };

  const handleHsnChange = (event, id) => {
    const newHsn = (event.target.value) || 0;
    setHsn(newHsn);
    handleCellChange(id, "registrarId", newHsn);
  };
  const handleJobChange = (event, id) => {
    const newJob = (event.target.value) || "";
    // setJob(newJob);
    handleCellChange(id, "name", newJob);

  };
  const handleDescriptionChange = (event, id) => {
    const newDesc = event.target.value;
    handleCellChange(id, "desc", newDesc);
  };
  const handleQuantityChange = (event, id) => {console.log(event.target.value.length);
    if(event.target.value.length>0){
     setRateDisabled(false);
    }else{
      setRateDisabled(true);
    }

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
      const discountAmount = row.rate * row.quan * (1-row.discountPercentage / 100);
      return total + discountAmount;
    }, 0);
  };
const recalculateDiscountAmount = (newRate, newDiscountPercentage, id) => {
  const newDiscountAmount = quantity * newRate * (newDiscountPercentage / 100);
  const finalDiscountAmount = quantity * newRate - newDiscountAmount;
  setRows((prevRows) => {
    const updatedRows = prevRows.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          rate: newRate,
          discountPercentage: newDiscountPercentage,
          discountAmount: newDiscountAmount.toFixed(2),
          totalDiscountAmount: finalDiscountAmount.toFixed(2),
        };
      }
      return row;
    });

    handleCellChange(id, 'rate', newRate);
    handleCellChange(id, 'discountPercentage', newDiscountPercentage);
    handleCellChange(id, 'discountAmount', newDiscountAmount);

    const updatedTotalDiscountAmount = calculateTotalDiscountAmount(updatedRows);
    setTotalDiscountAmount(updatedTotalDiscountAmount && updatedTotalDiscountAmount?updatedTotalDiscountAmount.toFixed(2):0 );
    const updatedTotalAmountWith18Percent = updatedTotalDiscountAmount * 1.18;
    setTotalAmountWith18Percent(updatedTotalAmountWith18Percent && updatedTotalAmountWith18Percent?updatedTotalAmountWith18Percent.toFixed(2):0);

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

    { field: "item", headerName: "Item Code", type: 'number', flex: 1, renderCell: (params) => (<TextField fullWidth select variant="standard" value={params.row.item} onChange={(event) => handleItemChange(event, params.row.id)}> {itemsList.map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))} </TextField>), },
    { field: "registrarId", headerName:  "HSN/SAC Code", renderCell: (params) => <TextField variant="standard" value={params.row.registrarId} onChange={(event) => handleHsnChange(event, params.row.id)} /> },
    { field: "name", headerName: "Job work Sac", flex: 1, editable: true, renderCell: (params) => <TextField variant="standard" value={params.row.name} onChange={(event) => handleJobChange(event, params.row.id)} /> },
    { field: "desc", headerName: "Description", flex: 2.5, editable: true, renderCell: (params) => <TextField fullWidth variant="standard" value={params.row.desc} onChange={(event) => handleDescriptionChange(event, params.row.id)} /> },
    { field: "quan", headerName: "Quantity", flex: 1, type: 'number', renderCell: (params) => <TextField variant="standard" value={params.row.quan} onChange={(event) => handleQuantityChange(event, params.row.id)} /> },
    { field: 'rate', headerName: 'Rate', flex: 1, renderCell: (params) => <TextField variant="standard" value={params.row.rate} disabled={rateDisabled} onChange={(event) => handleRateChange(event, params.row.id)} /> },
    { field: 'discountPercentage', headerName: 'Discount %', type: 'number', renderCell: (params) => <TextField variant="standard" disabled={disPercent} value={params.row.discountPercentage} onChange={(event) => handleDiscountPercentageChange(event, params.row.id)} /> },
    { field: 'discountAmount', headerName: 'Discount Amount', flex: 1, value: discountAmount, renderCell: (params) => <TextField variant="standard" value={params.row.discountAmount} disabled />, },
    {
      field: 'isActive', headerName: 'Acton', flex: 1, renderCell: (params) => (
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox checked={params.row.isActive} onChange={(event) => handleActiveChange(event, params.row.id)} />
          <IconButton onClick={() => handleDeleteRow(params.row.id)}>
            <ClearIcon />
          </IconButton>
        </Box>
      ),
    },
  ];
  // const handleFormSubmit = async (formData) => {
  //   formData["type"] = selectedValue;
  //   console.log(formData);
  // }
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
  const checkValidation = (field, value) => {
  }
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
      <Box component={Paper} sx={{ mt: 3, display: "flex", flexDirection: "row", gap: 5, padding: 2 }} >
        <Typography variant="h6" sx={{ color: "black", fontWeight: "bold", }}>
          After Discount Amount: {totalDiscountAmount && totalDiscountAmount?totalDiscountAmount:"0"}
        </Typography>
        <Typography variant="h6" sx={{ color: "black", fontWeight: "bold", }}>          
          Total Amount with GST: {totalAmountWith18Percent && totalAmountWith18Percent?totalAmountWith18Percent:"0"}
        </Typography>
      </Box>

      <Box component={Paper} sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2, padding: 2 }} >

        <Box component={Paper} sx={{ mt: 3, display: "flex", flexDirection: "row", gap: 2, padding: 2 }} >

          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "black",
              fontWeight: "bold",
              mb: 2,
              alignItems: "center",
              mt: 5,
            }}
          >
            GST:
          </Typography>

          <FormGroup component={Paper} sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="perc"
              name="radio-buttons-group"
              sx={{ flexDirection: "column" }}
              onChange={(e, value) => checkValidation('type', value)}
              {...register('type')}
            >
              <FormControlLabel value="perc" checked={selectedValue === 'perc'} onChange={handleChange} control={<Radio />} label="%" />
              <FormControlLabel value="value" checked={selectedValue === 'value'} onChange={handleChange} control={<Radio />} label="Value" />
            </RadioGroup>
          </FormGroup>

          <Box sx={{ width: "auto" }}>
            <Grid container spacing={2}  >
              <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", mb: 2 }}>
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
                  SGST
                </Typography>
                <TextField id="outlined-basic" label="SGST" name="sgst"  {...register('sgst')} variant="outlined" value={sgstValue} readOnly sx={{fontWeight:"bold"}} />
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
                  CGST
                </Typography>
                <TextField id="outlined-basic" label="CGST" name="ugst" {...register('ugst')} variant="outlined" value={ugstValue} readOnly />
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
                  UGST
                </Typography>
                <TextField id="outlined-basic" label="UGST" name="cgst" {...register('cgst')} variant="outlined" disabled />
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
                  IGST
                </Typography>
                <TextField id="outlined-basic" label="IGST" name="igst" variant="outlined" {...register('igst')} value={igstValue} disabled />
              </Grid>



            </Grid>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
                  CESS
                </Typography>
                <TextField id="outlined-basic" label="CESS"  name="CESS" {...register('CESS')} variant="outlined" disabled />
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
                  CESS
                </Typography>
                <TextField id="outlined-basic" label="CESS" name="CESS"  {...register('CESS')}  variant="outlined" disabled />
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
                  CESS
                </Typography>
                <TextField id="outlined-basic" label="CESS" name="CESS"  {...register('CESS')} variant="outlined" disabled />
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
                  CESS
                </Typography>
                <TextField id="outlined-basic" label="CESS" name="CESS"  {...register('CESS')} variant="outlined" disabled />
              </Grid>

            </Grid>
          </Box>
        </Box>
        <Box component={Paper} sx={{ mt: 3, display: "flex", flexDirection: "row", gap: 2, padding: 2 }} >
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "black",
              fontWeight: "bold",
              mb: 2,
              alignItems: "center",
              mt: 2,
            }}
          >
            Others:
          </Typography>
          <Grid container spacing={2}  >
            <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", mb: 2 }}>
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
              <TextField id="outlined-basic" label="Packing" {...register('packing')} variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
                {...register('rateunit')}
                error={rateUnitError}
                helperText={rateUnitError && 'Value must be greater than or equal to 1.000'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
              <TextField id="outlined-basic" {...register('fabric')} label="Fabrication Charges" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
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
              <TextField id="outlined-basic" label="UOM" {...register('uom')} variant="outlined" />
            </Grid>
          </Grid>
        </Box>
        <Box component={Paper} sx={{ display: "flex", mt: 3, p: 2 }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "black",
              fontWeight: "bold",
              mb: 2,
              alignItems: "center",
              mt: 2,
              mr: 2
            }}
          >
            Remarks:
          </Typography>
          <TextField fullWidth id="outlined-basic" label="Remarks" name="remark" {...register('remark')} variant="outlined" inputProps={{ maxLength: 4000 }} />
        </Box>
        <Grid container spacing={2} my={5}>
          <Grid item xs={12} sm={6} align="right">
            <Button variant="contained" style={{ fontSize: "15px" }} onClick={handleSubmit(handleFormSubmit)} color="success" > Save </Button>
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