### Pandora Backpacks 🎒


Descripción:  
Pandora Mochilas es un ecommerce simulado de mochilas desarrollado en React. Presenta un formulario de contacto cuyos datos se persisten en Firestore y el proceso de pago está integrado con MercadoPago.

### Visitar sitio web 🌐
https://www.pandorabackpacks.online

### Características Principales:
* E-Commerce Completo: Experiencia integral de compra con carrito de compras.
* Integración con MercadoPago: Proceso de pago integrado con MercadoPago, con credenciales de prueba para testear.
* Formulario de Orden Personalizada: El usuario puede proporcionar datos a través de un formulario. Estos datos, junto con la orden de compra, son persistidos en Firestore, permitiendo al vendedor contactarse posteriormente para completar la transacción.
* Experiencia de Usuario Optimizada: Atención especial en garantizar que nunca se muestren imágenes en proceso de carga o contenido desordenado. Un spinner aparece hasta que todo el contenido esté completamente cargado y renderizado.
* Persistencia de Carrito: Los productos añadidos al carrito se almacenan en un contexto global y en el local storage. Esto asegura que el carrito se recupere incluso después de cerrar el navegador.
* Servidor con NodeJS: Desarrollado para interactuar con la API de MercadoPago, implementado en una instancia EC2 de AWS.
* Persistencia de Datos en Firestore: Los datos del formulario de contacto y la información de la orden de compra son almacenados en Firestore.


### Tecnologías y Dependencias 📦
React 18.2
react-router-dom
Firebase (Firestore)
Bootstrap
react-icons
uuid
sweetalert2
react-copy-to-clipboard


### Instalación y Uso 🚀
Clonar el repositorio:
* git clone https://github.com/estebanaltamura/pandoraBackpacks.git

* Navegar al directorio del proyecto:
cd pandoraBackpacks

* Instalar las dependencias:
npm install

* Ejecutar en modo desarrollo:
npm start

Nota: La aplicación debería abrirse en tu navegador predeterminado en la dirección http://localhost:3000/

Licencia 📜
Este proyecto se encuentra bajo la licencia MIT.