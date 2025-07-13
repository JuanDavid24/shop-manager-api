# Shop Manager API

Este proyecto es una API RESTful para la gestión de productos y usuarios de una tienda, desarrollada con Node.js y Express. Utiliza Firebase como base de datos para almacenar la información.

## Tecnologías utilizadas

- Node.js
- Express
- Firebase Firestore
- Dotenv

## Endpoints disponibles

### Productos

- `GET /api/products`  
  Obtiene la lista de todos los productos.

- `GET /api/products/:id`  
  Obtiene un producto por su ID.

- `POST /api/products/create`  
  Crea un nuevo producto.  

  **Body:**
  ```json
  {
    "name": "Nombre del producto",
    "price": 1000,
    "inStock": true,
    "description": "Descripción opcional",
    "color": "Color opcional"
  }
  ```
- `DELETE /api/products/:id`
  Elimina un producto por su ID.

### Usuarios

- `GET /api/users`
Obtiene la lista de todos los usuarios.

- `GET /api/users/:id`
Obtiene un usuario por su ID.

- `POST /api/users/create`
Crea un nuevo usuario.
**Body:**
  ```json
  {
    "name": "Nombre del usuario",
    "email": "email@ejemplo.com"
  }
  ```

- `DELETE /api/users/:id`
Elimina un usuario por su ID.

Cómo levantar el proyecto
1. Clona el repositorio.
2. Instala las dependencias:

    ```bash
    npm install
    ```
3. Configura las variables de entorno en el archivo .env con las credenciales de Firebase (usar .env.example como referencia).
4. Inicia el servidor en modo desarrollo:
O en modo producción:
    ```bash
    npm start
    ```
5. El servidor estará disponible en http://localhost:3000.
