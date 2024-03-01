'use client'
import ReactApexChart, { Props } from 'react-apexcharts'

type ComponentProps = {
  options?: any
  series?: any
}

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

export function Pie(props: ComponentProps) {
  const { series, options } = props
  return (
    <ReactApexChart
      width={500}
      height={230}
      type="pie"
      options={pieChart.options}
      series={pieChart.series}
    />
  )
}
