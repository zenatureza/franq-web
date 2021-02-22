import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
// import { isToday, format, parseISO, isAfter } from 'date-fns';
// import ptBR from 'date-fns/locale/pt-BR';
import { FiClock, FiPower } from 'react-icons/fi';
// import DayPicker, { DayModifiers } from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  // NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Currency {
  name: string;
  buy: number;
  sell: number;
  variation: number;
}

interface Currencies {
  source: string;
  USD: Currency;
  EUR: Currency;
  GBP: Currency;
  ARS: Currency;
  CAD: Currency;
  AUD: Currency;
  JPY: Currency;
  CNY: Currency;
  BTC: Currency;
}

interface Stock {
  name: string;
  location: string;
  points: number;
  variation: number;
}

interface Stocks {
  IBOVESPA: Stock;
  NASDAQ: Stock;
  CAC: Stock;
  NIKKEI: Stock;
}

interface Results {
  currencies: Currencies;
  stocks: Stocks;
  available_sources: string[];
  taxes: number[];
}

interface Finances {
  by: string;
  valid_key: boolean;
  results: Results;
  execution_time: number;
  from_cache: boolean;
}

const options: Highcharts.Options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'Monthly Average Temperature',
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)',
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      name: 'Tokyo',
      type: 'line',
      data: [7, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
    },
    {
      name: 'London',
      type: 'line',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
    },
  ],
};

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  useEffect(() => {
    api.get<Finances[]>('/').then((response) => {
      console.log(response.data);
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

            <Appointment key={''}>
              <strong>USD DÓLAR / BRL REAL</strong>
              <div>
                <strong>{'R$ 5,39'}</strong>
                <span>-1,022 %</span>
              </div>
            </Appointment>
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
    // <Container>

    //   <Content>
    //     <Schedule>
    //       <h1>Horários agendados</h1>
    //       <p>
    //         {isToday(selectedDate) && <span>Hoje</span>}
    //         <span>{selectedDateAsText}</span>
    //         <span>{selectedWeekDay}</span>
    //       </p>

    //       {isToday(selectedDate) && nextAppointment && (
    //         <NextAppointment>
    //           <strong>Agendamento a seguir</strong>
    //           <div>
    //             <img
    //               src={nextAppointment.user.avatar_url}
    //               alt={nextAppointment.user.name}
    //             />

    //             <strong>{nextAppointment.user.name}</strong>
    //             <span>
    //               <FiClock />
    //               {nextAppointment.hourFormatted}
    //             </span>
    //           </div>
    //         </NextAppointment>
    //       )}

    //       <Section>
    //         <strong>Manhã</strong>

    //         {morningAppointments.length === 0 && (
    //           <p>Nenhum agendamento neste período</p>
    //         )}

    //         {morningAppointments.map((appointment) => (
    //           <Appointment key={appointment.id}>
    //             <span>
    //               <FiClock />
    //               {appointment.hourFormatted}
    //             </span>

    //             <div>
    //               <img
    //                 src={appointment.user.avatar_url}
    //                 alt={appointment.user.name}
    //               />

    //               <strong>{appointment.user.name}</strong>
    //             </div>
    //           </Appointment>
    //         ))}
    //       </Section>

    //       <Section>
    //         <strong>Tarde</strong>

    //         {afternoonAppointments.length === 0 && (
    //           <p>Nenhum agendamento neste período</p>
    //         )}

    //         {afternoonAppointments.map((appointment) => (
    //           <Appointment key={appointment.id}>
    //             <span>
    //               <FiClock />
    //               {appointment.hourFormatted}
    //             </span>

    //             <div>
    //               <img
    //                 src={appointment.user.avatar_url}
    //                 alt={appointment.user.name}
    //               />

    //               <strong>{appointment.user.name}</strong>
    //             </div>
    //           </Appointment>
    //         ))}
    //       </Section>
    //     </Schedule>

    //     <Calendar>
    //       <DayPicker
    //         weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
    //         fromMonth={new Date()}
    //         disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
    //         modifiers={{
    //           available: { daysOfWeek: [1, 2, 3, 4, 5] },
    //         }}
    //         onMonthChange={handleMonthChange}
    //         selectedDays={selectedDate}
    //         onDayClick={handleDateChange}
    //         months={[
    //           'Janeiro',
    //           'Fevereiro',
    //           'Março',
    //           'Abril',
    //           'Maio',
    //           'Junho',
    //           'Julho',
    //           'Agosto',
    //           'Setembro',
    //           'Outubro',
    //           'Novembro',
    //           'Dezembro',
    //         ]}
    //       />
    //     </Calendar>
    //   </Content>
    // </Container>
  );
};
export default Dashboard;
