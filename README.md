# Mi Repertorio 🎵 - DesafioLatam

Proyecto grupal realizado por **Alberto Cid**, **Cesar Verduzco** y **Darío Gago**.

## Descripción

Aplicación web para gestionar un repertorio de canciones. Permite agregar, editar, listar y eliminar canciones usando una interfaz sencilla y moderna.

## Tecnologías utilizadas

- Node.js
- Express
- Bootstrap
- Axios

## Instalación

1. Clona este repositorio.
2. Instala las dependencias:
   ```
   npm install
   ```
3. Inicia la aplicación:
   ```
   npm start
   ```
4. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## Uso

- Agrega una nueva canción completando el formulario y presionando "Agregar".
- Edita una canción existente usando el botón "Editar".
- Elimina canciones con el botón "Eliminar".
- Todas las canciones se almacenan en el archivo `repertorio.json`.

## Estructura del proyecto

- `index.js`: Servidor Express y rutas API.
- `index.html`: Interfaz de usuario.
- `repertorio.json`: Base de datos simple en formato JSON.
- `package.json`: Configuración y dependencias del proyecto.

## Rutas API

- `POST /canciones`: Agrega una canción al repertorio.
- `GET /canciones`: Devuelve el listado de canciones.
- `PUT /canciones/:id`: Modifica una canción existente.
- `DELETE /canciones?id=ID`: Elimina una canción por id (usando query string).

## Créditos

Trabajo realizado en equipo por:
- Darío Gago
- Cesar Verduzco
- Alberto Cid
