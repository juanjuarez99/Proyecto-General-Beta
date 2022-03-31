<template>
	<div>
		<h1 class="text-center">Categorias</h1>
		<div class="row row-cols-3 g-5 p-3">
			<div v-if="tipoUsuario == 'Administrador'">
				<TarjetaCategoria
					nombre="Volver"
					imagen="https://source.unsplash.com/random/100x100"
					@click="volver()"
				/>
			</div>
			<div v-for="categoria in categorias" :key="categoria.id">
				<TarjetaCategoria
					:nombre="categoria.nombre"
					:imagen="categoria.imagen"
					@click="cambiaVista(categoria.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { store } from "@/store.js";

import TarjetaCategoria from "./TarjetaCategoria";

export default {
	name: "PVCategorias",
	components: {
		TarjetaCategoria,
	},
	data: () => ({
		categorias: [],
		tipoUsuario: store.app.usuario.tipo,
	}),
	methods: {
		cambiaVista(vista) {
			store.app.puntoventa.cambiaVista(vista);
		},
		volver() {
			this.$router.push("/administracion");
		},
	},
	mounted,
};

async function mounted() {
	try {
		const r2 = await fetch("/api/v1/categorias");
		if (r2.ok) {
			const categorias = await r2.json();
			store.anadirCategorias(categorias);
			const respuesta = await fetch(`/api/v1/categorias`);
			if (respuesta.ok) {
				const valores = await respuesta.json();
				this.categorias = valores;
			}
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
