//Datos de Prueba
import { reactive } from "vue";

export const store = reactive({
	app: {
		usuario: {
			tipo: "",
			id: "",
			cambiarTipo(tipo) {
				this.tipo = tipo;
			},
			cambiarId(id) {
				this.id = id;
			},
		},
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
