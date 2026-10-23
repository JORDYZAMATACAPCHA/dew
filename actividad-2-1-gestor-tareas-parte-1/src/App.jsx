import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";
import "./App.css";

function App() {

  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  const anadirTarea = () => {
    const nombre = texto.trim();

    if (nombre === "") return;

    const nuevaTarea = {
      id: crypto.randomUUID(), // key estable y única
      nombre,
    };

    setTareas([...tareas, nuevaTarea]);
    setTexto("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <>
      <h1>Gestor de tareas</h1>

      <Formulario
        texto={texto}
        setTexto={setTexto}
        onAnadir={anadirTarea}
      />

      <ListaTareas tareas={tareas} onEliminar={eliminarTarea} />
    </>
  );
}

export default App;