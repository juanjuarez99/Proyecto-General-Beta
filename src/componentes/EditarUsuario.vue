<template>
	<div class="container p-2">
		<div>
			<label>Nombre: </label>
			<input v-model="nombre" />
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
		<button @click="editar">Editar</button>
		<button @click="cancelar">Cancelar</button>
	</div>
</template>

<script>
export default {
	name: "EditarUsuario",
	data: () => ({
		nombre: "",
		genero: "",
		edad: "",
		tipo: "",
		id: "",
	}),
	methods: {
		async editar() {
			const respuesta = await fetch(`/api/v1/usuarios/${this.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre: this.nombre,
					genero: this.genero,
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
	mounted,
};

async function mounted() {
	const respuesta = await fetch(`/api/v1/usuarios/${this.$route.params.id}`);
	if (respuesta.ok) {
		const valores = await respuesta.json();
		this.id = valores.id;
		this.nombre = valores.nombre;
		this.genero = valores.genero;
		this.edad = valores.edad;
		this.tipo = valores.tipo;
	} else {
		this.mensaje = "Ocurrió un error al conectar con la base de datos";
		return;
	}
}
</script>

<style lang="scss"></style>
<style lang="scss"></style>
