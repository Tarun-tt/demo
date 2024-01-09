import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

export const sidebarMenu = [
    // {
    //     title: 'Dashboard',
    //     icon: HomeOutlinedIcon,
    //     path: '/',
    // },
    {
        title: 'Info',
        tag: 'divider'
    },
    {
        title: 'MAIN',
        icon: PeopleOutlinedIcon,
        path: '/team',
    },
    {
        title: 'ITEMS',
        icon: ContactsOutlinedIcon,
        path: '/contacts',
    },
    {
        title: 'MASTER',
        icon: ReceiptOutlinedIcon,
        path: '/invoices',
    },
    // {
    //     title: 'Inputs',
    //     tag: 'divider'
    // },
    // {
    //     title: 'Profile Form',
    //     icon: PersonOutlinedIcon,
    //     path: '/form',
    // },
    // {
    //     title: 'Calendar',
    //     icon: CalendarTodayOutlinedIcon,
    //     path: '/calendar',
    // },
    // {
    //     title: 'FAQ Page',
    //     icon: HelpOutlineOutlinedIcon,
    //     path: '/faq',
    // },
    // {
    //     title: 'Charts',
    //     tag: 'divider'
    // },
    // {
    //     title: 'Bar Chart',
    //     icon: BarChartOutlinedIcon,
    //     path: '/bar',
    // },
    // {
    //     title: 'Pie Chart',
    //     icon: PieChartOutlineOutlinedIcon,
    //     path: '/pie',
    // },
    // {
    //     title: 'Line Chart',
    //     icon: TimelineOutlinedIcon,
    //     path: '/line',
    // },
    // {
    //     title: 'Geography Chart',
    //     icon: MapOutlinedIcon,
    //     path: '/geography',
    // },
]