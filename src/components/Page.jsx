import { useState, useCallback } from 'react'
import Hijo from './Hijo'

export default function Page() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => setCount(c => c + 1), []);

  return (
    <div>
      <label>Contador: {count}</label>
      <br />
      <button onClick={increment}>
        Incrementar
      </button>

      <div>
        <Hijo contenido="Texto 1" />
        <Hijo contenido="Texto 2" />
        <Hijo contenido="Texto 3" />
      </div>
    </div>
  );
}