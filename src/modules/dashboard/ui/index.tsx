'use client'
import React from 'react'
import { PageHeader } from '@app/components'
import {
  Recipent,
  Report,
  DestinyRegion,
  YearResult,
} from './components/widgets'

export function Ui() {
  return (
    <div className="w-full flex  flex-col overflow-hidden  ">
      <PageHeader
        title="Dashboard"
        description="Utilize os recursos para visualizar o desempenho da transportadoras"
      />
      <div className="w-scren my-3 grid  gap-9 w:grid grid-cols-1 lg:grid-cols-3">
        <Recipent />
        <Report />
        <DestinyRegion />
      </div>
      <div className="w-full ">
        <YearResult />
      </div>
    </div>
  )
}
