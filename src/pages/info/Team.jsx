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
const Team = () => {
    const [date, setDate] = useState(new Date());
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [storyStatus, setStoryStatusError] = useState("");
    const [ponumberError, setPonumberError] = useState(""); // storyType
    const [divisionError, setDivisionError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [showTab, setShowTab] = useState(true);
    const [storeError, setStoreError] = useState("");
    const [amendDateError, setAmendDateError] = useState("");
    const [affDateError, setAffDateError] = useState("");
    const [vendorError, setVendorError] = useState("");
    const [endDateError, setEndDateError] = useState("");
    const [effDateError, setEffDateError] = useState("");
    const [comboboxError, setComboboxError] = useState("");
    const [priceDesc, setPriceDesc] = useState("");
    const [amendment, setAmendment] = useState(false);

    
    const [vendorReNumError, setVendorReNumError] = useState("");

    const [currencyError, setCurrencyError] = useState("");
    const [currencyCError, setCurrencyCError] = useState("");
    const [paymentTError, setPaymentTError] = useState("");
    const [modeoftransportError, setModeoftransportError] = useState("");
    const [pricebasisError, setPricebasisError] = useState("");
    const [vendorEvent, setVendorEvent] = useState("");
    const [selectedValue, setSelectedValue] = useState("onetimepo");
    const [modeOfTransportDesc, setModeOfTransportDesc] = useState("");
    const [paymentTerms, setPaymentTerms] = useState("");
    const [vendorStateError, setVendorStateError] = useState("");

    const [vendorAddressError, setVendorAddressError] = useState("");
    const [formData, setFormData] = useState("");

    
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    // document.write(today);
    const [currentDate, setCurrentDate] = useState(today);

    const [ponum, setPoNum] = useState("");
    const [poDateError, setPoDateError] = useState("");
    const { register, handleSubmit, reset } = useForm();
    const handleTabChange = (e, tabIndex) => {
        console.log(tabIndex);
        setCurrentTabIndex(tabIndex);
    };
    const [poDate, sePotDate] = useState(null);
    const handlePoDateChange = (e, value) => {
        console.log(e.target.value)
        const date = e.target.value;
        sePotDate(date);
        setPoDateError('');
    };
    console.log(currentDate)
    const [effDate, setEffDate] = useState(null);
    useEffect(() => {
        setCurrentDate(today);
    }, [])
    const handleEffDateChange = (e, value) => {
        const date = e.target.value;
        setEffDate(date);
    };
    const [amendDate, setAmendDate] = useState(null);
    const handleAmendDateChange = (e, value) => {
        const date = e.target.value;
        setAmendDate(date);
    };
    const [endDate, setEndDate] = useState(null);
    const handleEndDateChange = (e, value) => {
        const date = e.target.value;
        setEndDate(date);
    };
    const handleFormSubmit = async (formData) => {

        let formDirty = false;
        // formData['storyStatus'] = 'TO_DO';
        // formData['isActive'] = 1;
        // formData['projectId'] = 0;
        console.log(formData.division.length);
        if (formData.division.length == 0) {
            setDivisionError('Division is required');
            formDirty = true
        } else {
            setDivisionError('');
        }
        if (formData.category.length == 0) {
            setCategoryError('Category is required');
            formDirty = true
        } else {
            setCategoryError('');
        }
        // if (formData.ponumber.length == 0) {
        //     setPonumberError('Po Number is required');
        //     formDirty = true
        // } else {
        //     setPonumberError('');
        // }
        if (formData.store.length == 0) {
            setStoreError('Store is required');
            formDirty = true
        } else {
            setStoreError('');
        }
        //console.log(formData);
        if (formData.poDate.length == 0) {
            setPoDateError('Po Date is required');
            formDirty = true
        } else {
            setPoDateError('');
        }
        if (formData.poDate.length == 0) {
            setAmendDateError('Po Date is required');
            formDirty = true
        } else {
            setAmendDateError('');
        }

        if (formData.poDate.length == 0) {
            setAffDateError('Po Date is required');
            formDirty = true
        } else {
            setAffDateError('');
        }

        if (formData.poDate.length == 0) {
            setEndDateError('Po Date is required');
            formDirty = true
        } else {
            setEndDateError('');
        }
        if (formData.poDate.length == 0) {
            setEffDateError('Po Date is required');
            formDirty = true
        } else {
            setEffDateError('');
        }
        console.log(formData.currencyConverter.length);
        if (formData.currencyConverter.length == 0) {
            setCurrencyCError('Currency Converter is required');
            formDirty = true
        } else {
            setCurrencyCError('');
        }



        if (formData.vendor.length == 0) {
            setVendorError('Vendor is required');
            formDirty = true
        } else {
            setVendorError('');
        }
        if (formData.vendorReNum.length == 0) {
            setVendorReNumError('Vendor Ref. is required');
            formDirty = true
        } else {
            setVendorReNumError('');
        }
        if (formData.vendorAddress.length == 0) {
            setVendorAddressError('Vendor Address is required');
            formDirty = true
        } else {
            setVendorAddressError('');
        }
        
        if (formData.vendorState.length == 0) {
            setVendorStateError('Vendor State is required');
            formDirty = true
        } else {
            setVendorStateError('');
        }
        if (formData.currency.length == 0) {
            setCurrencyError('Currency box is required');
            formDirty = true
        } else {
            setCurrencyError('');
        }

        // if (formData.payment_terms.length == 0) {
        //     setPaymentTError('Payment terms is required');
        //     formDirty = true
        // } else {
        //     setPaymentTError('');
        // }

        if (formData.mode_of_transport.length == 0) {console.log("jjjjj");
            setModeoftransportError('Mode of payment is required');
            formDirty = true
        } else {
            setModeoftransportError('');
        }

        if (formData.price_basis.length == 0) {
            setPricebasisError('Price Basis is required');
            formDirty = true
        } else {
            setPricebasisError('');
        }



        if (formDirty) {
            reset();formData["price_basis"]= priceDesc;
            console.log('form data is - ', formData);
            return false;
        } else {
            let ram = Math.floor(100000 + Math.random() * 900000);
            setPoNum(ram)
            setPonumberError("");
            //const response = await postAPI(apiEndpoints.registerBacklog, formData);
            // reset();
            //    return true;
            formData["ponumber"] = ram;
            formData["potype"] = selectedValue;
            formData["mode_of_transport_desc"]= modeOfTransportDesc;
            formData["payment_terms"]= paymentTerms;
            formData["price_desc"]= priceDesc;
            formData["vendorText"] = vendorEvent?.description
            console.log('form data is - ', formData);
            setFormData(formData);
            setShowTab(false)
            // axios.post('http://localhost:8080/api/poc/add', formData)
            //     .then(res=>{
            //      // const { navigate } = this.props
                 
            //       console.log(res);
                 
                  
            //       toast.success("Added Successfully", {
            //         position: toast.POSITION.TOP_RIGHT,
            //       });
            //       setFormData(formData);
            //     }).catch(error => { //console.log(history.push('/companyDetail'),"jjjjjjjj");
            //       console.log(error.response);
            //       toast.error(error.response, {
            //         position: toast.POSITION.TOP_RIGHT,
            //       });
            //     });
        }

        // reset();

    }
    const checkValidation = (field, value) => {
        //  let formData = event.target.value;

        if (field === 'division') {
            setDivisionError('');
        }
        if (field === 'category') {
            setCategoryError('');
        }
        if (field === 'ponumber') {
            setPonumberError('');
        }
        if (field === 'mode_of_transport') {
            setModeOfTransportDesc(value.description);
        }


        if (field === 'store') {
            setStoreError('');
        }
        if (field === 'poDate') {
            setPoDateError('');
        }
        if (field === 'poDate') {
            setPoDateError('');
        }
        if (field === 'amendDate') {
            setAmendDateError('');
        }
        if (field === 'amendDate') {
            setAmendDateError('');
        }
        if (field === 'effDate') {
            setEffDateError('');
        }
        if (field === 'effDate') {
            setEffDateError('');
        }
        if (field === 'endDate') {
            setEndDateError('');
        }
        if (field === 'vendorState') {
            setVendorStateError('');
        }
        
        if (field === 'endDate') {
            setEndDateError('');
        }
        if (field === 'vendor') {

            const pterm = paymentTerm.filter((res) => {
                if (res.id == value.payment_id) {
                    return res.label;
                }
            })
            console.log(pterm[0]);
            setVendorEvent(value);
            setPaymentTerms(pterm[0].label)
            setVendorError('');
        }
        if (field === 'vendorReNum') {
            console.log("test");
            setVendorReNumError('');
        }
        if (field === 'vendorAddress') {            
            setVendorAddressError('');
        }
        
        if (field === 'currency') {
            setCurrencyError('');
        }
        if (field === 'currencyConverter') {
            setCurrencyCError('');
        }

        if (field === 'payment_terms') {
            setPaymentTError('');
        }
        if (field === 'payment_terms') {
            setPaymentTError('');
        }
        if (field === 'mode_of_transport') {
            setModeoftransportError('');
        }
        
        if (field === 'price_basis') {
            //console.log(value);
            const pterm1 = priceBasis.filter((res) => {
                if (res.id == value.id) {
                    return res.description;
                }
            });
            //console.log(pterm1[0].description);
            setPriceDesc(pterm1[0].description)
            setPricebasisError('');
        }


        else {
            console.log('nothing')
        }
    }
    return (
        <Box m="20px">

            {/* <Header title="Main" subtitle="SIETZ TECHNOLOGIES INDIA PVT LTD." /> */}

            <Tabs value={currentTabIndex} onChange={handleTabChange}>
                <Tab style={{ fontWeight: "900" }} label='Main' />
                <Tab style={{ fontWeight: "900" }} label='Item' disabled={showTab} />

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
                                onChange={(e, value) => checkValidation('potype', value)}
                                {...register('potype')}
                            >
                                <FormControlLabel value="onetimepo" checked={selectedValue === 'onetimepo'} onChange={handleChange} control={<Radio />} label="One Time PO" />
                                <FormControlLabel value="openpo" checked={selectedValue === 'openpo'} onChange={handleChange} control={<Radio />} label="Open PO" />

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
                                onChange={(e, value) => checkValidation('division', value)}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        label="Division Name"
                                        helperText={divisionError}
                                        error={divisionError && divisionError.length > 0 ? true : false}
                                        {...register('division')}
                                    />}
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
                                onChange={(e, value) => checkValidation('category', value)}
                                options={category}
                                sx={{ width: 300 }}
                                renderInput={(params) =>
                                    <TextField {...params}

                                        label="Category"
                                        helperText={categoryError}
                                        error={categoryError && categoryError.length > 0 ? true : false}
                                        {...register('category')}
                                    />}
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
                                value={ponum}
                                disabled
                                {...register('ponumber')}
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
                                onChange={(e, value) => checkValidation('store', value)}
                                options={store}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params}

                                    label="Store"
                                    helperText={storeError}
                                    error={storeError && storeError.length > 0 ? true : false}
                                    {...register('store')} />}
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

                            {/* <TextField
                                label="PO Date"
                                fullWidth
                                type="date"
                                id="Po-date"
                                name="poDate"
                                value={poDate ? poDate : "0"}
                                
                                                                   
                                helperText={poDateError}
                                error={poDateError && poDateError.length > 0 ? true : false}
                                onChange={handlePoDateChange}
                                sx={{ width: 300 }}
                                {...register('poDate')}
                            /> */}

                            <LocalizationProvider dateAdapter={AdapterDayjs}
                            >
                                <DemoContainer components={['DatePicker']}
                                >
                                    {currentDate ?
                                        <DatePicker label="PO Date"

                                            name="poDate"
                                            disablePast
                                            defaultValue={dayjs(currentDate)}
                                            helperText={poDateError}
                                            error={poDateError && poDateError.length > 0 ? true : false}
                                            sx={{ width: 300 }}
                                            required
                                            onChange={(date) => setDate(date)}
                                            {...register('poDate')}
                                        /> : ""
                                    }

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


                            {/* <TextField
                                label="PO Amend. Date"
                                fullWidth
                                type="date"
                                name="amendDate"
                                value={amendDate ? amendDate : "0"}
                                onChange={handleAmendDateChange}
                                sx={{ width: 300 }}
                            /> */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}
                            >
                                <DemoContainer components={['DatePicker']}
                                >

                                    <DatePicker label="PO Amend. Date"
                                        helperText={amendDateError}
                                        name="amendDate"
                                        disablePast
                                        defaultValue={dayjs(currentDate)}
                                        error={amendDateError && amendDateError.length > 0 ? true : false}
                                        sx={{ width: 300 }}
                                        required
                                        onChange={(date) => setAmendDate(date)}
                                        {...register('amendDate')}
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

                            {/* <TextField
                                label="PO Eff. Date"
                                fullWidth
                                type="date"
                                name="effDate"
                                value={effDate ? effDate : "0"}
                                onChange={handleEffDateChange}
                                sx={{ width: 300 }}
                            /> */}

                            <LocalizationProvider dateAdapter={AdapterDayjs}
                            >
                                <DemoContainer components={['DatePicker']}
                                >

                                    <DatePicker label="PO Eff. Date"
                                        helperText={amendDateError}
                                        disablePast
                                        defaultValue={dayjs(currentDate)}
                                        name="effDate"
                                        error={effDateError && effDateError.length > 0 ? true : false}
                                        sx={{ width: 300 }}
                                        required
                                        onChange={(date) => setEffDate(date)}
                                        {...register('effDate')}
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


                            {/* <TextField
                                label="PO End Date"
                                fullWidth
                                type="date"
                                name="endDate"
                                value={endDate ? endDate : "0"}
                                onChange={handleEndDateChange}
                                sx={{ width: 300 }}
                            /> */}

                            <LocalizationProvider dateAdapter={AdapterDayjs}
                            >
                                <DemoContainer components={['DatePicker']}
                                >

                                    <DatePicker label="PO End Date"
                                        helperText={endDateError}
                                        name="endDate"
                                        defaultValue={dayjs(currentDate)}
                                        error={endDateError && endDateError.length > 0 ? true : false}
                                        sx={{ width: 300 }}
                                        required
                                        onChange={(date) => setEndDate(date)}
                                        {...register('endDate')}
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
                                options={vendors}
                                onChange={(e, value) => checkValidation('vendor', value)}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Vendor"
                                    name="vendor"
                                    helperText={vendorError}
                                    error={vendorError && vendorError.length > 0 ? true : false}
                                    {...register('vendor')}
                                />}
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
                                value={vendorEvent?.description}
                                autoFocus
                                {...register('vendorText')}
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
                                helperText={vendorAddressError}
                                onKeyUp={(e, value) => checkValidation('vendorAddress', value)}
                                error={vendorAddressError && vendorAddressError.length > 0 ? true : false}
                                {...register('vendorAddress')}
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
                                onChange={(e, value) => checkValidation('vendorState', value)}
                                options={vendorState}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Vendor State"
                                    name="vendorState"
                                    helperText={vendorStateError}
                                    error={vendorStateError && vendorStateError.length > 0 ? true : false}
                                    {...register('vendorState')}
                                />}
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
                                type='number'
                                fullWidth
                                id='storyStatus'
                                label="Vendor Ref No."
                                name="vendorReNum"
                                sx={{ width: 300 }}
                                onKeyUp={(e, value) => checkValidation('vendorReNum', value)}
                                helperText={vendorReNumError}
                                error={vendorReNumError && vendorReNumError.length > 0 ? true : false}
                                {...register('vendorReNum')}
                                autoFocus

                            />
                            {/* <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                onChange={(e,value) => checkValidation('combobox', e)}
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Vendor Ref No."
                                    name="combobox"
                                    helperText={comboboxError}
                                    error={comboboxError && comboboxError.length > 0 ? true : false}
                                    {...register('combobox')}
                                />}
                            /> */}
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
                                options={currency}
                                onChange={(e, value) => checkValidation('currency', value)}
                                sx={{ width: 300 }}
                                defaultValue="RUPPES"
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Currency"
                                    name="currency"
                                    // helperText={currencyError}
                                    // error={currencyError && currencyError.length > 0 ? true : false}
                                    {...register('currency')}
                                />}
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
                                helperText={currencyCError}
                                onKeyUp={(e, value) => checkValidation('currencyConverter', value)}
                                error={currencyCError && currencyCError.length > 0 ? true : false}
                                {...register('currencyConverter')}
                            />
                            {/* <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                onChange={(e, value) => checkValidation('currencyConverter', value)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Currency Converter"
                                    name="currencyConverter"
                                    helperText={currencyCError}
                                    error={currencyCError && currencyCError.length > 0 ? true : false}
                                    {...register('currencyConverter')}
                                />}
                            /> */}
                        </Grid>
                        <Grid item xs={12} component={Paper} sx={{ width: "100%", mx: 50, mt: 2 }}>
                            <FormGroup sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                mt: 2,
                                right: 1
                            }}
                                {...register('type')}
                            >
                                <FormControlLabel value="PO Direct to OSP" control={<Checkbox defaultChecked />} label="PO Direct to OSP" />
                                <FormControlLabel value="Quality Assured" control={<Checkbox />} label="Quality Assured" />
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
                                id='storyStatus'
                                value={paymentTerms ? paymentTerms : ""}
                                autoFocus

                                {...register('payment_terms')}
                            />
                            {/* <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={paymentTerm}
                                sx={{ width: 300 }}
                               
                                defaultValue={paymentTerms}
                                onChange={(e,value) => checkValidation('payment_terms', value)}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Payment Terms"
                                    name="payment_terms"
                                    helperText={paymentTError}
                                    error={paymentTError && paymentTError.length > 0 ? true : false}
                                    {...register('payment_terms')}
                                />}
                            /> */}
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
                                onChange={(e, value) => checkValidation('mode_of_transport', value)}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Mode of Transport"
                                    name="mode_of_transport"
                                    helperText={modeoftransportError}
                                    error={modeoftransportError && modeoftransportError.length > 0 ? true : false}
                                    {...register('mode_of_transport')}
                                />}
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
                                value={modeOfTransportDesc}
                                name="mode_of_transport_desc"
                                sx={{ width: 150 }}
                               
                                {...register('mode_of_transport_desc')}
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
                        <Grid item xs={12} sm={2}>
                        <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={priceBasis}
                                
                                onChange={(e, value) => checkValidation('price_basis', value)}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Price Basis"
                                    name="price_basis"
                                    helperText={pricebasisError}
                                    error={pricebasisError && pricebasisError.length > 0 ? true : false}
                                    {...register('price_basis')}
                                />}
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
                                value={priceDesc}
                                name="price_desc"
                                sx={{ width: 150 }}                               
                                {...register('price_desc')}
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
                                PO Value
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <TextField fullWidth id="outlined-basic" name="po_value" value="0"   {...register('po_value')} sx={{ width: 300 }} variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={12}  style={ !amendment ? { display:'none'} : {}}>
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
                                }}  {...register('reason')} label="Amendment Reason" variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid container spacing={2} my={5}>
                            <Grid item xs={12} sm={6} align="right">
                                <Button variant='outlined' style={{ fontSize: "15px" }} > Reset </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} align="left">
                                <Button variant="contained" style={{ fontSize: "15px" }} onClick={handleSubmit(handleFormSubmit)} color="success"> Next </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
            )}

            {/* TAB 2 Contents */}
            {currentTabIndex === 1 && (
                <Box sx={{ p: 3 }}>
                    <Contacts  formdata={formData}/>
                </Box>
            )}


        </Box>
    );
};

export default Team;