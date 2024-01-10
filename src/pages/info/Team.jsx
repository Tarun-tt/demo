import { Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography, useTheme, Tab, Tabs, Grid, Button } from "@mui/material";
import { tokens } from "../../styles/theme";
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useForm } from 'react-hook-form';
import Contacts from './Contacts'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const top100Films = [
    { label: 'Tarun1', year: 1994 },
    { label: 'Data1', year: 1972 },
    { label: 'Data Part II', year: 1974 },
    { label: 'Data 3', year: 2008 },
]
const Team = () => {
    const [date, setDate] = useState(new Date());
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [storyStatus, setStoryStatusError] = useState("");
    const [ponumberError, setPonumberError] = useState(""); // storyType
    const [divisionError, setDivisionError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [storeError, setStoreError] = useState("");
    const [amendDateError, setAmendDateError] = useState("");
    const [affDateError, setAffDateError] = useState("");
    const [vendorError, setVendorError] = useState("");
    const [endDateError, setEndDateError] = useState("");
    const [effDateError, setEffDateError] = useState("");
    const [comboboxError, setComboboxError] = useState("");
    const [currencyError, setCurrencyError] = useState("");
    const [currencyCError, setCurrencyCError] = useState("");
    const [paymentTError, setPaymentTError] = useState("");
    const [modeoftransportError, setModeoftransportError] = useState("");
    const [pricebasisError, setPricebasisError] = useState("");


    const [poDateError, setPoDateError] = useState("");
    const { register, handleSubmit, reset } = useForm();
    const handleTabChange = (e, tabIndex) => {
        console.log(tabIndex);
        setCurrentTabIndex(tabIndex);
    };
    const [poDate, sePotDate] = useState(null);
    const handlePoDateChange = (e) => {
        console.log(e.target.value)
        const date = e.target.value;
        sePotDate(date);
        setPoDateError('');
    };
    const [effDate, setEffDate] = useState(null);
    const handleEffDateChange = (e) => {
        const date = e.target.value;
        setEffDate(date);
    };
    const [amendDate, setAmendDate] = useState(null);
    const handleAmendDateChange = (e) => {
        const date = e.target.value;
        setAmendDate(date);
    };
    const [endDate, setEndDate] = useState(null);
    const handleEndDateChange = (e) => {
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
        if (formData.ponumber.length == 0) {
            setPonumberError('Po Number is required');
            formDirty = true
        } else {
            setPonumberError('');
        }
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
        if (formData.combobox.length == 0) {
            setComboboxError('Combo box is required');
            formDirty = true
        } else {
            setComboboxError('');
        }
        if (formData.currency.length == 0) {
            setCurrencyError('Currency box is required');
            formDirty = true
        } else {
            setCurrencyError('');
        }

        if (formData.payment_terms.length == 0) {
            setPaymentTError('Payment terms is required');
            formDirty = true
        } else {
            setPaymentTError('');
        }

        if (formData.mode_of_transport.length == 0) {
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
            reset();
            return false
        } else {
            //const response = await postAPI(apiEndpoints.registerBacklog, formData);
            // reset();
            //    return true;
        }
        console.log('form data is - ', formData);
        // reset();

    }
    const checkValidation = (field, event) => {
        let formData = event.target.value;

        if (field === 'division') {
            setDivisionError('');
        }
        if (field === 'category') {
            setCategoryError('');
        }
        if (field === 'ponumber') {
            setPonumberError('');
        }
        if (field === 'ponumber') {
            setPonumberError('');
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
        if (field === 'endDate') {
            setEndDateError('');
        }
        if (field === 'vendor') {
            setVendorError('');
        }
        if (field === 'combobox') {
            setComboboxError('');
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
        if (field === 'mode_of_transport') {
            setModeoftransportError('');
        }
        if (field === 'price_basis') {
            setPricebasisError('');
        }
        

        else {
            console.log('nothing')
        }
    }
    return (
        <Box m="20px">

            {/* <Header title="Main" subtitle="SIETZ TECHNOLOGIES INDIA PVT LTD." /> */}

            <Tabs value={currentTabIndex} onChange={handleTabChange} component={Paper} sx={{display:"flex", alignItems:"center"}}>
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
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="One Time PO" />
                                <FormControlLabel value="male" control={<Radio />} label="Open PO" />

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
                                options={top100Films}
                                sx={{ width: 300 }}
                                onChange={(e) => checkValidation('division', e)}

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
                                onChange={(e) => checkValidation('category', e)}
                                options={top100Films}
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

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                onChange={(e) => checkValidation('ponumber', e)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params}

                                    label="Po Number"
                                    helperText={ponumberError}
                                    error={ponumberError && ponumberError.length > 0 ? true : false}
                                    {...register('ponumber')} />}
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
                                onChange={(e) => checkValidation('store', e)}
                                options={top100Films}
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

                                    <DatePicker label="PO Date"
                                        helperText={poDateError}
                                        name="poDate"
                                        error={poDateError && poDateError.length > 0 ? true : false}
                                        sx={{ width: 300 }}
                                        required
                                        onChange={(date) => setDate(date)}
                                        {...register('poDate')}
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
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                onChange={(e) => checkValidation('vendor', e)}
                                sx={{ width: 300 }}
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

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                onChange={(e) => checkValidation('combobox', e)}
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
                                options={top100Films}
                                onChange={(e) => checkValidation('currency', e)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Currency"
                                    name="currency"
                                    helperText={currencyError}
                                    error={currencyError && currencyError.length > 0 ? true : false}
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

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                onChange={(e) => checkValidation('currencyConverter', e)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Currency Converter"
                                    name="currencyConverter"
                                    helperText={currencyCError}
                                    error={currencyCError && currencyCError.length > 0 ? true : false}
                                    {...register('currencyConverter')}
                                />}
                            />
                        </Grid>
                        <Grid item xs={12} component={Paper} sx={{ width: "100%", mx: 50, mt: 2 }}>
                            <FormGroup sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                mt: 2,
                                right: 1
                            }}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="PO Direct to OSP" />
                                <FormControlLabel control={<Checkbox />} label="Quality Assured " />
                                <FormControlLabel control={<Checkbox />} label="None" />


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

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                onChange={(e) => checkValidation('payment_terms', e)}
                                renderInput={(params) => <TextField
                                    {...params}
                                    label="Payment Terms"
                                    name="payment_terms"
                                    helperText={paymentTError}
                                    error={paymentTError && paymentTError.length > 0 ? true : false}
                                    {...register('payment_terms')}
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
                                    mb: 2,
                                    mt: 2

                                }}
                            >
                                Mode of Transport
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                onChange={(e) => checkValidation('mode_of_transport', e)}
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
                                options={top100Films}
                                sx={{ width: 300 }}
                                onChange={(e) => checkValidation('price_basis', e)}
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
                    <Contacts />
                </Box>
            )}


        </Box>
    );
};

export default Team;