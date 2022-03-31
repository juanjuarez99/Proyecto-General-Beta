import { createRouter, createWebHashHistory } from "vue-router";

import VistaInicio from "../vistas/VistaInicio.vue";
import VistaPuntoVenta from "../vistas/VistaPuntoVenta.vue";
import VistaAdministracion from "../vistas/VistaAdministracion.vue";

import PuntoVenta from "../componentes/PuntoVenta.vue";
import PanelAdministracion from "../componentes/PanelAdministracion.vue";
import PAListadoCategorias from "../componentes/PAListadoCategorias.vue";
import PAListadoProductos from "../componentes/PAListadoProductos.vue";
import PAListadoUsuarios from "../componentes/PAListadoUsuarios.vue";
import PAListadoVentas from "../componentes/PAListadoVentas.vue";

import EditarUsuario from "../componentes/EditarUsuario.vue";
import AnadirUsuario from "../componentes/AnadirUsuario.vue";

const rutas = [
	{
		path: "/",
		name: "Inicio",
		component: VistaInicio,
	},
	{
		path: "/puntodeventa",
		name: "Punto de Venta",
		component: VistaPuntoVenta,
		children: [
			{
				path: "",
				component: PuntoVenta,
			},
		],
	},
	{
		path: "/administracion",
		name: "Administracion",
		component: VistaAdministracion,
		children: [
			{
				path: "",
				component: PanelAdministracion,
			},
			{
				path: "usuarios",
				component: PAListadoUsuarios,
			},
			{
				path: "categorias",
				component: PAListadoCategorias,
			},
			{
				path: "productos",
				component: PAListadoProductos,
			},
			{
				path: "ventas",
				component: PAListadoVentas,
			},
			{
				path: "editarUsuario/:id",
				component: EditarUsuario,
			},
			{
				path: "anadirUsuario",
				component: AnadirUsuario,
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: rutas,
});

export default router;
