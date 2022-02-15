# Multer

1. npm i multer
2. const multer = require('multer');
3. Configurar el storage e instanciar esta configuración con multer({storage: constante donde se configuró})
4. Agregamos a las rutas que deseemos instanciaMulter.single('campo'). Donde campo es el name del input del formulario que contendrá el archivo
   <input name="campo" type="file" >
