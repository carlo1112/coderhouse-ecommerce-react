# Proyecto en desarrollo por Carlos Cattaneo 
Realizado en curso de React JS de CoderHouse, comisión 16975

## Versión subida a surge: [https://sonidocodeado.surge.sh/]

## Para este proyecto (Sonido Codeado) se incorporó:

### React-Bootstrap: [https://react-bootstrap.github.io/]
### Instalación:
`npm install bootstrap react-bootstrap` 
`import 'bootstrap/dist/css/bootstrap.min.css'`

### Fontawesome: [https://fontawesome.com/]
### Instalación:
`npm i --save @fortawesome/fontawesome-svg-core`
`npm install --save @fortawesome/free-solid-svg-icons`
`npm install --save @fortawesome/react-fontawesome`
`npm install --save @fortawesome/free-brands-svg-icons`


### React-Router: [https://v5.reactrouter.com/web/]
### Instalación: 
`npm install react-router-dom` 

### Firebase [https://firebase.google.com/]
### Instalación `npm install firebase@9.6.0`

### ###############################################

# **Sonido Codeado, Ecommerce - React.js**
# *Curso de React JS de CoderHouse*
### **Desarrollo por Carlos Cattaneo**
[![Contact Me]](mailto:carlo1112@gmail.com)
[![LinkedId]](https://www.linkedin.com/in/carlo1112/)
[![GitHub Profile](https://github.com/carlo1112)

# *Información del proyecto:*

Proyecto final para el curso de React.js de [CoderHouse](https://www.coderhouse.com).
Consiste en un ecommerce implementado con React.js junto a React Router, React Hooks, React-Bootstrap y Firebase.

## *Version 1.0.0:*
- [![App](https://sonidocodeado.surge.sh/)

- Se usa como base de datos Firestore
## *Desarrollado con:*

- [Visual Studio Code](https://code.visualstudio.com/)
- [React](https://reactjs.org/)
- [Create react app](https://create-react-app.dev/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React-Router](https://v5.reactrouter.com/web/)
- [Fontawesome](https://fontawesome.com/)

<!-- # *Sobre el flujo de compra:*

- [![Gif](https://img.shields.io/badge/Gif-informational?style=for-the-badge&logoColor=fff&color=23272d)](public/flujo-compra.gif)


**Screenshots:**

### 1. Home:
## ![](public/images/flujo-compra/home.png)

### 2. Detalle del producto seleccionado:

## ![](public/images/flujo-compra/detalle-producto.png)

### 3. Carrito de compras, con productos seleccionados:

## ![](public/images/flujo-compra/carrito-compra.png)

### 4. Carrito de compras, con productos y formulario completo:

## ![](public/images/flujo-compra/carrito-compra-final.png)
### 5. Fin de la compra y mensaje al usuario:

## ![](public/images/flujo-compra/carrito-compra-final-mensaje.png)

### 6. Si no hay productos en el carrito:

## ![](public/images/flujo-compra/carrito-vacio.png)
# *Flujo de Compra - Descripción*
  
Para poder comprar uno o más productos, se debe seleccionar desde el Home, en la galería de productos, "COMPRAR" A partir de ahí, ya en la vista de detalle del producto, se debe seleccionar su cantidad para añadirlo al carrito. Para que se habilite el botón de agregar al carrito, debe haber al menos un producto seleccionado. No se permite restar unidades inferiores a cero ni tampoco superar el stock disponible.
Para agregar más productos al carrito, se puede volver al home para seguir sumando productos, que a la vez, de seleccionar el mismo, no se duplica en el carrito, sino que se agrega a la cantidad anteriormente seleccionada.
Una vez seleccionados los productos a comprar, el botón "Terminar compra" lleva al carrito con el o los productos seleccionados. De querer eliminar alguno, cada uno tiene su propio botón de eliminar. De querer eliminarlos todos, se encuentra el botón "Vaciar carrito", dejando el carrito vacío con el mensaje de aviso de que no hay productos en el carrito, y un botón para volver al home. No se permite la compra sin productos seleccionados. 
En el caso de haber agregado productos al carrito, con el fin de terminar la compra, se encuentra el botón de "Realizar compra", que se encuentra deshabilitado por defecto, hasta completar el formulario obligatario, a llenar por el cliente. Dichos datos se guardan en firestore, y una vez realizado este proceso, se vacía el carrito y se le devuelve al usuario un mensaje de agradecimiento, junto con su Id de compra y de que esta se ha realizado correctamente. -->

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