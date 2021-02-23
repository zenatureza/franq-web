import React, { useEffect, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import colors from '../../../styles/colors';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Container } from './styles';
import { Currency } from '../../../interfaces/ICurrency.response';
import { api } from '../../../services/api';

interface Props {
  currency: string;
}

const CurrencyChart: React.FC<Props> = ({ currency }: Props) => {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    chart: {
      type: 'line',
      backgroundColor: colors.main,
    },
    title: {
      text: `Evolução de preços: ${currency}`,
      style: {
        color: '#fff',
      },
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      labels: {
        style: {
          color: '#fff',
        },
      },
      crosshair: true,
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
        // tick: 0.05,
      },
      crosshair: true,
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
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
    tooltip: {
      enabled: true,
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    api.get<Currency[]>(`/currencies/${currency}/15`).then((response) => {
      const { data } = response;

      const buy = data.map((x) => x.buy).reverse();
      const sell = data.map((x) => x.sell).reverse();
      const categories = data.map((x) => x.date).reverse();

      setChartOptions({
        chart: {
          type: 'line',
          backgroundColor: colors.main,
        },
        title: {
          text: `Evolução de preços: ${currency}`,
          style: {
            color: '#fff',
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: 'Compra',
            type: 'line',
            data: buy,
            color: colors.secondary,
            allowPointSelect: true,
          },
          {
            name: 'Venda',
            type: 'line',
            data: sell,
            color: colors.dark,
            allowPointSelect: true,
          },
        ],
        xAxis: {
          categories,
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
            // tick: 0.05,
          },
          crosshair: true,
        },
      });

      setLoading(false);
    });
  }, [currency]);

  return (
    <Container>
      {loading ? (
        <div className="flex-center">
          <Loader type="Audio" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{ style: { width: '100%' } }}
        />
      )}
    </Container>
  );
};

export default CurrencyChart;
