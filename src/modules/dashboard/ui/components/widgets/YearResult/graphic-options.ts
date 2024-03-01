import { Props } from 'react-apexcharts'
export const mockChartOptions: Props = {
  series: [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30, 102, 40, 10],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ['Janeiro'],
        ['Fevereiro'],
        ['Março'],
        ['Abril'],
        ['Maio'],
        ['Junho'],
        ['Julho'],
        ['Agosto'],
        ['Setembro'],
        ['Outubro'],
        ['Novembro'],
        ['Dezembro'],
      ],
    },
  },
}
