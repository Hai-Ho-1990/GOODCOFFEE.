import Header from '../components/Header.tsx';
import CoffeeBeansMenu from '../components/CoffeeBeansMenu.tsx';
export default function Home() {
    return (
        <>
            <Header />
            <h1 className="text-amber-400 text-left ml-[5vw] ">
                . OUR COFFEE BEANS
            </h1>
            <CoffeeBeansMenu />
        </>
    );
}
