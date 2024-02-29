'use client'
import React from 'react'
import { PageHeader } from '@app/components'
import { Card, CardContent, CardTitle } from '@app/_widgets/ui/card'
import ApexChart, { Props } from 'react-apexcharts'
import { AnimationWrapper, animations } from '@app/shared'
const pieChart: Props = {
  series: [44, 55, 41, 17],

  options: {
    chart: {
      type: 'donut',
    },
    labels: ['Entregue', 'Retirada', 'Cancelada', 'Pendente'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
}

const areaChart: Props = {
  series: [
    {
      name: 'Resolvidos',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Não Resolvidos',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
}

const barChart: Props = {
  series: [
    {
      data: [400, 430, 448, 470, 540],
    },
  ],

  options: {
    chart: {
      type: 'bar',
      height: 350,
    },

    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ['#32a852', '#3244a8', '#e3cc4d', '#e3844d', '#ba2f20'],
    },
    xaxis: {
      categories: [
        'Região Norte',
        'Região Nordeste',
        'Região Centro-Oeste',
        'Região Sudeste',
        'Região Sul',
      ],
    },
  },
}

export function Ui() {
  return (
    <div className="w-full flex  flex-col  ">
      <PageHeader
        title="Dashboard"
        description="Utilize os recursos para visualizar o desempenho da transportadoras"
      />
      <div className="w-full my-3 grid grid-cols-3 gap-11">
        <AnimationWrapper animation={animations.moveRight}>
          <Card className="p-4 gap-y-2 border border-gray-300">
            <CardTitle className="font-semibold text-xl text-gray-600 my-2">
              Resultado das Encomendas
            </CardTitle>
            <CardContent>
              <ApexChart
                width={400}
                height={250}
                options={pieChart.options}
                series={pieChart.series}
                type="donut"
              />
            </CardContent>
          </Card>
        </AnimationWrapper>
        <AnimationWrapper animation={animations.moveTop}>
          <Card className="p-4 gap-y-2 border border-gray-300">
            <CardTitle className="font-semibold text-xl text-gray-600 my-2">
              Problemas Relatados
            </CardTitle>
            <CardContent>
              <ApexChart
                width={500}
                height={240}
                options={areaChart.options}
                series={areaChart.series}
                type="area"
              />
            </CardContent>
          </Card>
        </AnimationWrapper>
        <AnimationWrapper animation={animations.moveLeft}>
          <Card className="p-4 gap-y-2 border border-gray-300">
            <CardTitle className="font-semibold text-xl text-gray-600 my-2">
              Destinatários por Região.
            </CardTitle>
            <CardContent>
              <ApexChart
                width={500}
                height={240}
                options={barChart.options}
                series={barChart.series}
                type="bar"
              />
            </CardContent>
          </Card>
        </AnimationWrapper>
      </div>
    </div>
  )
}
