import React, {useState} from 'react'
import './../App.css'

const Form = ({onSubmit}) => {

  const defaultState = {
    nombre: '',
    edad: '',
    check: false
  }

  const [form, setForm] = useState(defaultState)
  
  const handleSetForm = (element, value) => {
      setForm(oldData => ({...oldData, [element]: value}))
  }

  const handleNumberChange = (element, event) => {
    const inputValue = event.target.value
    const min = 1;
    if (inputValue < min) 
      return setForm(oldData => ({...oldData, [element]: min}));
    else
      return setForm(oldData => ({...oldData, [element]: +inputValue}));
};

  return ( 
    <div className='container'>
      <h2>Form bonito</h2>
      <form id='cuteForm' onSubmit={() => onSubmit(form)} className='container'>
      <div>
        <label htmlFor='name'>Nombre: </label>
        <input id='name' data-testid='test-name' placeholder='Nombre' type={'text'} value={form.nombre} onChange={(e) => handleSetForm('nombre', e.target.value)}/>
      </div>
      <div>
        <label htmlFor='edad'>Edad: </label>
        <input id='edad' data-testid='test-edad' placeholder='Edad' type={'number'} value={form.edad} onChange={(e) => handleNumberChange('edad', e)}/>
      </div>
      <div>
        <label htmlFor='check'>Te cae mal Juan Jose?:</label>
        <input id='check' data-testid='test-check' type={'checkbox'} checked={form.check} onChange={(e) => handleSetForm('check', e.target.checked)}/>
      </div>
        <button data-testid='test-reset' onClick={(e) =>{ e.preventDefault(); setForm(defaultState); }}>Reset</button>
        <button data-testid='test-submit' type='submit'>Continuar</button>
      </form>
    </div>
    );
}
 
export default Form;