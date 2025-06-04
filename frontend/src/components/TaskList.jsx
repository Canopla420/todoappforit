import React from "react";

// Componente para mostrar la lista de tareas
const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul>
      {/* Recorro el array de tareas y muestro cada una */}
      {tasks.map((task) => (
        // Uso el id como key
        <li key={task.id}>
          {/* Muestro el título de la tarea */}
          {task.title}
          {/* Botón para editar */}
          <button onClick={() => onEdit(task)}>Editar</button>
          {/* Botón para eliminar */}
          <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;