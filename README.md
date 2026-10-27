# TuDoctorOnline

Aplicación web para la gestión de información relacionada con pacientes y citas médicas. Este proyecto académico está construido con una arquitectura cliente-servidor: una interfaz web en React, una API en Node.js y Express, y persistencia de datos en MongoDB.

> **Estado del proyecto:** actualmente es una base en desarrollo. El backend expone operaciones para crear y consultar pacientes. Las pantallas de inicio de sesión y registro y los modelos relacionados con citas y profesionales son parte de la estructura del proyecto, pero no todas esas funciones están conectadas o disponibles como flujos completos.

## Tecnologías

- **Frontend:** React 18, React Router y Create React App.
- **Backend:** Node.js y Express 4.
- **Base de datos:** MongoDB, conectada mediante Mongoose.
- **Interfaz:** AdminLTE y componentes web incluidos en el frontend.

## Estructura del proyecto

```text
.
├── BackEnd/
│   ├── app.js                 # Inicio de la API
│   ├── config/                # Servidor y conexión con MongoDB
│   ├── controller/            # Lógica de pacientes y citas
│   ├── models/                # Modelos de MongoDB
│   ├── routes/                # Rutas de la API
│   └── test/                  # Archivos de prueba/desarrollo
└── frontend/
    ├── public/                # Recursos estáticos y plugins
    └── src/
        ├── pages/             # Pantallas de la aplicación
        ├── utils/             # Utilidades para consumir la API
        └── config.js          # Dirección base del backend
```

## Requisitos

- Node.js y npm.
- MongoDB ejecutándose localmente en el puerto predeterminado (`27017`).

El backend se conecta a la base de datos `tudoctor` en `mongodb://localhost:27017/tudoctor`.

## Instalación y ejecución

Clona el repositorio y abre dos terminales desde la carpeta del proyecto.

### 1. Iniciar el backend

```bash
cd BackEnd
npm install
npm start
```

La API se inicia en `http://localhost:3001`.

### 2. Iniciar el frontend

En la segunda terminal:

```bash
cd frontend
npm install
npm start
```

La aplicación de React se abre en `http://localhost:3000`. El frontend está configurado para consumir el backend en `http://localhost:3001`.

## API disponible

| Método | Ruta | Descripción |
|---|---|---|
| `POST` | `/paciente` | Crea un paciente si no existe un paciente con el mismo número de documento. |
| `GET` | `/paciente` | Devuelve la lista de pacientes registrados. |

El modelo de paciente requiere `username`, `email` y `password`. También contempla `tipoDocumento` y `numDocumento`.

Ejemplo de cuerpo para `POST /paciente`:

```json
{
  "tipoDocumento": "CC",
  "numDocumento": "123456789",
  "username": "Nombre del paciente",
  "email": "paciente@example.com",
  "password": "contraseña"
}
```

## Funcionalidades y alcance actual

- Rutas de interfaz para inicio de sesión (`/`) y creación de cuenta (`/crear-cuenta`).
- API básica para crear y consultar pacientes.
- Modelos de datos para pacientes, citas, doctores, consultorios y especialidades.
- Estructura inicial de controladores y rutas para citas.

Las pantallas de autenticación todavía no completan un flujo conectado con la API. Aunque existen modelos y archivos de rutas para citas, esas rutas aún no están registradas en el servidor principal.

## Scripts disponibles

En `frontend/`:

```bash
npm start    # Inicia el servidor de desarrollo
npm test     # Ejecuta el entorno de pruebas de Create React App
npm run build
```

En `BackEnd/`:

```bash
npm start    # Inicia la API
```

## Contribuciones

Las contribuciones son bienvenidas. Para proponer cambios, crea una rama, realiza tus modificaciones y abre un pull request con una descripción clara.
