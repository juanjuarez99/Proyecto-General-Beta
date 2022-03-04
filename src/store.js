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
				console.log(indice);
				this.carrito.splice(indice, 1);
			},
		},
	},
	usuarios: [
		{
			id: "000",
			nombre: "Juan",
			contrasena: "1234",
			genero: "M",
			edad: 23,
			tipo: "Administrador",
			foto: "https://source.unsplash.com/random/100x100",
		},
		{
			id: "001",
			nombre: "Manuel",
			contrasena: "1234",
			genero: "M",
			edad: 26,
			tipo: "Usuario",
			foto: "https://source.unsplash.com/random/101x101",
		},
		{
			id: "002",
			nombre: "Morena",
			contrasena: "1234",
			genero: "F",
			edad: 24,
			tipo: "Usuario",
			foto: "https://source.unsplash.com/random/102x102",
		},
	],
	categorias: [
		{
			id: "000",
			nombre: "Bebidas Calientes",
			imagen: "https://source.unsplash.com/random/105x105",
		},
		{
			id: "001",
			nombre: "Bebidas Frías",
			imagen: "https://source.unsplash.com/random/107x107",
		},
		{
			id: "002",
			nombre: "Postres",
			imagen: "https://source.unsplash.com/random/106x106",
		},
	],
	productos: [
		{
			id: "000",
			nombre: "Café",
			precio: 15.0,
			stock: 10,
			categoria: "000",
			imagen: "https://source.unsplash.com/random/99x99",
		},
		{
			id: "001",
			nombre: "Té",
			precio: 10.0,
			stock: 15,
			categoria: "000",
			imagen: "https://source.unsplash.com/random/98x98",
		},
		{
			id: "002",
			nombre: "Té helado",
			precio: 15.0,
			stock: 25,
			categoria: "001",
			imagen: "https://source.unsplash.com/random/103x103",
		},
		{
			id: "003",
			nombre: "Hotcakes",
			precio: 45.0,
			stock: 5,
			categoria: "002",
			imagen: "https://source.unsplash.com/random/104x104",
		},
		{
			id: "004",
			nombre: "Hotcakes con chocolate",
			precio: 60.0,
			stock: 5,
			categoria: "002",
			imagen: "https://source.unsplash.com/random/104x104",
		},
	],
	ventas: [
		{
			id: "000",
			fecha: 1646136000000,
			usuario: "002",
			productos: ["000"],
		},
		{
			id: "001",
			fecha: 16461360000000,
			usuario: "001",
			productos: ["000", "001", "002"],
		},
	],
});
