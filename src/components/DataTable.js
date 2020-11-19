import React from 'react';
import MaterialTable from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';


function DataTable() {
  const columnas = [
    {
      title: 'Guía Despacho',
      field: 'nguia'
    },
    {
      title: 'Cliente',
      field: 'cliente'
    },
    {
      title: 'Fecha',
      field: 'fecha'
    },
    {
      title: 'Puntualidad',
      field: 'puntual'
    },
    {
      title: 'Estadia Estimada',
      field: 'estimada'
    },
    {
      title: 'Llegada Obra',
      field: 'llegada'
    },
    {
      title: 'Salida Obra',
      field: 'salida'
    },
    {
      title: 'Estadía Real',
      field: 'real'
    },
    {
      title: 'Minutos Adicionales',
      field: 'adicional'
    },
    {
      title: 'Cobro',
      field: 'cobro'
    },
  ]

  function createData(nguia,cliente,m3,fecha,ocobra,llegada,salida) {
    const puntual = 'No lo sé';
    const estimada = m3 * 6;
    const real = salida - llegada;
    const adicional = real - estimada;
    const cobro = adicional/15*0.5;
    return { nguia,cliente,fecha,ocobra,puntual,estimada,llegada,salida,real,adicional, cobro};
  }



  const data = [
  	{
  		nguia:	"123456",
  		cliente:	"Melón Hormigones",
  		fecha:	"01-12-2020 09:30",
  		ocobra:	"OB123456-001",
  		puntual:	"Sí",
  		estimada:	"00:45:00",
  		llegada:	"09:34:53",
  		salida:	"10:40:31",
  		real:	"01:06:34",
  		adicional:	"00:20:38",
  		cobro:	"0,5 UF"
  	},
  	{
  		nguia:	"123456",
  		cliente:	"Melón Hormigones",
  		fecha:	"01-12-2019 09:30",
  		ocobra:	"OB123456-001",
  		puntual:	"Sí",
  		estimada:	"00:45:00",
  		llegada:	"09:34:53",
  		salida:	"10:40:31",
  		real:	"01:06:34",
  		adicional:	"00:20:38",
  		cobro:	"0,5 UF"
  	},
  	{
  		nguia:	"123456",
  		cliente:	"Melón Hormigones",
  		fecha:	"01-12-2020 09:30",
  		ocobra:	"OB123456-001",
  		puntual:	"Sí",
  		estimada:	"00:45:00",
  		llegada:	"09:34:53",
  		salida:	"10:40:31",
  		real:	"01:06:34",
  		adicional:	"00:20:38",
  		cobro:	"0,5 UF"
  	},
  	{
  		nguia:	"123456",
  		cliente:	"Melón Hormigones",
  		fecha:	"01-12-2020 09:30",
  		ocobra:	"OB123456-001",
  		puntual:	"Sí",
  		estimada:	"00:45:00",
  		llegada:	"09:34:53",
  		salida:	"10:40:31",
  		real:	"01:06:34",
  		adicional:	"00:20:38",
  		cobro:	"0,5 UF"
  	},
  	{
  		nguia:	"123456",
  		cliente:	"Melón Hormigones",
  		fecha:	"01-12-2020 09:30",
  		ocobra:	"OB123456-001",
  		puntual:	"Sí",
  		estimada:	"00:45:00",
  		llegada:	"09:34:53",
  		salida:	"10:40:31",
  		real:	"01:06:34",
  		adicional:	"00:20:38",
  		cobro:	"0,5 UF"
  	},
  	{
  		nguia:	"123456",
  		cliente:	"Melón Hormigones",
  		fecha:	"01-12-2020 09:30",
  		ocobra:	"OB123456-001",
  		puntual:	"Sí",
  		estimada:	"00:45:00",
  		llegada:	"09:34:53",
  		salida:	"10:40:31",
  		real:	"01:06:34",
  		adicional:	"00:20:38",
  		cobro:	"0,5 UF"
  	},
  	{
  		nguia:	"123456",
  		cliente:	"Melón Hormigones",
  		fecha:	"01-12-2020 09:30",
  		ocobra:	"OB123456-001",
  		puntual:	"Sí",
  		estimada:	"00:45:00",
  		llegada:	"09:34:53",
  		salida:	"10:40:31",
  		real:	"01:06:34",
  		adicional:	"00:20:38",
  		cobro:	"0,5 UF"
  	}
  ];

  return (
    <div>
    <MaterialTable
    title="Basic Filtering Preview"
    columns={[
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ]}
    data={[
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]}
    options={{
      filtering: true
    }}
    />
    </div>
  );
}

export default DataTable;
// <MaterialTable
//   columns={columnas}
//   data={data}
//   title='Pedidos'
//   actions={[
//     {
//       icon: 'visibilityIcon',
//       tooltip: 'Ver Detalle',
//       onClick:(event, rowData) =>alert(
//                 'Nº Guía Despacho: '+rowData.nguia+'\n'+
//                 'Nº Pedido: '+rowData.pedido +'\n'+
//                 'Volumen: '+rowData.m3+' m3.\n'+
//                 'Hora Programada: '+rowData.solicitada +'\n'+
//                 'Hora Llegada a Obra: '+rowData.llegada +'\n'+
//                 'Cumplimiento Puntualidad: '+rowData.puntual +'\n'+
//                 'Hora Salida de Obra: '+rowData.salida +'\n'+
//                 'Estadía Designada: '+rowData.estimada +'\n'+
//                 'Estadía Real: '+rowData.real +'\n'+
//                 'Minutos Adicionales: '+rowData.dif +'\n'+
//                 'Tramos a Cobrar: '+rowData.tramos +'\n'+
//                 'Monto a Facturar: '+rowData.cobro)
//     }
//   ]}
//   localization={{
//     header: {
//       actions: 'Ver'
//     }
//   }}
// />


//
//
// // {
//   // title: 'Guía Despacho',
//   // field: 'nguia'
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'pedido '
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'm3'
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'solicitada'
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'llegada '
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'puntual '
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'salida '
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'estimada '
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'real '
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'dif '
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'tramos '
// // },
// // {
//   // title: 'Guía Despacho',
//   // field: 'cobro'
// // }
