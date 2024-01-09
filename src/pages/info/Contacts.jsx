import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { mockDataContacts } from "../../constants/mockData";
import { Checkbox, TextField, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";
// import contactsColumns from "../../constants/contactsColumns";

const mockDataContacts =[{
  id: 1,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId: 92197,
},
{
  id: 2,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId: 92197,
},
{
  id: 3,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId: 92197,
},
{
  id: 4,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId: 92197,
},
{
  id: 5,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId: 92197,
},
{
  id: 6,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId: 92197,
},
{
  id: 7,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId: 92197,
},
{
  id:8,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId: 92197,
},
{
  id: 9,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "",
  registrarId: 92197,
},
{
  id: 10,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "true",
  registrarId: 92197,
},
{
  id: 11,
  name: "Steve Goodman",
  rate: "",
  desc: 11,
  quan: "(444)555-6239",
  discountPercentage: "",
  discountAmount: "",
  isActive: "false",
  registrarId: 92197,
},

]
const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rate, setRate] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleRateChange = (event) => {
    const newRate = parseFloat(event.target.value) || 0;
    setRate(newRate);
    recalculateDiscountAmount(newRate, discountPercentage);
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
  const contactsColumns = [
    { field: "id", headerName: "Item Code", flex: 0.5 },
    { field: "registrarId", headerName: "HSN/SAC Code" },
    {
        field: "name",
        headerName: "Job work Sac",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "desc",
        headerName: "Description",
        // type: "number",
        // headerAlign: "left",
        // align: "left",
        flex: 1,
    },
    {
        field: "quan",
        headerName: "Quantity",
        flex: 1,
    },
    { field: 'rate', headerName: 'Rate', flex: 1, renderCell: (params) => <TextField value={rate} onChange={handleRateChange} /> },
    { field: 'discountPercentage', headerName: 'Discount %', flex: 1, renderCell: (params) => <TextField value={discountPercentage} onChange={handleDiscountPercentageChange} /> },
    { 
      field: 'discountAmount', 
      headerName: 'Discount Amount', 
      flex: 1, 
      value: discountAmount,  // This should be calculated based on rate and discountPercentage
      renderCell: (params) => <TextField value={discountAmount} disabled />, // Display the calculated value
    },
    { 
      field: 'isActive', 
      headerName: 'Active', 
      flex: 1, 
      renderCell: (params) => <Checkbox checked={isActive} onChange={handleActiveChange} />, 
    },
  ];
  return (
    <Box m="20px">
<Header title="UNIT 2" subtitle="SIETZ TECHNOLOGIES INDIA PVT LTD." />
      <Box
        // m="40px 0 0 0"
        height="75vh"
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
          rows={mockDataContacts}
          columns={contactsColumns}
          components={{ Toolbar: GridToolbar }}
        />

      </Box>
    </Box>
  );
};

export default Contacts;