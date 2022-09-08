export const columns = [
  {
    name: 'cantidad',
    label: 'Cant',
    align: 'left',
    field: 'cant',
    sortable: true,
    sort: (a: string, b: string): number => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'productos',
    align: 'center',
    label: 'Productos',
    field: 'producto',
  },
  {
    name: 'precio',
    label: 'Precio',
    field: 'price',
    format: (val: string) => `${val}$`,
    sortable: true,
    sort: (a: string, b: string): number => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: '',
    label: '',
    field: 'buttons',
    classes: 'table-buttons',
  },
];
