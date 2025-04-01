import { useState, useEffect } from 'react';
import React from 'react';

// Definiera en typ för städer
interface City {
    id: number;
    name: string;
    population: number;
}

function App() {
    // Typa state för cities, name och population
    const [cities, setCities] = useState<City[]>([]); // En array av City-objekt
    const [name, setName] = useState<string>(''); // Namnet på staden
    const [population, setPopulation] = useState<number>(0); // Befolkningen av staden

    // Hämta städer från servern när komponenten laddas
    useEffect(() => {
        async function getCities() {
            try {
                const response = await fetch('https://avancera.app/cities/');
                const data = await response.json();
                setCities(data); // Uppdatera state med de hämtade städerna
            } catch (error) {
                console.error(error);
            }
        }
        getCities();
    }, []);

    // Funktion för att lägga till en stad
    async function addCity() {
        const newCity = { name, population };
        try {
            const response = await fetch('https://avancera.app/cities/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCity) // Skicka staden till servern
            });
            const createdCity = await response.json(); // Vänta på det skapade city-objektet
            setCities((prevCities) => {
                const updatedCities = [...prevCities, createdCity];
                return updatedCities;
            });
        } catch (error) {
            console.error(error);
        }
    }

    // Logga cities när den ändras
    useEffect(() => {
        console.log(cities); // Loggar cities varje gång de uppdateras
    }, [cities]); // Kör useEffect när cities förändras

    return (
        <>
            <label>
                Namn{' '}
                <input
                    placeholder="Namn"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </label>{' '}
            <label>
                Befolkning{' '}
                <input
                    placeholder="Befolkning"
                    type="number"
                    onChange={(e) => setPopulation(Number(e.target.value) || 0)} // Konvertera till nummer
                    value={population}
                />
            </label>{' '}
            <input type="button" value="Lägg till stad" onClick={addCity} />
            {cities.length > 0 && (
                <dl>
                    {cities.map((city) => (
                        <React.Fragment key={city.id}>
                            <dt>{city.id}</dt>
                            <dt>{city.name}</dt>
                            <dd>{city.population}</dd>
                        </React.Fragment>
                    ))}
                </dl>
            )}
        </>
    );
}

export default App;
