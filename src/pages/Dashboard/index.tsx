import React, { useEffect, useState } from 'react';
import CurrenciesSection from '../../components/CurrenciesSection';
import {
  Currencies,
  Finances,
  Stocks,
} from '../../interfaces/IFinances.response';
import { api } from '../../services/api';
import DefaultLayout from '../_layouts/default';
import { Content } from '../_layouts/default/styles';
import { Container, Section } from './styles';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import StocksSection from '../../components/StocksSection';

const Dashboard: React.FC = () => {
  const [currenciesResult, setCurrencies] = useState<Currencies>();
  const [stocksResult, setStocks] = useState<Stocks>();

  const [loadingCurrencies, setLoadingCurrencies] = useState(false);
  const [loadingStocks, setLoadingStocks] = useState(false);

  useEffect(() => {
    setLoadingCurrencies(true);
    setLoadingStocks(true);

    api.get<Finances>('/hgfinance').then((response) => {
      const { results } = response.data;
      const { currencies, stocks } = results;

      setCurrencies(currencies);
      setStocks(stocks);

      setTimeout(() => {
        setLoadingCurrencies(false);
        setLoadingStocks(false);
      }, 1000);
    });
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <Content>
          <div>
            <Section>
              <strong>COTAÇÃO DAS PRINCIPAIS MOEDAS PARA O REAL</strong>
              {loadingCurrencies ? (
                <div className="flex-center">
                  <Loader
                    type="Audio"
                    color="#00BFFF"
                    height={100}
                    width={100}
                  />
                </div>
              ) : (
                <CurrenciesSection currencies={currenciesResult} />
              )}
            </Section>

            <Section>
              <strong>ÍNDICES DE BOLSA DE VALORES</strong>
              {loadingStocks ? (
                <div className="flex-center">
                  <Loader
                    type="Audio"
                    color="#00BFFF"
                    height={100}
                    width={100}
                  />
                </div>
              ) : (
                <StocksSection stocks={stocksResult} />
              )}
            </Section>
          </div>
        </Content>
      </Container>
    </DefaultLayout>
  );
};
export default Dashboard;
