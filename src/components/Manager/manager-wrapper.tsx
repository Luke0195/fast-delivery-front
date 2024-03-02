import React from 'react'
import { Context } from './context'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Table,
} from '@tanstack/react-table'

interface ManagerProps<T> {
  table: Table<T>
  children: any
}
export function ManagerWrapper<T>(props: ManagerProps<T>) {
  const { table, children } = props
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  return (
    <Context.Provider value={{ table: table }}>{children}</Context.Provider>
  )
}
