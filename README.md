
# 💥 Games Hub 💥

Proyecto que une la librería psn-api y la API OpenXbl

## Gía de uso

Hola José Alberto, esta es una pequeña guía indico como correr las partes que componen el prototipo del proyecto.

- ### Inicio de Express.js
Antes de levantarse el cliente React, se debe de correr el servidor Express para poder acceder a la psn-api:    

```bash
  npm i // Instala dependencias
  npm run dev // corre el servidor
```
Aunque para que funcione la librería de la psn-api deberás de configurar tu __package.json__ local y el de la librería psn-api (el cuál se encuentra en node_modules) indicando la propiedad __type:module__

```javascript
{
  "name": "test01",
  "type": "module",
}
```
  
- ### Inicio de React.js
Los comandos necesarios para levantar el servidor React son los mismos.
```basch
npm i 
npm run dev
```
## Ejemplo de uso
La App React tiene por defecto mis credenciales introducidas (usuarios de PlayStation y de Xbox), para probar más usuarios puedes usar algunos de estos nombres de ejemplo:  
- xXCHRISCHETOXx
- DatilonFG
- xXTheWolfXx

## Authors

- [@josemanu08](https://www.github.com/josemanu08)

