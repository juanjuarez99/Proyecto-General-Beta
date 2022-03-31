import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import VistaInicio from "../vistas/VistaInicio.vue";
import VistaPuntoVenta from "../vistas/VistaPuntoVenta.vue";
import VistaAdministracion from "../vistas/VistaAdministracion.vue";
import VistaCobrar from "../vistas/VistaCobrar.vue";

import PuntoVenta from "../componentes/PuntoVenta.vue";
import PanelAdministracion from "../componentes/PanelAdministracion.vue";

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
		],
	},
	{
		path: "/cobrar",
		name: "Cobrar",
		component: VistaCobrar,
	},
];

const router = createRouter({
//	history: createWebHistory(process.env.BASE_URL),
	history: createWebHashHistory(),
	routes: rutas,
});

export default router;
