import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { Stock } from '../../../interfaces/IStock.response';
import { api } from '../../../services/api';
import colors from '../../../styles/colors';
import { Container } from './styles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface Props {
  stock: string;
}

const StockChart: React.FC<Props> = ({ stock }: Props) => {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    chart: {
      type: 'line',
      backgroundColor: colors.main,
    },
    title: {
      text: `Evolução de preços de fechamento: ${stock}`,
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
    api
      .get<Stock[]>(`/stocks/${stock}`, {
        params: {
          startDate: '2021-01=01',
          endDate: '2021-02-22',
        },
      })
      .then((response) => {
        const { data } = response;

        const close = data.map((x) => parseFloat(x.close as any)).reverse();
        const categories = data.map((x) => x.date).reverse();

        setChartOptions({
          chart: {
            type: 'line',
            backgroundColor: colors.main,
          },
          title: {
            text: `Evolução de preços de fechamento: ${stock}`,
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
            categories,
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
          series: [
            {
              name: 'Fechamento',
              type: 'line',
              data: close,
              color: colors.secondary,
              allowPointSelect: true,
            },
          ],
        });

        setLoading(false);
      });
  }, [stock]);

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

export default StockChart;
