import { Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography, useTheme, Tab, Tabs, Grid, Button } from "@mui/material";
import { tokens } from "../../styles/theme";
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useForm } from 'react-hook-form';
import Contacts from './Contacts'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { toast } from 'react-toastify';
import { currency, vendorState } from "../constants";

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

    const [data, setData] = useState("");
    const [itinerary, setItinerary] = useState("");
    console.log("kiii")
    useEffect(()=>{console.log("kiii")
     let id=1;
     axios.get('http://localhost:8080/api/poc/getPocById/'+id)
     .then(res=>{
      // const { navigate } = this.props
      setData(res?.data.response);
       console.log(res.data.response);
       setItinerary(JSON.parse(res?.data.response.itemsData));
     }).catch(error => { //console.log(history.push('/companyDetail'),"jjjjjjjj");
       console.log(error.response);
       toast.error('Some error!');      
     });
    },[])

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
    //console.log(currentDate)
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
            setPricebasisError('');
        }


        else {
            console.log('nothing')
        }
    }
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
   // console.log(itinerary)
    return (
        <Box m="20px">

            {/* <Header title="Main" subtitle="SIETZ TECHNOLOGIES INDIA PVT LTD." /> */}

            

            {/* TAB 1 Contents */}
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
                                Division Name :
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Typography my={2}>
                                {data!=""?data?.division:"NA"}
                            </Typography>
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
                                Category :
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography my={2}>
                            {data!=""?data?.category:"NA"}
                            </Typography>
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
                                PO Number :
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Typography my={2}>
                            {data!=""?data?.ponumber:"NA"}
                            </Typography>
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

                            <Typography my={2}>
                            {data!=""?data.store:"NA"}
                            </Typography>
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

                            <Typography my={2}>
                            {data!=""?data.poDate:"NA"}
                            </Typography>
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
                            <Typography my={2}>
                            {data!=""?data.amendDate:"NA"}
                            </Typography>
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
                            <Typography my={2}>
                            {data!=""?data.effDate:"NA"}
                            </Typography>
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
                            <Typography my={2}>
                            {data!=""?data.endDate:"NA"}
                            </Typography>
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
                            <Typography my={2}>
                            {data!=""?data.vendor:"NA"}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={7}>
                            <Typography my={2}>
                            {data!=""?data.mode_of_transport_desc:"NA"}
                            </Typography>
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
                            <Typography my={2}>
                            {data!=""?data.vendorAddress:"NA"}
                            </Typography>
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
                            <Typography my={2}>
                            {data!=""?data.vendorState:"NA"}
                            </Typography>
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
                            <Typography my={2}>
                            {data!=""?data.vendorReNum:"NA"}
                            </Typography>


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
                            <Typography my={2}>
                            {data!=""?data.currency:"NA"}
                            </Typography>
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
                            <Typography my={2}>
                            {data!=""?data.currencyConverter:"NA"}
                            </Typography>
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

                            <Typography my={2}>
                            {data!=""?data.payment_terms:"NA"}
                            </Typography>
                            <Typography my={2}>
                                Test
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
                                Mode of Transport
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography my={2}>
                            {data!=""?data.mode_of_transport:"NA"}

                            </Typography>

                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography my={2}>
                            {data!=""?data.mode_of_transport_desc:"NA"}
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
                                Price Basis
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Typography my={2}>
                            {data!=""?data.price_basis:"NA"}
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
                                PO Value
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography my={2}>
                            {data!=""?data.po_value:"NA"}
                            </Typography>
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
                                <Typography my={2}>
                                {data!=""?data.reason:"NA"}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={12} my={3}>
                            <Typography variant="h3" sx={{ fontWeight: 600 }}>Items Itinerary</Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "bold", fontSize: "14px" }}>ITEM CODE</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>HSN/SAC CODE</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>JOB WORK SAC</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>DESCRIPTION</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>QUANTITY</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>RATE</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>DISCOUNT(%)</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>DISCOUNT AMT</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {/* <TableBody>
                                        {itinerary?.map((row1) => (
                                            <TableRow
                                                key={row1.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" sx={{ fontSize: '14px' }}>
                                                    {row1.item}
                                                </TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.registrarId}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.name}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.desc}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.quan}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.rate}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.discountPercentage}(%)</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.discountAmount}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody> */}
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} >GST</Typography>
                    <Grid container spacing={2} >

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
                                SGST :
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>

                            <Typography my={2}>
                                9%
                            </Typography>
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
                                UGST :
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>

                            <Typography my={2}>
                                9%
                            </Typography>
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
                                IGST :
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>

                            <Typography my={2}>
                                9%
                            </Typography>
                        </Grid>


                    </Grid>
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} >Others</Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: 2, padding: 2 }} >

                        <Grid container spacing={2}  >
                            <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", mb: 1 }}>
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
                                <Typography my={2}>
                                    9%
                                </Typography>
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
                                <Typography my={2}>
                                    9%
                                </Typography>
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
                                <Typography my={2}>
                                    9%
                                </Typography>
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
                                <Typography my={2}>
                                    9%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ display: "flex", mt: 3, p: 2 ,mb:4 }}>
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
                        <Typography my={2}>
                            9%
                        </Typography>
                    </Box>


                </Box>

          


        </Box>
    );
};

export default Team;