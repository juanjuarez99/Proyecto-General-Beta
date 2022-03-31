<template>
	<div class="container p-2">
		<form @submit="anadir">
			<div>
				<label>ID: </label>
				<input v-model="id" required />
			</div>
			<div>
				<label>Nombre: </label>
				<input v-model="nombre" />
			</div>
			<div>
				<label>Contraseña: </label>
				<input v-model="contrasena" type="password" />
			</div>
			<div>
				<label>Género: </label>
				<select v-model="genero">
					<option value="M">M</option>
					<option value="F">F</option>
				</select>
			</div>
			<div>
				<label>Edad: </label>
				<input type="number" v-model="edad" />
			</div>
			<div>
				<label>Tipo:</label>
				<select v-model="tipo">
					<option value="Administrador">Administrador</option>
					<option value="Usuario">Usuario</option>
				</select>
			</div>
			<input type="sumbit" value="Añadir" />
			<button @click="cancelar">Cancelar</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "AnadirUsuario",
	data: () => ({
		nombre: "",
		genero: "",
		edad: "",
		contrasena: "",
		tipo: "",
		id: "",
	}),
	methods: {
		async anadir() {
			const respuesta = await fetch(`/api/v1/usuarios`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre: this.nombre,
					genero: this.genero,
					contrasena: this.contrasena,
					edad: this.edad,
					tipo: this.tipo,
					id: this.id,
				}),
			});
			if (respuesta.ok) {
				this.$router.push("/administracion/usuarios");
			}
		},
		cancelar() {
			this.$router.push("/administracion/usuarios");
		},
	},
};
</script>

<style lang="scss"></style>
<style lang="scss"></style>
