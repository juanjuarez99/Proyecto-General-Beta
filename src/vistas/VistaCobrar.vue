<template>
	<div>
		<Encabezado titulo="Cobrar" />
		<div class="">
			<h1 class="text-center m-3">Lista de Productos</h1>
			<div class="text-center w-25 m-auto">
				<div v-for="(producto, i) in productos" :key="i" class="d-flex">
					<div class="flex-grow-1 text-start">{{ producto.nombre }}</div>
					<div class="">${{ producto.precio }}</div>
				</div>
			</div>
			<div class="text-center m-auto pt-4" v-if="total">
				{{ total }}
				<br />
				<button class="btn btn-success m-4" @click="vender">
					Confirmar Compra
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Encabezado from "../componentes/Encabezado";
import { store } from "@/store.js";

export default {
	name: "VistaCobrar",
	data: () => ({ productosDisponibles: [] }),
	components: {
		Encabezado,
	},
	methods: {
		async vender() {
			const r2 = await fetch(`/api/v1/ventas`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: `${new Date().valueOf()}`,
					fecha: new Date().valueOf(),
					usuario: store.app.usuario.id,
					productos: this.productos.map((p) => ({
						id: p.id,
					})),
				}),
			});
			if (r2.ok) {
				for (let p of this.productos) {
					const respuesta = await fetch(`/api/v1/productos/${p.id}/dec`, {
						method: "PUT",
					});
				}
			}
			this.$router.push("/puntodeventa");
		},
	},
	computed: {
		productos() {
			return store.app.puntoventa.carrito.map((p) => {
				return this.productosDisponibles.filter(
					(producto) => producto.id === p
				)[0];
			});
		},
		total() {
			const t = this.productos.reduce((actual, anterior) => {
				return actual + anterior.precio;
			}, 0);
			if (t) {
				return t > 0 ? `TOTAL: $${t}` : "";
			} else {
				return "";
			}
		},
	},
	mounted,
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

<style scoped lang="scss"></style>
