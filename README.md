# Backend Chatbot Project

## Descripción

Este proyecto es un backend para un chatbot de restaurante de sushi. Permite gestionar pedidos, mostrar el menú y responder a preguntas frecuentes. El chatbot está entrenado para entender una variedad de mensajes relacionados con el servicio del restaurante.

## Instalación

### Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- MongoDB (local o en la nube)

### Pasos para Instalar

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/backend-chatbot.git
   cd backend-chatbot

   ```

2. Instala las dependencias:

   ```bash
   npm install

   ```

3. Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

   MONGO_URI=mongodb://localhost:27017/tu-base-de-datos
   NODE_ENV=development
   PORT=5000

## Cómo Correr el Proyecto

### En Desarrollo

1. Ejecuta el script para almacenar el menú en la base de datos:

   ```bash
   node data/storeMenu.js

   ```

2. Ejecuta el servidor:

   ```bash
   npm run dev

   ```

### En Producción

1. Compila el proyecto:

   ```bash
   npm run build

   ```

2. Ejecuta el servidor:

   ```bash
   npm start

   ```

## Cómo Ejecutar los Tests

1. Ejecuta los tests:

   ```bash
   npm test

   ```

## Ejemplos de Mensajes que Entiende el Bot

- "Hola"

- "Quiero hacer un pedido"

- "Mostrar menú"

- "¿Cuáles son sus horarios?"

- "¿Dónde están ubicados?"

- "Gracias"

- "Adiós"

- "¿Tienen promociones?"

- "¿Puedo reservar una mesa?"

- "¿Ofrecen delivery?"

- "¿Tienen opciones para alérgicos?"

- "¿Cuál es la historia del restaurante?"

- "¿Quién es el chef?"

- "¿Qué métodos de pago aceptan?"

- "¿Qué recomiendan?"

- "¿Organizan eventos?"

- "¿Ofrecen catering?"

## Endpoints Disponibles

### Pedidos

- POST /api/order
  Descripción: Almacena un pedido.
  Ejemplo de solicitud:

  ```json
  {
    "items": [{ "name": "Sushi", "quantity": 2, "price": 10 }],
    "total": 20,
    "customerName": "John Doe",
    "customerContact": "1234567890",
    "customerAddress": "123 Sushi St"
  }
  ```

  Ejemplo de respuesta:

  ```json
  {
    "answer": "Pedido almacenado satisfactoriamente!"
  }
  ```

  ### Chatbot

  - POST /api/chat
    Descripción: Procesa un mensaje del usuario y devuelve una respuesta basada en la intención detectada.
    Ejemplo de solicitud:

  ```json
  {
    "message": "Hola"
  }
  ```

  Ejemplo de respuesta:

  ```json
  {
    "answer": "¡Hola! 😊 ¿Cómo andás? Estoy acá para ayudarte con lo que necesites. ¿Listo para una experiencia fabulosa?"
  }
  ```

  ### Menú

  - GET /api/menu
    Descripción: Devuelve el menú completo.
    Ejemplo de solicitud:

  ```json
  {
    "message": "Mostrar menú"
  }
  ```

  Ejemplo de respuesta:

  ```json
  {
    "menu": [
       "name": "Sushi Roll de Salmón",
    "description":
      "Delicioso sushi roll con salmón fresco, aguacate y pepino, envuelto en alga nori. Una combinación clásica que nunca falla.",
    "price": 300
    ]
  }

  ```
