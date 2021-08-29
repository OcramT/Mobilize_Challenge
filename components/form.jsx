import { useState, useCallback } from "react";

const Form = (props) => {
    const { handleLocation } = props;
    const [textField, setTextField] = useState('')

    const handleSubmit = useCallback(() => {
        handleLocation(textField)
    })

    const handleChange = useCallback((e) => {
        setTextField(e.target.value)
    })

    return (
        <section className='form-section'>
            <label>Enter Your Location</label>
            <div className='field-button'>
                <input 
                    type="text" 
                    value={textField}
                    className='form-input'
                    placeholder='Your Zipcode Here'
                    onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </section>
    )
}

export default Form;