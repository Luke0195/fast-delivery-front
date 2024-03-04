'use client'
import ReactApexChart, { Props } from 'react-apexcharts'
type ComponentProps = {
  options?: any
  series?: any
}

const defaultArea: Props = {
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

export function Area(props: ComponentProps) {
  const { series, options } = props
  return (
    <ReactApexChart
      width={400}
      height={220}
      type="area"
      options={defaultArea.options}
      series={defaultArea.series}
    />
  )
}
