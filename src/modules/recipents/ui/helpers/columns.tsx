import { GridColDef } from '@mui/x-data-grid'

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    filterable: false,
  },
  {
    field: 'name',
    headerName: 'Nome',
    width: 400,
    align: 'center',
    headerAlign: 'center',
    filterable: false,
  },
  {
    field: 'address.name',
    headerName: 'Endereço',
    width: 320,
    headerAlign: 'center',
    align: 'center',
    filterable: false,
  },
  {
    field: 'actions',
    headerName: 'Ações',
    width: 300,
    headerAlign: 'center',
    align: 'center',
    filterable: false,
  },
]
