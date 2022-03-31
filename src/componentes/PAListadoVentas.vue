<template>
	<div class="container p-2">
		<div class="row p-2">
			<div class="col-2">
				<button class="btn btn-primary" @click="volver">Volver</button>
			</div>
			<h1 class="col">{{ titulo }}</h1>
			<div class="col-2">
				<button class="btn btn-success">Añadir nuevo</button>
			</div>
		</div>
		<div class="table-responsive">
			<table class="table table-striped table-hover table-sm">
				<thead>
					<tr class="table-dark">
						<th scope="col" v-for="(key, i) in keys" :key="i">{{ key }}</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="valor in valores" :key="valor.id">
						<td v-for="(key, i) in keys" :key="i">
							{{ valor[key] }}
						</td>
						<td>
							<button class="btn btn-primary">Editar</button>
							<button class="btn btn-danger">Borrar</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { store } from "@/store.js";

export default {
	name: "PAListado",
	props: ["cat"],
	data: () => ({
		seleccionado: null,
		valores: [],
	}),
	computed: {
		keys() {
			if (this.valores.length > 0) {
				return Object.keys(this.valores[0]).filter((v) => v != "_id");
			}
			return [];
		},
		titulo() {
			return this.cat.charAt(0).toUpperCase() + this.cat.slice(1);
		},
	},
	methods: {
		volver() {
			store.app.admin.cambiaSeleccion("inicio");
		},
	},
	mounted,
};

async function mounted() {
	try {
		const respuesta = await fetch(`/api/v1/${this.cat}`);
		if (respuesta.ok) {
			const valores = await respuesta.json();
			this.valores = valores;
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
tbody > tr {
	cursor: pointer;
}
</style>
