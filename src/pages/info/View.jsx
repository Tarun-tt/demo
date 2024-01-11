import { Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography, useTheme, Tab, Tabs, Grid, Button } from "@mui/material";
import { tokens } from "../../styles/theme";
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useForm } from 'react-hook-form';
import Contacts from './Contacts'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SvgIcon from '@mui/material/SvgIcon';
import { divisions, top100Films, category, vendors, currency, modeTransport, paymentTerm, vendorState, store, priceBasis  } from "../constants";
import dayjs from 'dayjs';
import axios from 'axios';
import {  toast } from 'react-toastify';
const View = () => {
    const [date, setDate] = useState(new Date());
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [vendorAddressError, setVendorAddressError] = useState("");
    
    const handleChange = (event) => {
       // setSelectedValue(event.target.value);
    };
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    // document.write(today);
    const [currentDate, setCurrentDate] = useState(today);

    console.log(currentDate)
    const [effDate, setEffDate] = useState(null);
    useEffect(() => {
        setCurrentDate(today);
    }, [])
    const handleTabChange = (e, tabIndex) => {
        console.log(tabIndex);
        setCurrentTabIndex(tabIndex);
    };
    return (
        <Box m="20px">

            {/* <Header title="Main" subtitle="SIETZ TECHNOLOGIES INDIA PVT LTD." /> */}

            <Tabs value={currentTabIndex} onChange={handleTabChange}>
                <Tab style={{ fontWeight: "900" }} label='Main' />
                <Tab style={{ fontWeight: "900" }} label='Item' />

            </Tabs>

            {/* TAB 1 Contents */}
            {currentTabIndex === 0 && (
                <Box sx={{ p: 3 }}>

                    <Box component={Paper} sx={{ width: "18%", ml: 50 }}>

                        <FormGroup sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            mt: 2,
                            ml: 2,
                            my: 3
                        }}>

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="onetimepo"
                                name="radio-buttons-group"
                                
                            >
                                <FormControlLabel value="onetimepo"  control={<Radio />} label="One Time PO" />
                                <FormControlLabel value="openpo"  control={<Radio />} label="Open PO" />

                            </RadioGroup>

                        </FormGroup>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Division Name
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={divisions}
                                sx={{ width: 300 }}
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Category
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                
                                options={category}
                                sx={{ width: 300 }}
                               
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO Number
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <TextField
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                name="ponumber"
                                sx={{ width: 300 }}
                                label="PO Number"
                                
                                disabled
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Store
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                
                                options={store}
                                sx={{ width: 300 }}
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO Date
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>                          

                            <LocalizationProvider dateAdapter={AdapterDayjs}
                            >
                                <DemoContainer components={['DatePicker']}
                                >
                                    
                                        <DatePicker label="PO Date"

                                            name="poDate"
                                            disablePast
                                           
                                            sx={{ width: 300 }}
                                            required
                                           
                                        />
                                    

                                </DemoContainer>
                            </LocalizationProvider>

                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO Amend Date
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <LocalizationProvider dateAdapter={AdapterDayjs}
                            >
                                <DemoContainer components={['DatePicker']}
                                >

                                    <DatePicker label="PO Amend. Date"
                                        
                                        name="amendDate"
                                        disablePast                                        
                                        sx={{ width: 300 }}
                                        
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO Eff. Date
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}
                            >
                                <DemoContainer components={['DatePicker']}
                                >

                                    <DatePicker label="PO Eff. Date"
                                    
                                        disablePast
                                        defaultValue={dayjs(currentDate)}
                                        name="effDate"                                        
                                        sx={{ width: 300 }}
                                        required
                                       
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO End Date
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>


                            <LocalizationProvider dateAdapter={AdapterDayjs}
                            >
                                <DemoContainer components={['DatePicker']}
                                >

                                    <DatePicker label="PO End Date"                                      
                                        name="endDate"                                       
                                        sx={{ width: 300 }}
                                        required
                                        
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Vendor
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                
                            />
                        </Grid>

                        <Grid item xs={12} sm={7}>
                            <TextField
                                disabled
                                aria-readonly
                                autoComplete='given-name'
                                type='text'
                                fullWidth
                                id='storyStatus'
                               
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Vendor Address
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField

                                aria-readonly
                                autoComplete='given-name'
                                type='text'
                                fullWidth
                                id='vendorAddress'
                               
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Vendor State
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                
                                sx={{ width: 300 }}
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Vendor Ref No.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField

                                aria-readonly
                                autoComplete='given-name'
                                type='text'
                                fullWidth
                                id='storyStatus'
                                label="Vendor Ref No."
                                name="vendorReNum"
                                sx={{ width: 300 }}
                                
                                autoFocus

                            />
                            
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Currency
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                
                                sx={{ width: 300 }}
                                defaultValue="RUPPES"
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Currency Converter
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                                
                                aria-readonly
                                autoComplete='given-name'
                                type='text'
                                fullWidth
                                label="Currency Converter"
                                sx={{ width: 300 }}
                                id='storyStatus'
                                
                                autoFocus
                               
                            />
                          
                        </Grid>
                        <Grid item xs={12} component={Paper} sx={{ width: "100%", mx: 50, mt: 2 }}>
                            <FormGroup sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                mt: 2,
                                right: 1
                            }}
                               
                            >
                                <FormControlLabel value="PO Direct to OSP"  label="PO Direct to OSP" />
                                <FormControlLabel value="Quality Assured"label="Quality Assured" />
                                <FormControlLabel value="None" control={<Checkbox />} label="None" />


                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} align='left'>
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    mb: 2,
                                    mt: 2

                                }}
                            >
                                Terms and Conditions
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
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
                                Payment Terms
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                disabled
                                aria-readonly
                                autoComplete='given-name'
                                type='text'
                                fullWidth
                                sx={{ width: 300 }}
                               
                            />                           
                        </Grid>
                        <Grid item xs={12} sm={2}>
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
                                Mode of Transport
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={modeTransport}
                                sx={{ width: 140 }}
                                
                            />

                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                disabled
                                aria-readonly
                                autoComplete='given-name'
                                type='text'
                                fullWidth
                                id='storyStatus'                               
                                name="mode_of_transport_desc"
                                sx={{ width: 150 }}                             
                                
                                autoFocus

                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
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
                                Price Basis
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={priceBasis}
                                sx={{ width: 300 }}
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
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
                                PO Value
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <TextField fullWidth id="outlined-basic" name="po_value" value="0"  sx={{ width: 300 }} variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box component={Paper} sx={{ display: "flex", mt: 3, p: 2 }}>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                        color: "black",
                                        fontWeight: "bold",
                                        mb: 3,
                                        alignItems: "center",
                                        mt: 3,
                                    }}
                                >
                                    Amendment Reason
                                </Typography>
                                <TextField fullWidth id="outlined-basic" sx={{

                                    mt: 3,
                                }}  label="Amendment Reason" variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid container spacing={2} my={5}>
                            <Grid item xs={12} sm={6} align="right">
                                <Button variant='outlined' style={{ fontSize: "15px" }} > Reset </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} align="left">
                                <Button variant="contained" style={{ fontSize: "15px" }} color="success"> Next </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
            )}

            {/* TAB 2 Contents */}
            {currentTabIndex === 1 && (
                <Box sx={{ p: 3 }}>
                    <Contacts />
                </Box>
            )}


        </Box>
    );
};

export default View;