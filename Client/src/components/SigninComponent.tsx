import { TextField, Button, Checkbox } from '@mui/material';
const API_URL = import.meta.env.VITE_API_URL;
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link, useNavigate } from 'react-router-dom';

import useValidateInput from './Validateinput';

import axios, { AxiosError } from 'axios';

//En funktion där hanterar inputsfält, validera dess värde, hantera fel och visa fel meddelande
function SigninComponent() {
    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const usernameInput = useValidateInput('', (result) => {
        if (result.length < 3) return 'Username has to be atleast 3 characters';
        if (result === '') return null;
        return null;
    });

    const passwordInput = useValidateInput('', (result) => {
        if (!passwordRegex.test(result)) {
            return 'At least 8 characters, one uppercase letter, one number, and one special character.';
        }
        return null;
    });

    const repeatPasswordInput = useValidateInput('', (result) => {
        if (result !== passwordInput.value) {
            return 'Repeat password does not match your password.';
        }
        return null;
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = useValidateInput('', (result) => {
        if (!emailRegex.test(result)) {
            return 'Invalid email format';
        } else {
            return null;
        }
        if (result.length === 0) {
            return null;
        }
    });

    // Hanterar submit för att skicka till backend
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${API_URL}/api/signin`,
                // 'https://backend-8qj8.onrender.com/api/signin',

                {
                    username: usernameInput.value,
                    password: passwordInput.value,
                    email: emailInput.value
                }
            );
            navigate('/login');
            console.log(response.data);
        } catch (err) {
            //Säg till ts att error är AxiosError-objekt med följande struktur:
            //             //{
            //   message: "Request failed with status code 409",
            //   response: {
            //     status: 409,
            //     data: {
            //       errors: {
            //         email: "Tex: Email is already used"
            //       }
            //     }
            //   }
            // }
            const error = err as AxiosError;
            if (error.response && error.response.data) {
                const data = error.response.data as {
                    errors: Record<string, string>;
                    message: string;
                };
                if (data.errors) {
                    if (data.errors.username) {
                        usernameInput.setHelperText(data.errors.username);
                        usernameInput.setError(true);
                    }
                    if (data.errors.email) {
                        emailInput.setHelperText(data.errors.email);
                        emailInput.setError(true);
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
        <section className="w-full lg:w-[80vw] xl:w-[50vw] bg-[#232628] h-[100vh] md:h-[80vh] rounded-xl opacity-80 flex md:mt-5 self-center">
            <div className="signup-page md:w-[50%] flex flex-col justify-center">
                <h1 className="text-2xl lg:pt-5 pb-15">Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <StyledTextField
                        label="Username"
                        variant="outlined"
                        required
                        size="small"
                        value={usernameInput.value}
                        onChange={usernameInput.onChange}
                        error={usernameInput.error}
                        helperText={usernameInput.helperText || ' '}
                    />
                    <StyledTextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
                        size="small"
                        value={passwordInput.value}
                        error={passwordInput.error}
                        helperText={passwordInput.helperText || ' '}
                        onChange={passwordInput.onChange}
                    />
                    <StyledTextField
                        label="Repeat Password"
                        variant="outlined"
                        type="password"
                        required
                        size="small"
                        onChange={repeatPasswordInput.onChange}
                        value={repeatPasswordInput.value}
                        error={repeatPasswordInput.error}
                        helperText={repeatPasswordInput.helperText || ' '}
                    />
                    <StyledTextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                        size="small"
                        value={emailInput.value}
                        error={emailInput.error}
                        helperText={emailInput.helperText || ' '}
                        onChange={emailInput.onChange}
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
            <div className="md:flex justify-center items-center w-[50%] h-[80vh] relative hidden">
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

// Checkbox styling

const StyledTextField = styled(TextField)({
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
