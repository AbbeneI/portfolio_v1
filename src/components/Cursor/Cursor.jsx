import './Cursor.css';
import { useState, useEffect } from "react";

export default function Cursor({ }) {
    const [MousePosition, setMousePosition] = useState({});

    useEffect(() => {

        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY })

        };

        window.addEventListener("pointermove", updateMousePosition);

        return () => {
            // cleanup code
            window.removeEventListener("pointermove", updateMousePosition);
        };

    }, []);

    return (
        <div className="cursor" style={{ left: MousePosition.x, top: MousePosition.y }}></div>
    );
}