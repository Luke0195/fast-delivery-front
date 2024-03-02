import { TableHeader, TableRow, TableHead } from '@app/_widgets/ui/table'
import { useContext } from 'react'
import { Context } from './context'
import { flexRender } from '@tanstack/react-table'

export function ManagerHeader() {
  const { table } = useContext(Context)
  return (
    <TableHeader className="border-b border-b-stone-200">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </TableHeader>
  )
}
