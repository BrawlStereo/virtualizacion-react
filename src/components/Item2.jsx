import { useState, memo } from "react";

function Item2({ id, nombre, onEliminar }) {
    const [likes, setLikes] = useState(0);

    console.log("Render Item:", nombre);
}