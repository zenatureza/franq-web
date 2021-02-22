import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import colors from '../../../styles/colors';

import { Container } from './styles';

interface Props {
  currency: string;
}

const CurrencyChart: React.FC<Props> = ({ currency }: Props) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: colors.main,
    },
    title: {
      text: 'Evolução de preços ',
      style: {
        color: '#fff',
      },
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: [
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
      ],
      labels: {
        style: {
          color: '#fff',
        },
      },
    },
    yAxis: {
      title: {
        text: 'Preço (R$)',
        style: {
          color: '#fff',
        },
      },
      labels: {
        style: {
          color: '#fff',
        },
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
        color: '#fff',
      },
    },
    series: [
      {
        name: 'Compra',
        type: 'line',
        data: [
          7,
          6.9,
          9.5,
          14.5,
          18.4,
          21.5,
          25.2,
          26.5,
          23.3,
          18.3,
          13.9,
          9.6,
        ],
        color: colors.secondary,
      },
      {
        name: 'Venda',
        type: 'line',
        data: [
          3.9,
          4.2,
          5.7,
          8.5,
          11.9,
          15.2,
          17.0,
          16.6,
          14.2,
          10.3,
          6.6,
          4.8,
        ],
        color: colors.dark,
      },
    ],
  };

  if (options.title) {
    options.title.text = `Evolução de preços: ${currency}`;
  }

  return (
    <Container>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // {...props}
      />
    </Container>
  );
};

export default CurrencyChart;
