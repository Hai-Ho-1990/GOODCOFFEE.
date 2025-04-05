function Button() {
    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log(event.target);
    };
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}

export default Button;
