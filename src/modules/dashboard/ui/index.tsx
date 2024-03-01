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
      <div className="w-scren my-3 grid grid-cols-3 gap-9">
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
