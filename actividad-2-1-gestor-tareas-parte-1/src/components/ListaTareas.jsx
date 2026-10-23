import Tarea from "./Tarea";

function ListaTareas({ tareas, onEliminar }) {
  if (tareas.length === 0) {
    return <p>No hay tareas pendientes</p>;
  }

  return (
    <ul>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          id={tarea.id}
          nombre={tarea.nombre}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;