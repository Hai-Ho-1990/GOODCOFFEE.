import { TextField, Button, Checkbox } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

function SigninComponent() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    //State for username
    const [username, setUsername] = useState('');
    const [errorUsername, setErrorUsername] = useState(false);
    const [helperTextUsername, setHelperTextUsername] = useState('');

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUsername(value);

        if (value.length < 3) {
            setErrorUsername(true);
            setHelperTextUsername('Username has to be atleast 3 characters');
        } else {
            setErrorUsername(false);
            setHelperTextUsername('');
        }
        if (value === '') {
            setErrorUsername(false);
            setHelperTextUsername('');
        }
    };

    // State for password
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);
    const [helperTextPassword, setHelperTextPassword] = useState('');

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);

        if (!passwordRegex.test(value)) {
            setErrorPassword(true);
            setHelperTextPassword(
                'At least 8 characters, one uppercase letter, one number, and one special character.'
            );
        } else {
            setErrorPassword(false);
            setHelperTextPassword('');
        }
        if (value === '') {
            setErrorPassword(false);
            setHelperTextPassword('');
            return;
        }
    };

    // State for repeat password
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);
    const [helperTextRepeatPassword, setHelperTextRepeatPassword] =
        useState('');

    const handleChangeRepeatPassword = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value;
        setRepeatPassword(value);
    };

    //Denna gör att sidan hinner att uppdatera password och sedan kunna jämföra med repeat password
    // Annars hinner den inte uppdatera och leder till att man behöver skriver ett extra tecken
    // så att setError blir false vilken är fel
    useEffect(() => {
        if (password !== repeatPassword) {
            setErrorRepeatPassword(true);
            setHelperTextRepeatPassword(
                'Repeat password does not match your password.'
            );
        } else {
            setErrorRepeatPassword(false);
            setHelperTextRepeatPassword('');
        }
    }, [password, repeatPassword]);

    //State för email validering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [helperTextEmail, setHelperTextEmail] = useState('');

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (!emailRegex.test(value)) {
            setErrorEmail(true);
            setHelperTextEmail('Invalid email format');
        } else {
            setErrorEmail(false);
            setHelperTextEmail('');
        }
        if (value === '') {
            setErrorEmail(false);
            setHelperTextEmail('');
        }
    };

    // Hanterar submit för att skicka till backend
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://backend-8qj8.onrender.com/api/signin',
                {
                    username,
                    password,
                    email
                }
            );
            console.log(response.data);
        } catch (error) {
            console.error('Fel vid skapa konto', error);
        }
    };

    return (
        <section className="w-[50vw] bg-[#232628] h-[80vh] rounded-xl opacity-80 flex">
            <div className="signup-page w-[50%] flex flex-col justify-center">
                <h1 className="text-2xl pt-5">Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <Username
                        label="Username"
                        variant="outlined"
                        required
                        size="small"
                        value={username}
                        onChange={handleChangeUsername}
                        error={errorUsername}
                        helperText={helperTextUsername || ' '}
                    />
                    <Password
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
                        size="small"
                        value={password}
                        error={errorPassword}
                        helperText={helperTextPassword || ' '}
                        onChange={handleChangePassword}
                    />
                    <RepeatPassword
                        label="Repeat Password"
                        variant="outlined"
                        type="password"
                        required
                        size="small"
                        onChange={handleChangeRepeatPassword}
                        value={repeatPassword}
                        error={errorRepeatPassword}
                        helperText={helperTextRepeatPassword || ' '}
                    />
                    <Email
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                        size="small"
                        value={email}
                        error={errorEmail}
                        helperText={helperTextEmail || ' '}
                        onChange={handleChangeEmail}
                    />
                    <div className="text-start pl-[11%]">
                        <CustomLabel
                            required
                            control={<CustomCheckbox />}
                            label="I agree to the Terms & Privacy"
                        />
                    </div>
                    <div className="mt-[10px] ">
                        <Button
                            variant="contained"
                            size="large"
                            color="success"
                            type="submit"
                            sx={{
                                backgroundColor: '#ffb900',
                                color: 'black',
                                padding: '12px 24px',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                width: '70%',
                                borderRadius: '40px',
                                height: '43px',

                                '&:hover': {
                                    backgroundColor: 'orange'
                                }
                            }}
                        >
                            Create account
                        </Button>
                    </div>
                </form>

                <Link
                    to="/login"
                    className="text-sm text-white underline pt-5 text-[13px]"
                >
                    Already have an account ? Login
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

export default SigninComponent;

// Styling for textfield

import { styled } from '@mui/material/styles';

const Username = styled(TextField)({
    marginTop: '40px',
    width: '70%',
    alignSelf: 'center',
    marginBottom: '1rem',

    // 🔹 Label-färg
    '& label': {
        color: 'white',
        fontSize: '12px'
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

const Password = styled(TextField)({
    width: '70%',

    alignSelf: 'center',
    marginBottom: '1rem',

    // 🔹 Label-färg
    '& label': {
        color: 'white',
        fontSize: '12px'
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

const RepeatPassword = styled(TextField)({
    width: '70%',

    alignSelf: 'center',
    marginBottom: '1rem',

    // 🔹 Label-färg
    '& label': {
        color: 'white',
        fontSize: '12px'
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

const Email = styled(TextField)({
    width: '70%',

    alignSelf: 'center',
    marginBottom: '1rem',

    // 🔹 Label-färg
    '& label': {
        color: 'white',
        fontSize: '12px'
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

// Checkbox styling

const CustomCheckbox = styled(Checkbox)({
    color: 'white',
    '&.Mui-checked': {
        color: '#ffb900' // Färg när den är ikryssad
    },
    '& .MuiSvgIcon-root': { fontSize: 20 }
});
const CustomLabel = styled(FormControlLabel)({
    color: 'white', // Textfärg
    marginLeft: '10px',
    '& .MuiFormControlLabel-label': {
        fontSize: '12px',
        color: 'white'
    }
});

// Validering
