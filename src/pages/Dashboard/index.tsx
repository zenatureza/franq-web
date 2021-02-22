import React, { useEffect, useState } from 'react';
import CurrenciesSection from '../../components/CurrenciesSection';
import { Currencies, Finances } from '../../interfaces/IFinances.response';
import { api } from '../../services/api';
import { Appointment, Container, Content, Schedule, Section } from './styles';

const Dashboard: React.FC = () => {
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
