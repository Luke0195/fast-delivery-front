'use client'
import { CardRoot } from '@app/components'
import { mockChartOptions } from './graphic-options'
import ApexChart from 'react-apexcharts'

export function YearResult() {
  return (
    <CardRoot.CardWrapper className="p-4 gap-y-2 border border-gray-300">
      <CardRoot.CardTitle
        className={'font-semibold text-xl text-gray-600 my-2'}
      >
        {' '}
        Resultado Anual{' '}
      </CardRoot.CardTitle>
      <CardRoot.CardContent>
        <ApexChart
          width={'100%'}
          height={300}
          options={mockChartOptions.options}
          series={mockChartOptions.series}
          type="bar"
        />
      </CardRoot.CardContent>
    </CardRoot.CardWrapper>
  )
}
