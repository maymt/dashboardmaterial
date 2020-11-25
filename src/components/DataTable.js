import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import 'fontsource-roboto';

const baseUrl = "postgres://mpdlwiymksjbbo:026c558a53f723dd0c07a2e4c2265c33f0574b9f66b0d53256e18cdcdb729c33@ec2-52-206-15-227.compute-1.amazonaws.com:5432/daokhr6d468c47"

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
		{ title: 'Cliente', field: 'cliente' },
		{ title: 'Razón Social', field: 'razon_social' },
		{ title: 'Nº Guía', field: 'guia_despacho' },
		{ title: 'Cod. Obra', field: 'obra_oc' },
		{ title: 'Fecha', field: 'fecha' },
		{ title: 'Nº Pedido', field: 'pedido' },
		//{ title: 'tren_pedido', field: 'tren_pedido' },
		//{ title: 'posicion_en_tren', field: 'posicion_en_tren' },
		//{ title: 'producto_codigo', field: 'producto_codigo' },
		//{ title: 'producto', field: 'producto' },
		//{ title: 'm3', field: 'm3' },
		//{ title: 'planta', field: 'planta' },
		//{ title: 'hora_solicitada_cliente_primer_despacho_de_tren', field: 'hora_solicitada_cliente_primer_despacho_de_tren' },
		//{ title: 'espaciamiento', field: 'espaciamiento' },
		//{ title: 'hora_solicitada_cliente_original', field: 'hora_solicitada_cliente_original' },
		{ title: 'Hora Solicitada', field: 'hora_solicitada_cliente_corregida' },
		// { title: 'tiempo_ida_vuelta_proyectado', field: 'tiempo_ida_vuelta_proyectado' },
		// { title: 'tiempo_viaje_vuelta_proyectado', field: 'tiempo_viaje_vuelta_proyectado' },
		// { title: 'hora_tiquete', field: 'hora_tiquete' },
		// { title: 'hora_de_carga', field: 'hora_de_carga' },
		// { title: 'hora_fin_de_carga', field: 'hora_fin_de_carga' },
		// { title: 'hora_salida_de_planta', field: 'hora_salida_de_planta' },
		{ title: 'Llegada Obra', field: 'hora_llegada_a_obra' },
		{ title: '¿Entrega Puntual?', field: 'puntualidad', lookup: { true: 'Si', false: 'No' } },
		{ title: 'Estadía Estimada', field: 'estimada' },
		//{ title: 'hora_inicio_descarga', field: 'hora_inicio_descarga' },
		{ title: 'Salida Obra', field: 'hora_vuelta_a_planta' },
		{ title: 'Estadía Real', field: 'real' },
		{ title: 'Estadía Adicional', field: 'adicionales' },
		//{ title: 'hora_llegada_a_planta', field: 'hora_llegada_a_planta' },
		{ title: 'Tramos Cobro', field: 'tramos' },
		{ title: 'Monto (UF)', field: 'monto' }
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
