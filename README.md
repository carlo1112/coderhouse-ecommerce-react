# **Sonido Codeado, Ecommerce - React.js**
# *Curso de React JS de CoderHouse*
### **Desarrollo por Carlos Cattaneo**
- *Contacto: carlo1112@gmail.com*
- *LinkedIn: https://www.linkedin.com/in/carlo1112/*
- *GitHub: https://github.com/carlo1112*

# *Información del proyecto:*

Proyecto final para el curso de React.js de [CoderHouse](https://www.coderhouse.com).
Consiste en un ecommerce implementado con React.js junto a React Router, React Hooks, React-Bootstrap y Firebase.

## *Version 1.0.0:*
*App: carlo1112@gmail.com*
- [App:](https://sonidocodeado.surge.sh/) *https://sonidocodeado.surge.sh/*

- Se usa como base de datos Firestore
## *Desarrollado con:*

- [Visual Studio Code](https://code.visualstudio.com/)
- [React](https://reactjs.org/)
- [Create react app](https://create-react-app.dev/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React-Router](https://v5.reactrouter.com/web/)
- [Fontawesome](https://fontawesome.com/)

# *Sobre el flujo de compra:*

## Gif del sitio

_Dinámica de funcionamiento del sitio:_

<!-- -[![Gif]](./src/components/Assets/SonidoCodeado-Funcionamiento.gif) -->

![Sample Gif](./src/components/Assets/SonidoCodeado-Funcionamiento.gif)

<!-- +<img src="./src/components/Assets/SonidoCodeado-Funcionamiento.gif?raw=true" width="200px"> -->

#

## **Capturas:**

### 1. Inicio:
## ![](https://res.cloudinary.com/carlo1112/image/upload/v1639679459/sonidocodeado-paginaejemplo/01_lzkgwr.png)

### 2. Detalle del producto:

## ![](https://res.cloudinary.com/carlo1112/image/upload/v1639679459/sonidocodeado-paginaejemplo/02_ebdyy1.png)

### 3. Carrito de compras, con productos seleccionados:

## ![](https://res.cloudinary.com/carlo1112/image/upload/v1639679473/sonidocodeado-paginaejemplo/03_tvkf1c.png)

### 4. Continuar compra con usuario loggeado:

## ![](https://res.cloudinary.com/carlo1112/image/upload/v1639679448/sonidocodeado-paginaejemplo/04_sb1bbu.png)

### 5. Continuar compra sin usuario, completar formulario:

## ![](https://res.cloudinary.com/carlo1112/image/upload/v1639679447/sonidocodeado-paginaejemplo/05_n9sj4l.png)

### 6. Si no hay productos en el carrito:

## ![](https://res.cloudinary.com/carlo1112/image/upload/v1639679449/sonidocodeado-paginaejemplo/06_nsrxoe.png)

### 7. Carrito de compras vacío

## ![](https://res.cloudinary.com/carlo1112/image/upload/v1639679453/sonidocodeado-paginaejemplo/07_ll97i6.png)

### 8. Ingreso de usuarios

## ![](https://res.cloudinary.com/carlo1112/image/upload/v1639679454/sonidocodeado-paginaejemplo/08_gg8dvm.png)

### 9. Creación de cuenta de usuario

## ![](https://res.cloudinary.com/carlo1112/image/upload/v1639679463/sonidocodeado-paginaejemplo/09_a6fgvz.png)


# *Descripción de funcionamiento del sitio*

Ecommerse de productos de sonido profesional.
Al ingresar el sitio, se muestra un listado de productos en los cuales se puede acceder a cada uno, seleccionar una cantidad y agregar al carrito de compras. Se puede seguir agregando productos al carrito retornando al inicio o accediendo a categorias o marcas
Una vez seleccionados los productos, se puede dirigir al carrito de compras para finalizar la misma. 
Dentro del carrito, se listan los productos incorporados, pudiendose eliminar alguno o todos, y se puede continuar con la compra, creando un usuario, o completando los datos de un formularo. 

# *Componentes:*

## 1. *Cart*
## 2. *CartItem*
## 3. *CartWidget*
## 4. *Contact*
## 5. *CartContext*
## 6. *AuthContext*
## 7. *Faq*
## 8. *Firebase*
## 9. *Footer*
## 10. *FormCart*
## 11. *ItemCount*
## 12. *ItemDetailContainer*
## 13. *ItemDetail*
## 14. *ItemListContainer*
## 15. *ItemList*
## 16. *Item*
## 17. *Loadin*
## 18. *Login*
## 19. *Main*
## 20. *Modals*
## 21. *ModalsConfirm*
## 22. *NavBar*
## 23. *Register*
## 24. *UserNav*
#

# Importante: para descargar y usar el proyecto

### Seguir los siguientes pasos:

- Clonar _'Sonido Codeado'_ repository from GitHub. Abrir la terminal y tipear:

  ```bash
  git clone https://github.com/carlo1112/coderhouse-ecommerce-react
  ```
- cd dentro del directorio de la carpeta y tipear:

  ```bash
  npm install
  ```
  Esto instala las dependencias necesarias.

- Para correr el proyecto:

  ```bash
  npm start
  ```