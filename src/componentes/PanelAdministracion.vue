<template>
	<div>
		<PAInicio v-if="seleccion === 'inicio'" />
		<PAListado v-if="seleccion === 'usuarios'" :cat="seleccion" />
		<PAListado v-if="seleccion === 'categorias'" :cat="seleccion" />
		<PAListado v-if="seleccion === 'productos'" :cat="seleccion" />
		<PAListado v-if="seleccion === 'ventas'" :cat="seleccion" />
	</div>
</template>

<script>
import { store } from "@/store.js";

import PAInicio from "./PAInicio";
import PAListado from "./PAListado";

export default {
	name: "PanelAdministracion",
	components: {
		PAInicio,
		PAListado,
	},
	computed: {
		seleccion() {
			return store.app.admin.seleccion;
		},
	},
};
</script>

<style scoped lang="scss"></style>
