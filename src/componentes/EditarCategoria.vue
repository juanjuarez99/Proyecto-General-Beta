<template>
	<div class="container p-2">
		<div>
			<label>Nombre: </label>
			<input v-model="nombre" />
		</div>
		<button @click="editar">Editar</button>
		<button @click="cancelar">Cancelar</button>
	</div>
</template>

<script>
export default {
	name: "EditarCategoria",
	data: () => ({
		nombre: "",
		id: "",
	}),
	methods: {
		async editar() {
			const respuesta = await fetch(`/api/v1/categorias/${this.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre: this.nombre,
					id: this.id,
				}),
			});
			if (respuesta.ok) {
				this.$router.push("/administracion/categorias");
			}
		},
		cancelar() {
			this.$router.push("/administracion/categorias");
		},
	},
	mounted,
};

async function mounted() {
	try {
		const respuesta = await fetch(
			`/api/v1/categorias/${this.$route.params.id}`
		);
		if (respuesta.ok) {
			const valores = await respuesta.json();
			this.id = valores.id;
			this.nombre = valores.nombre;
		} else {
			this.mensaje = "Ocurrió un error al conectar con la base de datos";
			return;
		}
	} catch (_) {
		this.mensaje = "Ocurrió un error al conectar con la base de datos";
	}
}
</script>

<style lang="scss"></style>
<style lang="scss"></style>
