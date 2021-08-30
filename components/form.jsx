import { useState, useCallback } from "react";

const Form = (props) => {
    const { handleLocation } = props;
    const [textField, setTextField] = useState('')

    /*
      I am using the handleLocation function here which is passed from the Index
      component. It grab's the User's zipcode (which is saved in state from the 
      input element) and passes it back to be used in the fetchAllEvents function 
      with the zipcode passed as a parameter
    */
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