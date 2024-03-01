'use client'
import ReactApexChart, { Props } from 'react-apexcharts'

type ComponentProps = {
  options?: any
  series?: any
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

export function Bar() {
  return (
    <ReactApexChart
      width={500}
      height={220}
      type="bar"
      options={barChart.options}
      series={barChart.series}
    />
  )
}
