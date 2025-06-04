const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); 

let tasks = [];
let nextId = 1;

// Obtener todas las tareas
router.get('/', (req, res) => {
  res.json(tasks);
});

// Crear nueva tarea
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es requerido' });
  const newTask = {
    id: uuidv4(), // id como string único
    title,
    description: description || '', // permite vacío
    completed: false,
    createdAt: new Date()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar tarea existente
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.json(task);
});

// Eliminar tarea
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ error: 'Tarea no encontrada' });
  tasks.splice(index, 1);
  res.status(204).end();
});

module.exports = router;