import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
const API_URL = import.meta.env.VITE_API_URL;
import { Product } from '../../types/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Column {
    id: keyof Data;
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: string | number) => string;
}

interface Data {
    name: string;
    image: string;
    stock: number;
    status: string;
    price: number;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'image', label: 'Image', minWidth: 100 },
    {
        id: 'stock',
        label: 'Stock',
        minWidth: 100,
        align: 'right',
        format: (value: string | number) => value.toString()
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 100,
        align: 'right'
    },
    {
        id: 'price',
        label: 'Price',
        minWidth: 100,
        align: 'right',
        format: (value: string | number) =>
            typeof value === 'number' ? value.toFixed(2) : '—'
    }
];

function createData(
    name: string,
    image: string,
    stock: number,
    status: string,
    price: number
): Data {
    return { name, image, stock, status, price };
}

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const url = `${API_URL}/api/product`;

                const response = await axios.get(url);

                console.log(response.data);
                setProducts(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProduct();
    }, []);

    const mappedProducts: Data[] = products.map((product) =>
        createData(
            product.name,
            product.main_image,
            product.stock,
            product.status,
            product.discount_price
        )
    );

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mappedProducts
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => (
                                <TableRow hover tabIndex={-1} key={index}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.id === 'image' &&
                                                typeof value === 'string' ? (
                                                    <img
                                                        src={value}
                                                        alt="product"
                                                        width={40}
                                                        height={40}
                                                    />
                                                ) : (
                                                    // fallback eller annan rendering
                                                    value
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={mappedProducts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
