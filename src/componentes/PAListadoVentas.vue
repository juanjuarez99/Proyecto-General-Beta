<template>
	<div class="container p-2">
		<div class="row p-2">
			<div class="col-2">
				<button class="btn btn-primary" @click="volver">Volver</button>
			</div>
			<h1 class="col">{{ titulo }}</h1>
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
							<span v-if="key != 'fecha'">
								{{ valor[key] }}
							</span>
							<span v-else>
								{{ new Date(valor[key]).toLocaleString() }}
							</span>
						</td>
						<td>
							<button class="btn btn-primary" @click="editar(valor.id)">
								Editar
							</button>
							<button class="btn btn-danger" @click="borrar(valor.id)">
								Borrar
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: "PAListadoVentas",
	data: () => ({
		valores: [],
		titulo: "Ventas",
		keys: ["id", "usuario", "fecha", "productos"],
	}),
	methods: {
		volver() {
			this.$router.push("/administracion");
		},
		async borrar(id) {
			await fetch(`/api/v1/ventas/${id}`, {
				method: "DELETE",
			});
			this.$router.go();
		},
		editar(id) {
			this.$router.push(`/administracion/editarVenta/${id}`);
		},
	},
	mounted,
};

async function mounted() {
	try {
		const respuesta = await fetch(`/api/v1/ventas`);
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

<style scoped lang="scss"></style>
