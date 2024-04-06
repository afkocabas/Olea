import { useState } from "react";

function useForm({initialState}) {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return {
        values,
        handleChange
    }
}

export default useForm;
