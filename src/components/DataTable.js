import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';

const baseUrl = "http://localhost:4000/pedidos"

function DataTable() {

	const [data, setData] = useState([])

	const peticionGet = async()=>{
		await axios.get(baseUrl)
		.then(response => {
			setData(response.data);
		})
	}

	useEffect(() => {
		peticionGet();
	}, [])

	const columnas = [
		//{ title: 'segmento', field: 'segmento' },
		{ title: 'cliente', field: 'cliente' },
		{ title: 'razon_social', field: 'razon_social' },
		{ title: 'guia_despacho', field: 'guia_despacho' },
		{ title: 'obra_oc', field: 'obra_oc' },
		{ title: 'fecha', field: 'fecha' },
		{ title: 'pedido', field: 'pedido' },
		//{ title: 'tren_pedido', field: 'tren_pedido' },
		//{ title: 'posicion_en_tren', field: 'posicion_en_tren' },
		//{ title: 'producto_codigo', field: 'producto_codigo' },
		//{ title: 'producto', field: 'producto' },
		//{ title: 'm3', field: 'm3' },
		//{ title: 'planta', field: 'planta' },
		//{ title: 'hora_solicitada_cliente_primer_despacho_de_tren', field: 'hora_solicitada_cliente_primer_despacho_de_tren' },
		//{ title: 'espaciamiento', field: 'espaciamiento' },
		//{ title: 'hora_solicitada_cliente_original', field: 'hora_solicitada_cliente_original' },
		{ title: 'hora_solicitada_cliente_corregida', field: 'hora_solicitada_cliente_corregida' },
		// { title: 'tiempo_ida_vuelta_proyectado', field: 'tiempo_ida_vuelta_proyectado' },
		// { title: 'tiempo_viaje_vuelta_proyectado', field: 'tiempo_viaje_vuelta_proyectado' },
		// { title: 'hora_tiquete', field: 'hora_tiquete' },
		// { title: 'hora_de_carga', field: 'hora_de_carga' },
		// { title: 'hora_fin_de_carga', field: 'hora_fin_de_carga' },
		// { title: 'hora_salida_de_planta', field: 'hora_salida_de_planta' },
		{ title: 'hora_llegada_a_obra', field: 'hora_llegada_a_obra' },
		{ title: 'puntualidad', field: 'puntualidad', lookup: { true: 'Si', false: 'No' } },
		{ title: 'estimada', field: 'estimada' },
		//{ title: 'hora_inicio_descarga', field: 'hora_inicio_descarga' },
		{ title: 'hora_vuelta_a_planta', field: 'hora_vuelta_a_planta' },
		{ title: 'real', field: 'real' },
		{ title: 'adicionales', field: 'adicionales' },
		//{ title: 'hora_llegada_a_planta', field: 'hora_llegada_a_planta' },
		{ title: 'tramos', field: 'tramos' },
		{ title: 'monto', field: 'monto' }
	]

	return(
		<div className = "DataTable">
			<MaterialTable
				columns = {columnas}
				data = {data}
				title = 'Análisis Sobrestadía'
				options={{
					filtering: true
				}}
			/>
		</div>
	)
}

//   return (
//     <div>
//     <MaterialTable
//     title="Basic Filtering Preview"
//     columns={[
//       { title: 'Name', field: 'name' },
//       { title: 'Surname', field: 'surname' },
//       { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//       { title: 'Birth Place', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//       },
//     ]}
//     options={{
//       filtering: true
//     }}
//     />
//     </div>
//   );
// }

export default DataTable;