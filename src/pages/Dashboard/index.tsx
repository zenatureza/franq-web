import React, { useEffect, useState } from 'react';
// import { isToday, format, parseISO, isAfter } from 'date-fns';
// import ptBR from 'date-fns/locale/pt-BR';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import CurrenciesSection from '../../components/CurrenciesSection';
// import DayPicker, { DayModifiers } from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
import { useAuth } from '../../hooks/auth';
import { Currencies, Finances } from '../../interfaces/IFinances.response';
import { api } from '../../services/api';
import {
  Appointment,
  Container,
  Content,
  Header,
  HeaderContent,
  Profile,
  Schedule,
  Section,
} from './styles';

// const options: Highcharts.Options = {
//   chart: {
//     type: 'line',
//   },
//   title: {
//     text: 'Monthly Average Temperature',
//   },
//   subtitle: {
//     text: 'Source: WorldClimate.com',
//   },
//   xAxis: {
//     categories: [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ],
//   },
//   yAxis: {
//     title: {
//       text: 'Temperature (°C)',
//     },
//   },
//   plotOptions: {
//     line: {
//       dataLabels: {
//         enabled: true,
//       },
//       enableMouseTracking: false,
//     },
//   },
//   series: [
//     {
//       name: 'Tokyo',
//       type: 'line',
//       data: [7, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
//     },
//     {
//       name: 'London',
//       type: 'line',
//       data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
//     },
//   ],
// };

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const [currenciesResult, setCurrencies] = useState<Currencies>();

  useEffect(() => {
    api.get<Finances>('/hgfinance').then((response) => {
      const { results } = response.data;
      const { currencies } = results;

      setCurrencies(currencies);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="FranqApp" />

          <Profile>
            {/* <img src={user.avatar_url} alt={user.name} /> */}
            <div>
              <span>Bem vindo ao FranqApp,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut} title="Sair">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <Section>
            <strong>COTAÇÃO DAS PRINCIPAIS MOEDAS PARA O REAL</strong>
            <CurrenciesSection currencies={currenciesResult} />
          </Section>

          <Section>
            <strong>COTAÇÃO DO BITCOIN NAS PRINCIPAIS CORRETORAS</strong>

            <Appointment key={''}>
              <span>COINBASE / USD DÓLARL</span>
              <div>
                <strong>{'R$ 5,39 | '}</strong>
                <span>-1,022 %</span>
              </div>
            </Appointment>
          </Section>
        </Schedule>
      </Content>
      {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
    </Container>
  );
};
export default Dashboard;
