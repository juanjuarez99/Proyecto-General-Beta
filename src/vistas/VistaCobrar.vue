<template>
<div>
	<Encabezado titulo="Cobrar" />
	<div class="">
		<h1 class="text-center m-3">Lista de Productos</h1>
		<div class="text-center w-25 m-auto ">
			<div v-for="(producto, i) in productos" :key="i" class="d-flex">
				<div class="flex-grow-1 text-start">{{ producto.nombre }} </div>
				<div class="">${{ producto.precio }}</div>
			</div>
		</div>
		<div class="text-center m-auto pt-4" v-if="total">
			{{ total }}
			<br />
			<button class="btn btn-success m-4">Confirmar Compra</button>
		</div>

	</div>


	

</div>
</template>

<script>
import Encabezado from "../componentes/Encabezado";
import { store } from "@/store.js";



export default {
	name: "VistaCobrar",
	components: {
		Encabezado,
	},

	computed: {
		productos() {
			return store.app.puntoventa.carrito.map(
				(p) => store.productos.filter((producto) => producto.id === p)[0]
			);
		},
		total() {
			const t = this.productos.reduce((actual, anterior) => {
				return actual + anterior.precio;
			}, 0);
			return t > 0 ? `TOTAL: $${t}` : "";
		},
	},
	
};
</script>

<style scoped lang="scss"></style>
