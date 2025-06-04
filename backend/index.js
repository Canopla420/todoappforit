const app = require('./app');

// Tomo el puerto de las variables de entorno o uso 3000 por defecto
const PORT = process.env.PORT || 4000;

// Arranco el servidor y muestro un mensaje en consola
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}/api/tasks`);
});