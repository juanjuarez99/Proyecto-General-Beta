<template>
	<div class="row">
		<div class="col-9">
			<PVCategorias v-if="vista == 'categorias'" :categorias="categorias" />
			<PVProductos v-else :categoria="vista" />
		</div>
		<div class="col-3">
			<PVCarrito />
		</div>
	</div>
</template>

<script>
import { store } from "@/store.js";

import PVCategorias from "./PVCategorias";
import PVProductos from "./PVProductos";
import PVCarrito from "./PVCarrito";

export default {
	name: "VistaPuntoVenta",
	data: () => ({
		categorias: store.categorias,
		productos: store.productos,
	}),
	computed: {
		vista() {
			return store.app.puntoventa.vista;
		},
	},
	components: {
		PVCategorias,
		PVProductos,
		PVCarrito,
	},
};
</script>

<style scoped lang="scss"></style>
