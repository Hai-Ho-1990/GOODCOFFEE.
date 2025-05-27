import { TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function LoginComponent() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [helperTextUsername, setHelperErrorUsername] = useState('');
    const [helperTextPassword, setHelperTextPassword] = useState('');

    const { login } = useAuth(); // <-- Lägg till detta

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${API_URL}/api/login`,
                // 'https://backend-8qj8.onrender.com/api/login',

                {
                    username,
                    password
                }
            );

            // Töm fälten på lyckad inloggning
            setUsername('');
            setPassword('');
            // Spara token vid lyckad inloggning
            //Dessa "info" skicades från jwt-token i loginController.ts
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('username', response.data.username);
            console.log(response.data.token);
            console.log(response.data.username);
            console.log(response.data);

            login(response.data.token);
            // Och navigera till homepage
            navigate('/');
        } catch (err) {
            const error = err as AxiosError;
            if (error.response && error.response.data) {
                const data = error.response.data as {
                    errors: Record<string, string>;
                    message: string;
                    username: string;
                    password: string;
                };
                if (data.errors) {
                    if (data.errors.username) {
                        setHelperErrorUsername(data.errors.username || ' ');
                        setErrorUsername(true);
                    }
                    if (data.errors.password) {
                        setHelperTextPassword(data.errors.password || ' ');
                        setErrorPassword(true);
                    }
                } else if (data.message) {
                    console.log(data.message);
                }
            } else {
                console.error(err);
            }
        }
    };

    return (
        <section className="w-[50vw] bg-[#232628] h-[80vh] rounded-xl opacity-80 flex">
            <div className="login-page w-[50%] flex flex-col justify-center relative">
                <h1 className="text-2xl pt-5 pb-20">Login</h1>
                <form
                    className="flex flex-col justify-center relative"
                    action="
                "
                    onSubmit={handleSubmit}
                >
                    <StyledTextField
                        label="Username"
                        variant="outlined"
                        required
                        error={errorUsername}
                        helperText={helperTextUsername}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <StyledTextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
                        error={errorPassword}
                        helperText={helperTextPassword}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <a href="" className="text-[14px]">
                        Forgot password?
                    </a>
                    <div className="mt-[20px] ">
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            color="success"
                            sx={{
                                backgroundColor: '#ffb900',
                                color: 'black',
                                padding: '12px 24px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                width: '70%',
                                borderRadius: '40px',
                                height: '43px',

                                '&:hover': {
                                    backgroundColor: 'orange'
                                }
                            }}
                        >
                            Login
                        </Button>
                    </div>
                    <div className="flex items-center justify-center pt-5">
                        <hr className="w-[30%] border-t border-gray-500 " />
                        <span className="px-4 text-gray-400">or</span>
                        <hr className="w-[30%] border-t border-gray-500 " />
                    </div>
                    <div className="mt-[20px] ">
                        <Button
                            variant="contained"
                            size="large"
                            // color="warning"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                padding: '12px 24px',
                                fontSize: '14px',

                                width: '70%',
                                borderRadius: '40px',
                                height: '43px',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#f2f2f2'
                                }
                            }}
                        >
                            <img
                                src="./google.png"
                                alt=""
                                className="w-[20px] pr-1.5"
                            />
                            Login with google
                        </Button>
                    </div>
                </form>

                <Link
                    to="/signin"
                    className="text-sm text-white underline pt-5 text-[13px]"
                >
                    Don't have an account ? Sign up.
                </Link>
            </div>
            <div className="flex justify-center items-center w-[50%] h-[80vh] relative">
                <img
                    className=" object-cover rounded-xl w-[97%] h-[97%] "
                    src="./bild.jpg"
                    alt=""
                />
                <Link
                    to="/"
                    className="text-lg  font-bold pt-5 text-[#d4a010] absolute top-[-5px] right-5"
                >
                    GC.
                </Link>
            </div>
        </section>
    );
}

export default LoginComponent;

import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
    marginTop: '10px',
    width: '70%',
    alignSelf: 'center',
    marginBottom: '1rem',

    // 🔹 Label-färg
    '& label': {
        color: 'white',
        fontSize: '14px'
    },
    '& label.Mui-focused': {
        color: 'white'
    },

    // 🔸 Input-rutan
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'black',
        borderRadius: '10px',

        '& input': {
            color: 'white' // textfärg i input
        },
        '& input::placeholder': {
            color: 'white',
            opacity: 1
        },

        '& fieldset': {
            borderColor: 'grey'
        },
        '&:hover fieldset': {
            borderColor: 'white'
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white'
        }
    }
});
