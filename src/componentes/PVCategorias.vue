<template>
	<div>
		<h1 class="text-center">Categorias</h1>
		<div class="row row-cols-3 g-5 p-3">
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
	}),
	methods: {
		cambiaVista(vista) {
			store.app.puntoventa.cambiaVista(vista);
		},
	},
	mounted,
};

async function mounted() {
	try {
		const respuesta = await fetch(`/api/v1/categorias`);
		if (respuesta.ok) {
			const valores = await respuesta.json();
			this.categorias = valores;
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
