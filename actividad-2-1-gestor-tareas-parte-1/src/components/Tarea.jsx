function Tarea({ id, nombre, onEliminar }) {
  return (
    <li>
      {nombre}{" "}
      <button onClick={() => onEliminar(id)}>Eliminar</button>
    </li>
  );
}

export default Tarea;
