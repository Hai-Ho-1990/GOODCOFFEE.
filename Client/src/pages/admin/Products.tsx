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
import EditIcon from '@mui/icons-material/Edit';
import EditProductModal from '../../components/admin/EditProductModal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

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
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleSaveProduct = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/product`);
            setProducts(response.data); // ersätter hela listan
        } catch (err) {
            console.error('Failed to refresh products after save', err);
        }
    };

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
        <>
            <h1 className="text-black text-left text-3xl mt-6">Product List</h1>
            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: 5 }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            minWidth: column.minWidth
                                        }}
                                    >
                                        {column.id === 'name' ? (
                                            <span
                                                style={{ marginLeft: '40px' }}
                                            >
                                                {column.label}
                                            </span>
                                        ) : (
                                            column.label
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((product) => {
                                    const row = createData(
                                        product.name.toUpperCase(),
                                        product.main_image,
                                        product.stock,
                                        product.status,
                                        product.discount_price
                                    );

                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={product.id}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {column.id ===
                                                            'image' &&
                                                        typeof value ===
                                                            'string' ? (
                                                            <img
                                                                src={value}
                                                                alt="product"
                                                                width={50}
                                                                height={50}
                                                            />
                                                        ) : column.id ===
                                                          'name' ? (
                                                            <div>
                                                                <EditIcon
                                                                    onClick={() =>
                                                                        handleEditClick(
                                                                            product
                                                                        )
                                                                    }
                                                                    sx={{
                                                                        fontSize:
                                                                            'large',
                                                                        marginRight:
                                                                            '20px',
                                                                        cursor: 'pointer',
                                                                        color: 'black',
                                                                        transition:
                                                                            'color 0.3s ease',
                                                                        '&:hover':
                                                                            {
                                                                                color: 'gray'
                                                                            }
                                                                    }}
                                                                />
                                                                {value}
                                                            </div>
                                                        ) : (
                                                            value
                                                        )}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <EditProductModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
                onSave={handleSaveProduct}
            />
            <div className="mt-[15%] ml-[90%]">
                <Fab
                    sx={{
                        backgroundColor: 'black',
                        '&:hover': {
                            backgroundColor: '#ffb900'
                        }
                    }}
                    aria-label="add"
                    size="large"
                >
                    <AddIcon sx={{ color: 'white' }} />
                </Fab>
            </div>
        </>
    );
}
