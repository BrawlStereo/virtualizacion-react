import { useState, useCallback, memo } from "react";

function Item2({ id, nombre, onEliminar }) {
    const [likes, setLikes] = useState(0);

    console.log("Render Item:", nombre);

    return (
        <li>
            {nombre} ❤️ {likes}
            <button onClick={() => setLikes(prev => prev + 1)}>Like</button>
            <button onClick={() => onEliminar(id)}>Eliminar</button>
        </li>
    );
}

export default function App() {
    const [nuevoNombre, setNuevoNombre] = useState("");

    const [items, setItems] = useState(() => [
        { id: crypto.randomUUID(), nombre: "Juan" },
        { id: crypto.randomUUID(), nombre: "Luis" },
        { id: crypto.randomUUID(), nombre: "Maria" },
        { id: crypto.randomUUID(), nombre: "Karla" }
    ]);

    console.log("Render App");

    function agregarItem() {
        if (!nuevoNombre.trim()) return;
        setItems(prev => [...prev, { id: crypto.randomUUID(), nombre: nuevoNombre }]);
        setNuevoNombre("");
    }

    const eliminarItem = useCallback((id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }, []);

    const invertirLista = useCallback(() => {
        setItems(prev => [...prev].reverse());
    }, []);

    return (
        <div>
            <input
                type="text"
                placeholder="Escribe un nombre"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
            />
            <button onClick={agregarItem}>Agregar</button>
            <button onClick={invertirLista}>Invertir lista</button>
            <ul>
                {items.map((item) => (
                    <Item2
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        onEliminar={eliminarItem}
                    />
                ))}
            </ul>
        </div>
    );
}