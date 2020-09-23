import React, { useState } from 'react';

import ClickMeButton from './components/ClickMeButton';
import Button from './components/Button';
import NumberInput from './components/NumberInput';

function App() {
  const [state, setState] = useState({ count: 0, input: 0 });
  const { count, input } = state;

  function handleClick(value) {
    setState({ ...state, count: count + value });
  }

  function handleChange(e) {
    setState({ ...state, input: parseInt(e.target.value, 10) });
  }

  return (
    <div>
      <p>Counter</p>
      <p>
        <ClickMeButton
          value={count}
          onClick={() => handleClick(1)}
        />
      </p>
      <p>
        {
          [1, 2, 3, 4, 5].map((i) => (
            <Button
              value={i}
              key={i}
              onClick={() => handleClick(i)}
            />
          ))
        }
      </p>
      <p>
        <NumberInput
          value={input}
          onChange={handleChange}
        />
        <Button
          value="increase"
          onClick={() => handleClick(input)}
        />
      </p>
    </div>
  );
}

export default App;
