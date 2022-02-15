// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

// Configurar la lógica para almacenar archivos
const storage = multer.diskStorage({
    // Carpeta destino del archivo
    destination: function (req, file, cb) {
        cb(null, path.resolve('public/images/products'));
    },
    filename: function (req, file, cb) {
        // Nombre del archivo
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

// Crear una instancia de multer con esa lógica
// clase( parametros )
const upload = multer({ storage: storage });

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);
router.post('/', upload.single('image'), productsController.store);

/*** GET ONE PRODUCT ***/
router.get('/:productId/', productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', productsController.edit);
router.put('/:id', productsController.update);


/*** DELETE ONE PRODUCT***/
router.delete('/:id', productsController.destroy);


module.exports = router;
