import { Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography, useTheme, Tab, Tabs } from "@mui/material";
import { tokens } from "../../styles/theme";
import Header from "../../components/Header";
import {useState} from  'react';
import  Contacts  from './Contacts'
const top100Films = [
    { label: 'Tarun1', year: 1994 },
    { label: 'Data1', year: 1972 },
    { label: 'Data Part II', year: 1974 },
    { label: 'Data 3', year: 2008 },
]
const Team = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
    const handleTabChange = (e, tabIndex) => {
      console.log(tabIndex);
      setCurrentTabIndex(tabIndex);
    };

    return (
        <Box m="20px">

            <Header title="Main" subtitle="SIETZ TECHNOLOGIES INDIA PVT LTD." />

            <Tabs value={currentTabIndex} onChange={handleTabChange}>
                <Tab label='Main' />
                <Tab label='Item' />
               
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
                    ml: 2
                }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="One Time PO" />
                    <FormControlLabel control={<Checkbox />} label="Open PO" />

                </FormGroup>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        Division Name
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="  Division Name" />}
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        Category
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label=" Category" />}
                    />
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 14 }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        PO Number
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label=" PO Number" />}
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        Store
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="  Store" />}
                    />
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        PO Date
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="   PO Date" />}
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        PO Amend Date
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="PO Amend Date" />}
                    />
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        PO Eff. Date
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="   PO Eff. Date " />}
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        PO End Date
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label=" PO End Date" />}
                    />
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        Vendor
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="   Vendor" />}
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        Vendor Ref No.
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="    Vendor Ref No." />}
                    />
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        Currency
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="  Currency" />}
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                        Currency Converter
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label=" Currency Converter" />}
                    />
                </Box>
            </Box>
            <Box component={Paper} sx={{ width: "30%", ml: 45, mt: 2 }}>
                <FormGroup sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mt: 2
                }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="PO Direct to OSP" />
                    <FormControlLabel control={<Checkbox />} label="Quality Assured " />
                    <FormControlLabel control={<Checkbox />} label="None" />


                </FormGroup>
            </Box>
            <Box>
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
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label=" Payment Terms" />}
                />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label=" Mode of Transport" />}
                />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
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
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label=" Price Basis" />}
                />
            </Box>

                </Box>
            )}

            {/* TAB 2 Contents */}
            {currentTabIndex === 1 && (
                <Box sx={{ p: 3 }}>
                    <Contacts/>
                </Box>
            )}

          
        </Box>
    );
};

export default Team;