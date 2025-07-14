# Shop Manager API

## Tests de Postman

Esta carpeta contiene la colección de Postman para el proyecto **shop-manager-api**.

### Overview

La sección **Overview** de la colección incluye una descripción detallada de los endpoints disponibles para **productos** y **usuarios**, junto con ejemplos documentados de las acciones principales:

- Obtener todos los recursos
- Obtener por ID
- Crear
- Eliminar

### Uso

1. Importa el archivo `shop-manager-api.postman_collection.json` en Postman.
2. Consulta la sección **Overview** para entender el flujo de pruebas y los ejemplos incluidos.
3. Ejecuta las requests.

### Notas

- La colección cubre casos exitosos y de error para los endpoints principales.
- La variable `BASE_URL` tiene la URL del proyecto desplegado en Vercel. Si se desea correrlo y probarlo en localhost, se debe cambiar el valor de la misma.
- Luego de crear un **producto** o **usuario**:
  - Se actualizan las variables `product_id` y `user_id`.
  - Se puede revisar que haya sido creado directamente ejecutando el request "**_get by id_**" asociado.
  - Se elimina el último recurso creado con el "**_delete_**" de cada carpeta.
