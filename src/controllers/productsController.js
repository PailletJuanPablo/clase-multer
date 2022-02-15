const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// 1) Obtener listado de productos
		// 2) Encontrar un producto en base a su id
		// 3) Retornar vista con los datos de ese producto

		const productIdToFind = req.params.productId;
		const product = products.find((p) => p.id == productIdToFind);

		return res.render('detail', { product, titulo: 'Detalle del producto' })


	},

	// Create - Form to create
	create: (req, res) => {
		return res.render('product-create-form')
	},

	// Create -  Method to store
	store: (req, res) => {
		// req.file es una nueva clave que multer le agrega al objeto req 
		// con todos los datos resultantes de procesar el archivo

		// Pushear al array de productos existente un nuevo producto
		// Un nuevo objeto literal

		// Convertir price a número
		// Agregarle ID e Image
		const productToCreate = req.body;
		// Number('123') = 123;
		productToCreate.price = Number(productToCreate.price);
		productToCreate.image = req.file.filename;
		if (productToCreate.discount == '') {
			productToCreate.discount = 0;
		} else {
			productToCreate.discount = Number(productToCreate.discount);
		}


		productToCreate.id = this.asignarIdAProducto(productToCreate);

		// Agregar un elemento a un array 
		// Método Push
		// Array.push(nuevoElemento)
		products.push(productToCreate);

		this.guardarProductos()
		// Guardar el archivo json con el nuevo array


		return res.send(products)


		// Guardar en base de datos
		// En el archivo .json
		// fs.writeFileSync(nuevosProductos)


		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
	},
	guardarProductos() {
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
	},
	asignarIdAProducto(productToCreate) {
		return products.length + 1;
	}
};

module.exports = controller;