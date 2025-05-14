import { useState } from 'react';
function useValidateInput(
    initialValue: string,
    //en funktion som validerar fältets innehåll och returnera:
    // en sträng om det är ogiltigt
    // null om allt är rätt
    validate: (value: string) => string | null
) {
    //Skapa en "mall" som kan appliceras på alla fält
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = e.target.value;
        setValue(result);
        // Resultat av validerings funktion lagars i validationMessage
        const validationMessage = validate(result);
        // Om det finns error ska meddelande lagrras i textHelper
        if (validationMessage) {
            setError(true);
            setHelperText(validationMessage);
        } else {
            setError(false);
            setHelperText('');
        }
    };
    // returna allt som behövs för att kontrollera
    return {
        value,
        onChange,
        error,
        helperText,
        setValue,
        setError,
        setHelperText
    };
}

export default useValidateInput;
