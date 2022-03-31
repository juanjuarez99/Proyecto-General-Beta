<template>
	<div class="container p-2">
		<form @submit="anadir">
			<div>
				<label>Id: </label>
				<input v-model="id" required />
			</div>
			<div>
				<label>Nombre: </label>
				<input v-model="nombre" />
			</div>
			<div>
				<label>Imagen: </label>
				<input v-model="imagen" />
			</div>
			<input type="submit" value="Añadir" />
			<button @click="cancelar">Cancelar</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "AnadirCategoria",
	data: () => ({
		nombre: "",
		imagen: "",
		id: "",
	}),
	methods: {
		async anadir() {
			const respuesta = await fetch(`/api/v1/categorias`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre: this.nombre,
					imagen: this.imagen,
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
};
</script>

<style lang="scss"></style>
<style lang="scss"></style>
