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
        field: "age",
        headerName: "Description",
        type: "number",
        headerAlign: "left",
        align: "left",
    },
    {
        field: "phone",
        headerName: "Quantity",
        flex: 1,
    },
    {
        field: "email",
        headerName: "Rate",
        flex: 1,
    },
    {
        field: "address",
        headerName: "Discount %",
        flex: 1,
    },
    {
        field: "city",
        headerName: "Discount Amount",
        flex: 1,
    },
    {
        field: "zipCode",
        headerName: "Active",
        flex: 1,
    },
];

export default contactsColumns;