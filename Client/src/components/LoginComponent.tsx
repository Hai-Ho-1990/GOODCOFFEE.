import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function LoginComponent() {
    return (
        <section className="w-[50vw] bg-[#232628] h-[80vh] rounded-xl opacity-80 flex">
            <div className="login-page w-[50%] flex flex-col justify-center relative">
                <h1 className="text-2xl pt-5">Login</h1>
                <form
                    className="flex flex-col justify-center relative"
                    action="
                "
                >
                    <Username label="Username" variant="outlined" required />
                    <Password
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
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

const Username = styled(TextField)({
    marginTop: '70px',
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

const Password = styled(TextField)({
    marginTop: '20px',
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
