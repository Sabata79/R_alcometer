import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('Male');
  const [result, setResult] = useState(0);

  function countLevel(e) {
    e.preventDefault();
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    let answer = 0

    if (gender === 'Male') {
      answer = gramsLeft / (weight * 0.7)
    }
    if (gender === 'Female') {
      answer = gramsLeft / (weight * 0.6)
    }
    if (answer < 0) {
      setResult(0)
    }
    else {
      setResult(answer)
    }
  }

  return (
    <>
      <form>
        <div className='container'>
          <h2 className='text-center'>Calculating alcohol blood level</h2>
        </div>
        <div className='container'>
          <label className='form-label'>Weight</label>
          <input type='number' name='weight' className='form-control' onChange={e => setWeight(e.target.value)} />
        </div>
        <div className='container'>
          <label className='form-label'>Bottles</label>
          <select name='bottles' className='form-control' onChange={e => setBottles(e.target.value)}>
          <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className='container'>
          <label className='form-label'>Time</label>
          <select type='number' name='time' className='form-control' onChange={e => setTime(e.target.value)}>
          <option value="0">0</option>
            <option value="1">1h</option>
            <option value="2">2h</option>
            <option value="3">3h</option>
            <option value="4">4h</option>
            <option value="5">5h</option>
            <option value="6">6h</option>
            <option value="7">7h</option>
            <option value="8">8h</option>
            <option value="9">9h</option>
            <option value="10">10h</option>
          </select>
        </div>
        <div className='container'>
          <p>Gender</p>
          <div className='form-check'>
            <input type='radio' name='gender' value='Male' className='form-check-input' defaultChecked onChange={e => setGender(e.target.value)} />
            <label className='form-check-label'>Male</label>
          </div>
          <div className='form-check'>
            <input type='radio' name='gender' value='Female' className='form-check-input' onChange={e => setGender(e.target.value)} />
            <label className='form-check-label'>Female</label>
          </div>
          <div>
            <output>{result.toFixed(2)} Grams left</output>
          </div>
        </div>
        <div className='text-center mt-2' >
          <button type='button' className='btn btn-primary' onClick={countLevel}>Calculate</button>
        </div>
      </form>
    </>
  );
}

export default App;
