import React, { useState, useEffect } from "react";

// Formulario para crear o editar una tarea
const TaskForm = ({ onSubmit, editingTask, onCancel }) => {
  // Estado local para el título
  const [title, setTitle] = useState("");

  // Si estoy editando, lleno el input con el título de la tarea
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    } else {
      setTitle("");
    }
  }, [editingTask]);

  // Manejo el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{editingTask ? "Actualizar" : "Agregar"}</button>
      {/* Si estoy editando, muestro botón para cancelar */}
      {editingTask && <button onClick={onCancel}>Cancelar</button>}
    </form>
  );
};

export default TaskForm;