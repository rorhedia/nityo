## Levantar servidor 
```bash
npm start
```

## Consumir recursos
GET http://localhost:3000/api/v1/users/getAll

POST http://localhost:3000/api/v1/users/create

{
"nombre": "Daniel",
"paterno": "Heredia",
"materno": "Romero",
"edad": 30,
"genero": "Masculino",
"especialidad": "Leader"
}

PUT http://localhost:3000/api/v1/users/update/:id

{
"nombre": "Alberto",
"paterno": "Aviles",
"edad": 32,
"especialidad": "Base de datos"
}

## Ejecutar ExamenGC.js
```bash
npm run gstest
```