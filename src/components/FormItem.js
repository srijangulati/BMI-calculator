import { useState } from 'react/cjs/react.development';
import '../styles/FormItem.css';

export default function FormItem(props) {

  const [errorMsg, setError] = useState('');

  const onValueChange = (event) => {
    const errorMsg = props.validate(event.target.value);
    setError(errorMsg);
    props.updateErrors(props.id, Boolean(errorMsg));
    props.update(props.id, event.target.value);
  }

  const renderError = () => {
    return (
      <div className="error">* {errorMsg}</div>
    )
  }

  return ( 
    <div className="form-element">
      <label>{props.label}</label>
      <input value={props.value} onChange={onValueChange}></input>
      {errorMsg ? renderError() : null}
    </div>
  )
}

FormItem.defaultProps = {
  update: () => {},
  label: 'No Label',
  value: '',
  updateErrors: () => {},
  validate: () => {}
}