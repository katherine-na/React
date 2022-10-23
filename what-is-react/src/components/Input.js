import React, { useState } from "react";

const Input = (props) => {

    const [label, setLabel] = useState(props.label)

    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    console.log(value);
    return(
        <>
            <label>{label}</label>
            <input type="text" value={value} onChange={handleChange}/>
        </>
    )
}

export default Input;