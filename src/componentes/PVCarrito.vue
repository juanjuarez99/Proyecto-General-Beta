<template>
	<div class="border-start h-100 p-2 d-flex flex-column">
		<h2 class="text-center">Carrito</h2>
		<div class="flex-grow-1">
			<div
				v-for="(producto, i) in productos"
				:key="i"
				class="row gx-0 producto-carrito"
			>
				<div class="col">{{ producto.nombre }}</div>
				<div class="col-3">${{ producto.precio }}</div>
				<div class="col-1 boton-quitar" @click="quitar(i)">X</div>
			</div>
		</div>
		<div v-if="total">
			{{ total }}
			<br />
			<button class="btn btn-success" @click="CobrarProductos">
				Realizar compra
			</button>
		</div>
	</div>
</template>

<script>
import { store } from "@/store.js";
import $ from "jquery";

export default {
	name: "PVCarrito",
	data: () => ({
		productosDisponibles: [],
	}),
	computed: {
		productos() {
			return store.app.puntoventa.carrito.map(
				(p) =>
					this.productosDisponibles.filter((producto) => producto.id === p)[0]
			);
		},
		total() {
			const t = this.productos.reduce((actual, anterior) => {
				return actual + anterior.precio;
			}, 0);
			return t > 0 ? `TOTAL: $${t}` : "";
		},
	},
	methods: {
		quitar(i) {
			store.app.puntoventa.quitarDeCarrito(i);
		},
		CobrarProductos() {
			this.$router.push("/cobrar");
		},
	},
	mounted,
	updated: function () {
		$(".producto-carrito").hide().show("slow").removeClass("producto-carrito");
	},
};

async function mounted() {
	try {
		const respuesta = await fetch(`/api/v1/productos`);
		if (respuesta.ok) {
			const valores = await respuesta.json();
			this.productosDisponibles = valores;
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

<style scoped lang="scss">
.boton-quitar {
	font-weight: bold;
	color: red;
	cursor: pointer;
}
</style>
