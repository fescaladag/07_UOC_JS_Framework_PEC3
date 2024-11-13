# 🔱 MVC.js
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Simple todo MVC application in plain JavaScript

### [Read the tutorial](https://www.taniarascia.com/javascript-mvc-todo-app) | [View the demo](https://taniarascia.github.io/mvc)

## Purpose

Learn the MVC pattern by building a small app!

- **Model** - manages the data of an application
- **View** - a visual representation of the model
- **Controller** - links the user and the system

This application consists of `index.html`, `script.js`, and `style.css`. This means that there are no frameworks or dependencies getting in the way of learning the MVC concept.

## Author

- [Tania Rascia](https://www.taniarascia.com)

## License

This project is open source and available under the [MIT License](LICENSE).




En esta práctica se ha utilizado webpack para empaquetar los archivos traspilados a javascript en uno solo (bundle.js). Para ello en primer lugar se debe crear el archivo ``tsconfig.json`` mediante este comando: (en este caso no sería necesario ya que esta creado de antemano, no obstante esta sería la forma de crearlo )


```
tsc init 
```

En segundo lugar se instalarían las dependencias necesarias:

```
npm init -y  node.js crea el package.json
npm install typescript webpack webpack-cli ts-loader --save-dev //instala typescript, webpack  y ts-loader

```
Para compilar los archivos typescript, usamos el comando

```
tsc //nos crea los archivos .js compilados en la ruta 'outDir' definida en  tsconfig.json

```

el ultimo paso es crear el fichero bundle.js 

```
npm run build 

```






