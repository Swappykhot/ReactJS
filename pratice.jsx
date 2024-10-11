import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(count + 1);
  const minusOne = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Count: {count}</h1>
      <button onClick={addOne} style={{ margin: '5px' }}>+1</button>
      <button onClick={minusOne} style={{ margin: '5px' }}>-1</button>
      <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
}

export default App;