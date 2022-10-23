import React from 'react';
import Input from './Input';
import "../styles/components/form.css"

const Form = () => {
    return(
        <form>
            <h2>personal information</h2>
            <Input label="First Name"/>
            <Input label="Last name"/>
            <Input label="Age"/>
        </form>
    )
}

export default Form;