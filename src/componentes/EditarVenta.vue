<template>
	<div class="container p-2">
		<div>
			<label>Fecha y Hora: </label>
			<input v-model="fecha" type="datetime-local" disabled />
		</div>
		<div>
			<label>Usuario: </label>
			<input v-model="usuario" />
		</div>
		<div>
			<label>Productos: </label>
			<div>
				<div
					v-for="(producto, i) in productosActuales"
					:key="i"
					class="d-flex w-25 justify-content-between"
				>
					<div>
						{{ producto.nombre }}
					</div>
					<div>${{ producto.precio }}</div>
					<button @click="borrar(i)">Borrar</button>
				</div>
			</div>
		</div>
		<button @click="editar">Editar</button>
		<button @click="cancelar">Cancelar</button>
	</div>
</template>

<script>
export default {
	name: "EditarVenta",
	data: () => ({
		usuario: "",
		fecha: "",
		productos: [],
		id: "",
		productosDisponibles: [],
	}),
	computed: {
		productosActuales() {
			return this.productosDisponibles.filter((pd) => {
				let contiene = false;
				this.productos.forEach((p) => {
					if (p.id === pd.id) {
						contiene = true;
					}
				});
				return contiene;
			});
		},
	},
	methods: {
		borrar(i) {
			this.productos.splice(i, 1);
		},
		async editar() {
			const respuesta = await fetch(`/api/v1/ventas/${this.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre: this.nombre,
					fecha: this.fecha,
					productos: this.productos,
					id: this.id,
				}),
			});
			if (respuesta.ok) {
				this.$router.push("/administracion/ventas");
			}
		},
		cancelar() {
			this.$router.push("/administracion/ventas");
		},
	},
	mounted,
};

async function mounted() {
	try {
		const respuesta = await fetch(`/api/v1/ventas/${this.$route.params.id}`);
		const valores = await respuesta.json();
		this.id = valores.id;
		this.usuario = valores.usuario;
		this.fecha = valores.fecha;
		this.productos = valores.productos;
		const r2 = await fetch(`/api/v1/productos`);
		if (r2.ok) {
			this.productosDisponibles = await r2.json();
		}
	} catch (_) {
		this.mensaje = "Ocurrió un error al conectar con la base de datos";
	}
}
</script>

<style lang="scss"></style>
<style lang="scss"></style>
