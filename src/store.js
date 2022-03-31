//Datos de Prueba
import { reactive } from "vue";

export const store = reactive({
	app: {
		admin: {
			seleccion: "inicio",
			cambiaSeleccion(seleccion) {
				this.seleccion = seleccion;
			},
		},
		puntoventa: {
			vista: "categorias",
			cambiaVista(vista) {
				this.vista = vista;
			},
			carrito: [],
			anadirACarrito(id) {
				this.carrito.push(id);
			},
			quitarDeCarrito(indice) {
				this.carrito.splice(indice, 1);
			},
		},
	},
	usuarios: [],
	categorias: [],
	anadirCategorias(categorias) {
		this.categorias = categorias;
	},
	productos: [],
	ventas: [],
});
