import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const navItems = [
    {
        title: "",
        pages: [
            {
                title: "Home",
                href: "/",
                icon: HomeOutlinedIcon,
                backgroundcolor: "#333333",
                color: "#000000"
            }
        ],
    },
    {
        title: "ordermanagement",
        pages: [
            {
                title: "Order Management",
                href: "/psa",
                icon: Inventory2OutlinedIcon,
                backgroundcolor: "#E47201",
                children: [
                    {
                        title: "Create New Order",
                        href: "/psa/create-new-order",
                        backgroundcolor: "#EA8E33",
                    },
                    {
                        title: "Order Tracking",
                        href: "",
                        backgroundcolor: "#EA8E33",
                    },
                    {
                        title: "Historical Orders",
                        href: "",
                        backgroundcolor: "#EA8E33",
                    },
                    {
                        title: "Futures Orders",
                        href: "",
                        backgroundcolor: "#EA8E33",
                    },
                ],
            }
        ],
    },
    {
        title: "inventorymanagement",
        pages: [
            {
                title: "Inventory Management",
                href: "",
                icon: InventoryOutlinedIcon,
            }
        ]
    },
    {
        title: "vendormanagement",
        pages: [
            {
                title: "Vendor Management",
                href: "",
                icon: StoreOutlinedIcon,
            }
        ]
    },
    {
        title: "warehousemanagement",
        pages: [
            {
                title: "Warehouse Management",
                href: "",
                icon: WarehouseOutlinedIcon,
            }
        ]
    },
    {
        title: "logisticsmanagement",
        pages: [
            {
                title: "Logistics Management",
                href: "",
                icon: LocalShippingOutlinedIcon,
            }
        ]
    },
];

export default navItems;
