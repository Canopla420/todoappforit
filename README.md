# Todo App ForIT

Aplicación fullstack de lista de tareas desarrollada para el challenge de ForIT.  
Incluye backend en Node.js + Express y frontend en React + Vite.

---

## 🚀 Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tuusuario/todoappforit.git
cd todoappforit
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```
El backend corre por defecto en [http://localhost:4000](http://localhost:4000)

### 3. Frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```
El frontend corre por defecto en [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Variables de entorno

- **Backend:**  
  Puedes crear un archivo `.env` en `/backend` (opcional, por defecto usa el puerto 4000).

- **Frontend:**  
  En `/frontend/.env` debe estar la URL de la API:
  ```
  VITE_API_URL=http://localhost:4000/api
  ```

---

## 🧩 Estructura del proyecto

```
todoappforit/
├── backend/
│   ├── routes/
│   │   └── tasks.js
│   ├── app.js
│   ├── index.js
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskForm.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── ...
├── README.md
└── ...
```

---

## 🖼️ Capturas de pantalla


![Lista de tareas](./captura1.png)
![Formulario de tarea](./captura2.png)

---

## ✨ Funcionalidades

- CRUD completo de tareas (crear, leer, actualizar, eliminar)
- Estructura recomendada de tarea:
  ```js
  {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: Date
  }
  ```
- Estado global con React Hooks
- Conexión frontend-backend vía fetch
- CSS básico

---

## 📦 Tecnologías usadas

- Node.js + Express
- React + Vite
- JavaScript (ES6+)
- CSS

---
