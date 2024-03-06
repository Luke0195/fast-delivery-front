'use client'
import { PageHeader, Manager, ButtonRoot } from '@app/components'
import { recipentService, mapDataToDomain, DataInterface } from '../'
import { GridColDef } from '@mui/x-data-grid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const columns: GridColDef[] = [
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
    field: 'address_name',
    headerName: 'Endereço',
    width: 320,
    headerAlign: 'center',
    align: 'center',
    filterable: false,
  },
  {
    field: 'action',
    headerName: 'Ações',
    width: 300,
    headerAlign: 'center',
    align: 'center',
    filterable: false,
  },
]

const rows = [
  {
    id: 1,
    lastName: <h1> Teste sfasfas</h1>,
    firstName: <h1> Teste sfasfas</h1>,
    age: <h1> Teste</h1>,
  },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]

export function Ui() {
  const [loading, setLoading] = useState<boolean>(false)
  const [body, setBody] = useState<DataInterface[]>([])
  const loadData = async () => {
    setLoading(true)
    try {
      const response = await recipentService.getAllRecipents()
      const parsedData = mapDataToDomain(response.body || [])
      console.log(parsedData)
      setBody(parsedData)
    } catch {
      toast.error('Não foi possível processar a requisição')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <PageHeader
        title="Encomendas"
        description="Utilize os recursos para gerenciar as encomendas da sua transportadora."
      />
      <div
        style={{ height: 400, width: '100%' }}
        className="my-4 px-4 flex flex-col "
      >
        <div className="flex justify-end">
          <Link href={'/main/recipents/register'}>
            <ButtonRoot.Button className="my-2 bg-primaryYellow">
              {' '}
              <ButtonRoot.ButtonContent>
                Criar Destinatário
              </ButtonRoot.ButtonContent>
            </ButtonRoot.Button>
          </Link>
        </div>
        <Manager
          columns={columns}
          rows={body || []}
          hasChecked={true}
          loading={loading}
        />
      </div>
    </>
  )
}
