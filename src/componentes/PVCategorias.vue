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
	props: ["categorias"],
	components: {
		TarjetaCategoria,
	},
	methods: {
		cambiaVista(vista) {
			store.app.puntoventa.cambiaVista(vista);
		},
	},
};
</script>

<style scoped lang="scss"></style>
