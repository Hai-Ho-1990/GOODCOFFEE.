import SignupComponent from '../components/SigninComponent';

function Signin() {
    return (
        <section
            data-scroll-section
            className="h-[100vh] w-[100vw] flex flex-col justify-center items-center"
        >
            <SignupComponent />
        </section>
    );
}

export default Signin;
