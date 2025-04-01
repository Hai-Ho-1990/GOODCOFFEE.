import { useState, useEffect } from 'react';
import React from 'react';

function App() {
    // Typa state som en array av strängar
    const [dogs, setDogs] = useState<string[]>([]);

    useEffect(() => {
        async function getDogs() {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            const dogNames = Object.keys(data.message); // Konvertera objekt till en array med hundraser
            console.log(dogNames); // Logga namnen i konsolen
            setDogs(dogNames);
        }
        getDogs();
    }, []);

    return (
        <>
            {dogs.length > 0 && (
                <dl>
                    {dogs.map((dog, index) => (
                        // Använd hundrasens namn som nyckel istället för index
                        <React.Fragment key={dog.index}>
                            <dt>{index}</dt>
                            <dt>{dog}</dt>
                        </React.Fragment>
                    ))}
                </dl>
            )}
        </>
    );
}

export default App;
