function Formulario({ texto, setTexto, onAnadir }) {
  return (
    <div>
      <input
        type="text"
        value={texto}
        placeholder="Escribe una tarea..."
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={onAnadir}>Añadir</button>
    </div>
  );
}

export default Formulario;