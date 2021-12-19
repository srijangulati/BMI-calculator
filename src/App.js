import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import FormItem from './components/FormItem';

const isNumber = (value) => {
  return new RegExp('^[0-9]+$').test(value);
}

const userInputs = [{
  id: 'name',
  label: 'Name',
  validate: (value) => {
    if(!value) {
      return 'Name is required';
    }
  }
},{
  id: 'age',
  label: 'Age',
  validate: (value) => {
    switch (true) {
      case !value:
        return 'Age is required';
      case !isNumber(value):
        return 'Age is invalid';
      default:
        return;
    }
  }
},{
  id: 'height',
  label: 'Height',
  validate: (value) => {
    switch (true) {
      case !value:
        return 'Height is required';
      case !isNumber(value):
        return 'Height is invalid';
      default:
        return;
    }
  }
},
{
  id: 'weight',
  label: 'Weight',
  validate: (value) => {
    switch (true) {
      case !value:
        return 'Weight is required';
      case !isNumber(value):
        return 'Weight is invalid';
      default:
        return;
    }
  }
}]

function App() {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [bmi, setBmi] = useState('');
  const [bmiList, setBmiList] = useState([]);

  const updateFormItem = (id, value) => {
    setForm((currentForm) => {
      const nextForm = {
        ...currentForm,
        [id]: value
      };
      return nextForm; 
    });
  }

  const calculate = () => {
      const weight = parseInt(form.weight);
      const height = parseInt(form.height);
      const userBmi = weight / (height * height)
      setBmi(userBmi);
      setBmiList((currentBmiList) => ([
        {
          ...form,
          bmi: userBmi,
          key: Date.now()
        }, 
        ...currentBmiList
      ]))
  }

  const updateErrors = (id, isInvalid) => {
    const currentErrors = errors;
    if (isInvalid) {
      currentErrors[id] = true;
    } else {
      delete currentErrors[id];
    }
    setErrors({...currentErrors});
  }

  return (
    <>
      <div className='container'>
        <div className='bmi-form'>
          <h1> Calculate your BMI</h1>
            <div className="form">
              {userInputs.map(item =>
                <FormItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  validate={item.validate}
                  update={updateFormItem}
                  value={form[item.id]}
                  updateErrors={updateErrors}
                  >
                </FormItem>
              )}
            </div>
          <button disabled={Boolean(Object.keys(errors).length)} onClick={calculate}> Calculate BMI</button>
          <h1> {bmi} </h1>
        </div>
        <div className='bmi-list'>
          { bmiList.length ? <BmiList list={bmiList}></BmiList> : null}
        </div>
      </div>
    </>
  );
}

export default App;

