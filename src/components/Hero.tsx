function Hero() {
    return (
        <div className=" w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-[100vh] object-cover opacity-85"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="./209424_small.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Hero;
