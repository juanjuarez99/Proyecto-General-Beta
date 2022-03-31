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
				<label>Precio: </label>
				<input v-model="precio" type="number" />
			</div>
			<div>
				<label>Categoria: </label>
				<select v-model="categoria">
					<option
						v-for="categoria in categorias"
						:value="categoria.id"
						:key="categoria.id"
					>
						{{ categoria.nombre }}
					</option>
				</select>
			</div>
			<div>
				<label>Stock: </label>
				<input type="number" v-model="stock" />
			</div>
			<div>
				<label>Imagen:</label>
				<input v-model="imagen" />
			</div>
			<input type="submit" value="Añadir" />
			<button @click="cancelar">Cancelar</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "AnadirProducto",
	data: () => ({
		nombre: "",
		stock: "",
		categoria: "",
		imagen: "",
		precio: "",
		id: "",
		categorias: [],
	}),
	methods: {
		async anadir() {
			const respuesta = await fetch(`/api/v1/productos`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre: this.nombre,
					stock: this.stock,
					categoria: this.categoria,
					imagen: this.imagen,
					precio: this.precio,
					id: this.id,
				}),
			});
			if (respuesta.ok) {
				this.$router.push("/administracion/productos");
			}
		},
		cancelar() {
			this.$router.push("/administracion/productos");
		},
	},
	mounted,
};

async function mounted() {
	try {
		const r2 = await fetch(`api/v1/categorias`);
		if (r2.ok) {
			const categorias = await r2.json();
			this.categorias = categorias;
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
