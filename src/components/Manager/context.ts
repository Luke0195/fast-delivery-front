import { createContext } from 'react'

type ManagerProps = {
  table: any
}

export const Context = createContext({} as ManagerProps)
