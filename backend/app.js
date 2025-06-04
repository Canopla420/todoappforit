const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();

// Habilito CORS para permitir peticiones del frontend
app.use(cors());

// Permito recibir y enviar JSON en las peticiones
app.use(express.json());

// Todas las rutas de tareas empiezan con /api/tasks
app.use('/api/tasks', tasksRouter);

module.exports = app;