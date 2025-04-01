import './App.css';
// import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';

// type StateType = {
//     count: number;
//     amount: number;
// };
// type ActionType = { type: string };

// function reducer(state: StateType, action: ActionType) {
//     if (action.type === 'decrement') {
//         return { ...state, count: state.count - state.amount };
//     } else if (action.type === 'increment') {
//         return { ...state, count: state.count + state.amount };
//     } else return state;
// }
function App() {
    // const [state, dispatch] = useReducer(reducer, { amount: 2, count: 1 });

    return (
        <>
            {
                /* <input
                onClick={() => {
                    dispatch({ type: 'decrement' });
                }}
                type="button"
                value="Minska"
                disabled={state.count === 1}
            />
            <input
                onClick={() => {
                    dispatch({ type: 'increment' });
                }}
                type="button"
                value="Öka"
            />
            <p>{state.count}</p> */
                <SmoothScrollWrapper>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </SmoothScrollWrapper>
            }
        </>
    );
}

export default App;
