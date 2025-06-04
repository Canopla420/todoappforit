import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

// Componente principal de la app
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  // Estado para las tareas
  const [tasks, setTasks] = useState([]);
  // Estado para saber si estoy editando una tarea
  const [editingTask, setEditingTask] = useState(null);

  // Traigo las tareas del backend al cargar la app
  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  // Crear una nueva tarea
  const addTask = (title, description) => {
    fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then((newTask) => setTasks([...tasks, newTask]));
  };

  // Actualizar una tarea existente
  const updateTask = (title, description) => {
    fetch(`${API_URL}/tasks/${editingTask.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
        setEditingTask(null);
      });
  };

  // Eliminar una tarea
  const deleteTask = (id) => {
    fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" }).then(() => {
      setTasks(tasks.filter((t) => t.id !== id));
    });
  };

  const handleSubmit = (title, description) => {
    if (editingTask) {
      updateTask(title, description);
    } else {
      addTask(title, description);
    }
  };

  // Cuando quiero editar una tarea
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // Cuando cancelo la edición
  const handleCancel = () => {
    setEditingTask(null);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <div className="main-content">
        <div className="form-section">
          <TaskForm
            onSubmit={handleSubmit}
            editingTask={editingTask}
            onCancel={handleCancel}
          />
        </div>
        <div className="list-section">
          <TaskList tasks={tasks} onEdit={handleEdit} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;