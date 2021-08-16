import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello World!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons />
    </div>
  );
}
