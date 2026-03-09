import React from 'react'

function Hijo({ contenido }) {
    console.log(`Soy: ${contenido}`);
    return <p>{contenido}</p>;
}

// Memoizamos el componente para evitar renders cuando sus props no cambian
export default React.memo(Hijo);