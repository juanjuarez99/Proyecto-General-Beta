<template>
	<div class="container p-2">
		<div>
			<label>Nombre: </label>
			<input v-model="nombre" />
		</div>
		<div>
			<label>Precio: </label>
			<input v-model="precio" type="number"/>
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
		<button @click="editar">Editar</button>
		<button @click="cancelar">Cancelar</button>
	</div>
</template>

<script>
export default {
	name: "EditarProducto",
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
		async editar() {
			const respuesta = await fetch(`/api/v1/productos/${this.id}`, {
				method: "PUT",
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
		const respuesta = await fetch(`/api/v1/productos/${this.$route.params.id}`);
		if (respuesta.ok) {
			const valores = await respuesta.json();
			this.id = valores.id;
			this.nombre = valores.nombre;
			this.stock = valores.stock;
			this.categoria = valores.categoria;
			this.imagen = valores.imagen;
			const r2 = await fetch(`api/v1/categorias`);
			if (r2.ok) {
				const categorias = await r2.json();
				this.categorias = categorias;
			}
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
