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
					v-if="producto.stock > 0"
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
		categorias: [],
	}),
	computed: {
		nombreCategoria() {
			return this.categorias.filter((c) => c.id === this.categoria)
				? this.categorias.filter((c) => c.id === this.categoria)[0].nombre
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
			const r2 = await fetch("/api/v1/categorias");
			if (r2.ok) {
				const cat = await r2.json();
				this.categorias = cat;
			}
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
