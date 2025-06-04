import React from "react";

// Componente para mostrar una tarea individual
const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <li>
      {/* Muestro el título y si está completada */}
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      {/* Botón para editar */}
      <button onClick={() => onEdit(task)}>Editar</button>
      {/* Botón para eliminar */}
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;