<template>
	<div class="h-100 d-flex flex-column">
		<Encabezado titulo="Punto de venta" />
		<router-view class="flex-grow-1" />
	</div>
</template>

<script>
import Encabezado from "../componentes/Encabezado";

export default {
	name: "VistaPuntoVenta",
	components: {
		Encabezado,
	},
};
</script>

<style scoped lang="scss"></style>
