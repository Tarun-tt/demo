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
import { useNavigate, useLocation } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { toast } from 'react-toastify';
import { currency, vendorState } from "../constants";

const Showtable = () => {
    const [date, setDate] = useState(new Date());
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
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
    const [pOCVALUE, setPOCVALUE] = useState("");
    const [vendorStateError, setVendorStateError] = useState("");

    const [vendorAddressError, setVendorAddressError] = useState("");
    const [currentValue, setCurrentValue] = useState("");
  

    const [data, setData] = useState("");
    const [itinerary, setItinerary] = useState("");
   // console.log("kiii")
    useEffect(() => {
        setItinerary("")
        console.log("kiii",)
       
        axios.get('http://localhost:8080/api/poc')
            .then(res => {
                // const { navigate } = this.props
                setData(res?.data.response);
               
            }).catch(error => { //console.log(history.push('/companyDetail'),"jjjjjjjj");
                console.log(error.response);
                toast.error('Some error to fetching data!');
            });
    }, [])

   
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
         let formData = value.target.value;

        if (field === 'pocValue') {
           setPOCVALUE(formData);
           console.log(pOCVALUE)
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
    const dispatch = (id) => {
        navigate("/view/"+id)
     };
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
            <Box sx={{ p: 2}}>
           
                         
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            variant="h3"
                            component="div"
                            sx={{
                                color: "black",
                                fontWeight: "bold",
                                my: 2,
                                ml: 5

                            }}
                        >
                            Show PO Data
                        </Typography>
                    </Grid>
                 
                   
                   
                    <Grid xs={12} sm={12} my={3}>
                       
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead >
                                    <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "14px" }}>S. NO.</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", fontSize: "14px" }}>PO Type</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>Division</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>Category</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>Store</TableCell>
                                        
                                        <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>PODate</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>Vendor</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>PO Value</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "14px" }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        {data && data?.map((row1, index) => (
                                            <TableRow
                                                key={row1.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" sx={{ fontSize: '14px' }}>
                                                    {index+1}
                                                </TableCell>
                                                <TableCell component="th" scope="row" sx={{ fontSize: '14px' }}>
                                                    {row1.potype}
                                                </TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.division}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.category}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.store}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.poDate}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.vendor}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}>{row1.po_value}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: '14px' }}><Button variant="contained" type="button" onClick={() => dispatch(row1?.id)} color="success" startIcon={<VisibilityIcon/>}> View</Button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
              


            </Box>




        </Box>
    );
};

export default Showtable;