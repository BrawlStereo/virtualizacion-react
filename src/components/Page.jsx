import { useState } from 'react'
import React from 'react'

// React.memo para detectar variable que no cambia
const Texto = React.memo(({ contenido }) => {
    console.log(`Soy ${contenido}`);
    return <p>{contenido}</p>;
});

export default function Page() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <label>Contador: {count}</label>
      <br />
      <button onClick={() => setCount(count +1 )}>
        Incrementar
      </button>

      <div>
        <Texto contenido="Texto 1" />
        <Texto contenido="Texto 2" />
        <Texto contenido="Texto 3" />
      </div>
    </div>
  );
}