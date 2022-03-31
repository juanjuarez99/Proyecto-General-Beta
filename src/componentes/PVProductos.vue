<template>
	<div>
		<h1 class="text-center">{{ nombreCategoria }}</h1>
		<div class="row row-cols-3 g-5 p-3">
			<div>
				<TarjetaProducto
					nombre="Volver"
					imagen="https://source.unsplash.com/random/100x100"
					@click="volver()"
				/>
			</div>
			<div v-for="producto in productos" :key="producto.id">
				<TarjetaProducto
					:nombre="producto.nombre"
					:imagen="producto.imagen"
					:precio="producto.precio"
					@click="anadir(producto.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { store } from "@/store.js";

import TarjetaProducto from "./TarjetaProducto";

export default {
	name: "PVProductos",
	props: ["categoria"],
	data: () => ({
		productos: [],
	}),
	computed: {
		nombreCategoria() {
			return store.categorias.filter((c) => c.id === this.categoria)
				? store.categorias.filter((c) => c.id === this.categoria)[0].nombre
				: "";
		},
	},
	methods: {
		volver() {
			store.app.puntoventa.cambiaVista("categorias");
		},
		anadir(id) {
			store.app.puntoventa.anadirACarrito(id);
		},
	},
	components: {
		TarjetaProducto,
	},
	mounted,
};

async function mounted() {
	try {
		const respuesta = await fetch(
			`/api/v1/categorias/${this.categoria}/productos`
		);
		if (respuesta.ok) {
			const valores = await respuesta.json();
			this.productos = valores;
		} else {
			this.mensaje = "Ocurrió un error al conectar con la base de datos";
			return;
		}
	} catch (err) {
		this.mensaje = "Ocurrió un error al conectar con la base de datos";
		return;
	}
}
</script>

<style scoped lang="scss"></style>
