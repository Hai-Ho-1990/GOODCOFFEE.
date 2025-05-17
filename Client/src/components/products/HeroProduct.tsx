function HeroProduct() {
    return (
        <div className=" w-[100vw] h-[100vh] ">
            <video
                className="absolute top-0 left-0 w-full h-[100vh] object-cover opacity-85 blur-[2px]"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="../video/summer.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default HeroProduct;
