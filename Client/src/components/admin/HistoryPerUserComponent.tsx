import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const API_URL = import.meta.env.VITE_API_URL;
import { useEffect, useState } from 'react';
import axios from 'axios';

type OrderItem = {
    order_id: number;
    product_id: number;
    product_name: string;
    main_image: string;
    quantity: number;
    unit_price: number;
    order_date: string;
};

type OrderRow = {
    userId: number;
    userName: string;
    userEmail: string;
    userTelephone: number;
    userAddress: string;
    userCity: string;
    history: OrderItem[];
};

type UserFromApi = {
    id: number;

    username: string;
    email: string;
    telephone: number;
    address: string;
    city: string;
};

type OrderFromApi = {
    id: number;
    user_id: number;
    order_date: string;
    total_price: string;
    status: string;
    items: OrderItem[];
};

function createData(
    userId: number,
    userName: string,
    userEmail: string,
    userTelephone: number,
    userAddress: string,
    userCity: string,
    history: OrderItem[]
): OrderRow {
    return {
        userId,
        userName,
        userEmail,
        userTelephone,
        userAddress,
        userCity,
        history
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: 'bold' }}
                >
                    {row.userId}
                </TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                    {row.userName}
                </TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                    {row.userEmail}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {row.userTelephone}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {row.userAddress}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {row.userCity}
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={7}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Order Id</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">
                                            Quantity
                                        </TableCell>

                                        <TableCell align="right">
                                            Total price ($)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((item) => (
                                        <TableRow
                                            key={`${item.product_id}-${item.order_date}`}
                                        >
                                            <TableCell
                                                sx={{ fontWeight: 'bold' }}
                                            >
                                                {item.order_id}
                                            </TableCell>
                                            <TableCell>
                                                {item.order_date
                                                    ? new Date(
                                                          item.order_date
                                                      ).toLocaleDateString()
                                                    : 'N/A'}
                                            </TableCell>

                                            <TableCell
                                                component="th"
                                                scope="row"
                                                className="w-[20%]"
                                            >
                                                <img
                                                    src={item.main_image}
                                                    alt=""
                                                    className="w-[15%] h-[60px] object-cover"
                                                />
                                            </TableCell>
                                            <TableCell
                                                sx={{ fontWeight: 'bold' }}
                                            >
                                                {item.product_name.toUpperCase()}
                                            </TableCell>
                                            <TableCell
                                                sx={{ fontWeight: 'bold' }}
                                                align="right"
                                            >
                                                {item.quantity}
                                            </TableCell>

                                            <TableCell
                                                align="right"
                                                sx={{ fontWeight: 'bold' }}
                                            >
                                                {(
                                                    item.unit_price *
                                                    item.quantity
                                                ).toFixed(2)}{' '}
                                                $
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

function HistoryPerUserComponent() {
    const [rows, setRows] = useState<ReturnType<typeof createData>[]>([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userRes, orderRes] = await Promise.all([
                    axios.get(`${API_URL}/api/admin/users`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }),
                    axios.get(`${API_URL}/api/admin/orders`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                ]);

                const users: UserFromApi[] = userRes.data.users;
                const orders: OrderFromApi[] = orderRes.data.orders;

                console.log(users);
                console.log(orders);

                const userRows = users.map((user) => {
                    const userOrders = orders
                        .filter((order) => order.user_id === user.id)
                        .flatMap(
                            (order) =>
                                Array.isArray(order.items)
                                    ? order.items.map((item) => ({
                                          ...item,
                                          order_date: order.order_date
                                      }))
                                    : [] // Om items är undefined/null, returnera tom array
                        );
                    console.log(
                        'Orders för användare:',
                        user.username,
                        userOrders
                    );
                    console.log('User ID:', user.id);
                    orders.forEach((order) =>
                        console.log(
                            'Order user_id:',
                            order.user_id,
                            'order_id:',
                            order.id
                        )
                    );
                    console.log('Alla orders:');
                    orders.forEach((order) => {
                        console.log(
                            `Order ID: ${order.id}, user_id: ${order.user_id}`
                        );
                    });

                    return createData(
                        user.id,
                        user.username,
                        user.email,
                        user.telephone,
                        user.address,
                        user.city,
                        userOrders
                    );
                });
                setRows(userRows);
            } catch (err) {
                console.error('error vid order hämtning', err);
            }
        };

        //Fetch Orders

        fetchData();
    }, [token]);

    return (
        <section>
            <TableContainer>
                <Typography
                    variant="h6"
                    mb={5}
                    color="black"
                    sx={{
                        fontSize: '1.8rem',
                        textAlign: 'left',
                        marginTop: '12px'
                    }}
                >
                    Users List
                </Typography>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>ID</TableCell>
                            <TableCell align="left">User Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="center">Telephone</TableCell>
                            <TableCell align="center">Adress</TableCell>
                            <TableCell align="center">City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="bg-gray-100">
                        {rows.map((row) => (
                            <Row key={row.userId} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
}

export default HistoryPerUserComponent;
