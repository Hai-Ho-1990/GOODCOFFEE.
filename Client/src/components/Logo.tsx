import { Link } from 'react-router-dom';
export default function logo() {
    return (
        <>
            <Link to="/" className="z-1">
                <h1 className="logo text-5xl font-extrabold text-[#d4a010] z-1">
                    GC.
                </h1>
            </Link>
        </>
    );
}
