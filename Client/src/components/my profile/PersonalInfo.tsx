import { TextField, Button } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const API_URL = import.meta.env.VITE_API_URL;

function PersonalInfo() {
    const token = localStorage.getItem('token');

    //UseState
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}/api/profile`,
                    // 'https://backend-8qj8.onrender.com/api/profile',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                console.log(response.data);
                setUsername(response.data.username);
                setEmail(response.data.email);
                setTelephone(response.data.telephone);
                setAddress(response.data.address);
                setPostcode(response.data.postcode);
                setCity(response.data.city);
            } catch (err) {
                console.error('Felet är: ' + err);
            }
        };
        fetchUserData();
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `${API_URL}/api/profile`,
                // 'https://backend-8qj8.onrender.com/api/profile',
                { username, email, telephone, address, postcode, city },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setUsername(response.data.username);
            setEmail(response.data.email);
            setTelephone(response.data.telephone);
            setAddress(response.data.address);
            setPostcode(response.data.postcode);
            setCity(response.data.city);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="flex flex-col items-center mt-[50px]">
            <h1 className="self-start ml-[10%] mt-[5%] text-2xl text-black">
                My Profile
            </h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-wrap w-[100%] mt-[3%] justify-around">
                    <div className="w-[35%] p-6 ">
                        <TextField
                            required
                            id="filled-required"
                            label="Username"
                            variant="standard"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="w-[35%] p-6 ">
                        <TextField
                            required
                            id="filled-required"
                            label="Email"
                            variant="standard"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-[35%] p-6 ">
                        <TextField
                            id="filled-required"
                            label="Telephone"
                            variant="standard"
                            fullWidth
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                    </div>
                    <div className="w-[35%] p-6 ">
                        <TextField
                            id="filled-required"
                            label="Address"
                            variant="standard"
                            fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="w-[35%] p-6 ">
                        <TextField
                            id="filled-required"
                            label="Post Code"
                            variant="standard"
                            fullWidth
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                        />
                    </div>
                    <div className="w-[35%] p-6 ">
                        <TextField
                            id="filled-required"
                            label="City"
                            variant="standard"
                            fullWidth
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mt-[5%] w-[100%]">
                    <Button
                        type="submit"
                        // variant="standard"
                        size="large"
                        color="success"
                        sx={{
                            backgroundColor: '#ffb900',
                            color: 'black',
                            padding: '12px 24px',
                            fontSize: '12px',
                            fontWeight: 'bold',

                            borderRadius: '40px',
                            height: '43px',

                            '&:hover': {
                                backgroundColor: 'orange'
                            }
                        }}
                    >
                        Save Changes
                    </Button>
                </div>
            </form>
        </section>
    );
}

export default PersonalInfo;
