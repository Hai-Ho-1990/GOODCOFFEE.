import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const API_URL = import.meta.env.VITE_API_URL;
import { useEffect, useState } from 'react';
import axios from 'axios';

type OrderItem = {
    product_id: number;
    product_name: string;
    main_image: string;
    quantity: number;
    unit_price: number;
};

type OrderRow = {
    orderNumber: number;
    orderDate: string;
    totalPrice: number;
    orderStatus: string;
    items: OrderItem[];
};

type OrderFromApi = {
    id: number;
    order_date: string;
    total_price: string;
    status: string;
    items: OrderItem[];
};

function createData(
    orderNumber: number,
    orderDate: string,
    totalPrice: number,
    orderStatus: string,
    items: OrderItem[]
): OrderRow {
    return {
        orderNumber,
        orderDate,
        totalPrice,
        orderStatus,
        items
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow
                sx={{ '& > *': { borderBottom: 'unset' } }}
                onClick={() => {
                    if (window.innerWidth < 600) {
                        setOpen(!open);
                    }
                }}
            >
                <TableCell
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'table-cell'
                        }
                    }}
                >
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
                    sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            xs: '0.7rem',
                            sm: '0.9rem'
                        }
                    }}
                >
                    {row.orderNumber}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            xs: '0.7rem',
                            sm: '0.9rem'
                        }
                    }}
                >
                    {row.orderDate}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            xs: '0.7rem',
                            sm: '0.9rem'
                        }
                    }}
                >
                    {row.totalPrice} $
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            xs: '0.7rem',
                            sm: '0.9rem'
                        }
                    }}
                >
                    {row.orderStatus}
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                fontSize: {
                                                    xs: '0.7rem',
                                                    sm: '0.8rem'
                                                }
                                            }}
                                        >
                                            Product
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontSize: {
                                                    xs: '0.7rem',
                                                    sm: '0.8rem'
                                                }
                                            }}
                                        >
                                            Name
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: {
                                                    xs: '0.7rem',
                                                    sm: '0.8rem'
                                                }
                                            }}
                                        >
                                            Quantity
                                        </TableCell>

                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: {
                                                    xs: '0.7rem',
                                                    sm: '0.8rem'
                                                }
                                            }}
                                        >
                                            Total price ($)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.items.map((item) => (
                                        <TableRow key={item.product_id}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                className="w-[20%]"
                                            >
                                                <img
                                                    src={item.main_image}
                                                    alt=""
                                                    className="xs:w-[20%] h-[80px] object-cover"
                                                />
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: {
                                                        xs: '0.8rem'
                                                    }
                                                }}
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

function OrderComponent() {
    const [rows, setRows] = useState<ReturnType<typeof createData>[]>([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/orders`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data.orders);
                const fetchedOrders = response.data.orders;

                const mappedRows = fetchedOrders.map((order: OrderFromApi) =>
                    createData(
                        order.id,
                        new Date(order.order_date).toDateString(),
                        parseFloat(order.total_price),
                        order.status,
                        order.items
                    )
                );
                setRows(mappedRows);
            } catch (err) {
                console.error('error vid order hämtning', err);
            }
        };

        fetchOrderData();
    }, [token]);

    return (
        <section>
            <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    display: {
                                        xs: 'none',
                                        sm: 'table-cell'
                                    }
                                }}
                            />
                            <TableCell
                                sx={{
                                    fontSize: {
                                        xs: '0.7rem',
                                        sm: '0.8rem'
                                    }
                                }}
                            >
                                Order Number
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontSize: {
                                        xs: '0.7rem',
                                        sm: '0.8rem'
                                    }
                                }}
                            >
                                Order Date
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontSize: {
                                        xs: '0.7rem',
                                        sm: '0.8rem'
                                    }
                                }}
                            >
                                Total Price
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontSize: {
                                        xs: '0.7rem',
                                        sm: '0.8rem'
                                    }
                                }}
                            >
                                Order Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="bg-gray-100">
                        {rows.map((row) => (
                            <Row key={row.orderNumber} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
}

export default OrderComponent;
