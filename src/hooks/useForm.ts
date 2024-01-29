import { ChangeEvent, useState } from "react";

export const useFrom = <T> (initialState : T) => {
    const [formValues, setFormValues] = useState(initialState);
    const handleChange = ({target} : ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    };
    const reset = () => setFormValues(initialState);

    return {
        formValues,
        handleChange,
        reset
    }
} 