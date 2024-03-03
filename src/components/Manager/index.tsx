'use client'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

type ManagerProps = {
  columns: GridColDef[]
  rows: any[]
  hasChecked: boolean
  loading: boolean
}

export function Manager(props: ManagerProps) {
  const { columns, rows, hasChecked, loading } = props
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      initialState={{
        sorting: {},
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      loading={loading}
      pageSizeOptions={[5, 10]}
      checkboxSelection={hasChecked}
    />
  )
}
