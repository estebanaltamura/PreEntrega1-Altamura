# Pandora Mochilas
## Resumen

Pandora Mochilas es un ecommerce simulado de mochilas desarrollado en React que integra todos los procesos menos la integración con un medio de pago.

## Características
*Persiste los datos del carro de compras en el local storage para poder recuperar la información ante una recarga o cierre de la página. El evento que dispara la carga de datos al storage es el unload y en el load se descargan. Mientras la página está en uso con normalidad no se persisten los datos del carro en el storage. Si en un contexto global

*Se usaron métodos para que las imágenes no carguen una a una sino que el usuario vea las imágenes aparecer en un solo momento

*Mientras se espera que todo esté cargado para mostrarle al usuario se utilizaron estados loading para colocar un spinner en el proceso

*Hay un contexto global para los artículos agregados al carrito

*Las imágenes están hosteadas en un storage de imágenes

*Tanto los productos con todas sus características y rutas a recursos como las órdenes, se persisten en Firebase

*Se crearon dos escenarios para la finalización de una compra. El pago con tarjeta en el cual como última pantalla muestra el objeto que se le pasaría a MercadoPago en el caso que este proyecto hubiese montado un servidor y se hubiese integrado MercadoPago y la otra opción es una opción custom en el cual hay que dejar los datos para que el vendedor luego lo contacte, en el cual el ecommerce persiste en Firebase todos los productos de la transacción más los datos que completó el usuario en el formulario en una orden.

## Dependencias (ademas de las dependecias basicas de npx create-react-app en su version 18.2.0)
- React-router-dom: 6.8.1
- Firebase: 9.18.0
- React-bootstrap: 2.7.2
- React-icons: 4.7.1
- Sweetalert2: 11.7.3
- Sweetalert2-react-content: 5.0.7


## Instalación
* Clona el repositorio a tu máquina local
* Abre la carpeta del proyecto en tu terminal
* Ejecuta el comando npm install para instalar todas las dependencias
* Ejecuta el comando npm start para iniciar la aplicación

## Contribución
Las contribuciones son bienvenidas. Si quieres contribuir a este proyecto, por favor sigue los siguientes pasos:

* Haz un fork de este repositorio
* Crea una nueva rama (git checkout -b feature)
* Haz tus cambios y guarda las modificaciones (git commit -am 'Add some feature')
* Empuja los cambios a la rama (git push origin feature)
* Abre un pull request

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
