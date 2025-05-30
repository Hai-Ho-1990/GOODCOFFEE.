import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { Product } from '../../types/Product';
import { useState, useEffect } from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
const API_URL = import.meta.env.VITE_API_URL;
import axios from 'axios';

interface EditProductModalProps {
    open: boolean;
    onClose: () => void;
    product: Product | null;
    onSave: (updatedProduct: Product) => void;
}

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '12px'
};

const EditProductModal: React.FC<EditProductModalProps> = ({
    open,
    onClose,
    product,
    onSave
}) => {
    const [name, setName] = useState('');
    const [stock, setStock] = useState<number | undefined>(undefined);
    const [price, setPrice] = useState<number | undefined>(undefined);
    const [status, setStatus] = useState('');

    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        if (product) {
            setName(product.name.toUpperCase());
            setStock(product.stock);
            setPrice(product.discount_price);
            setStatus(product.status.toLowerCase());
        }
    }, [product]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleSave = async () => {
        if (!product) return;

        try {
            // FormData tillåter att vi kan skicka blandad data tex text + fil till backend
            const formData = new FormData();
            formData.append('name', name);
            formData.append('stock', String(stock ?? 0));
            formData.append('price', String(price ?? 0));
            formData.append('status', status);

            // Skicka med bilden endast om den valts
            if (imageFile) {
                formData.append('main_image', imageFile);
            }

            const response = await axios.put(
                `${API_URL}/api/products/${product.id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            onSave(response.data);
            onClose();
        } catch (err) {
            console.error('Error updating product', err);
        }
    };

    return (
        <>
            <Modal open={open} onClose={onClose}>
                <Box sx={style}>
                    <Typography variant="h6" mb={4} color="black">
                        Edit Product
                    </Typography>
                    <TextField
                        fullWidth
                        label="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        sx={{ marginTop: '30px' }}
                        fullWidth
                        label="Stock"
                        value={stock ?? ''}
                        onChange={(e) => setStock(Number(e.target.value))}
                    />
                    <div className="flex flex-row justify-between mt-[30px]">
                        <TextField
                            label="Product Price"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="status-label">Status</InputLabel>
                            <Select
                                labelId="status-label"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                label="Status"
                            >
                                <MenuItem value="in stock">In Stock</MenuItem>
                                <MenuItem value="out of stock">
                                    Out of Stock
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Box>
                        <Button
                            variant="outlined"
                            component="label"
                            fullWidth
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Upload Image
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </Button>
                        {imageFile && (
                            <Typography sx={{ color: 'black' }}>
                                {imageFile.name}
                            </Typography>
                        )}
                    </Box>

                    <Box mt={4}>
                        <Button onClick={onClose} sx={{ color: 'black' }}>
                            Cancel
                        </Button>
                        <Button
                            sx={{ backgroundColor: 'black', color: 'white' }}
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default EditProductModal;
