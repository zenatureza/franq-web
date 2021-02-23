import React from 'react';
import { useHistory } from 'react-router-dom';
import { getStock, Stocks } from '../../interfaces/IFinances.response';
import getFormattedVariation from '../../utils/getFormattedVariation';
import { Container, Currency, Variation } from './styles';

interface Props {
  stocks: Stocks | undefined;
}

const StocksSection: React.FC<Props> = ({ stocks }: Props) => {
  const history = useHistory();

  return (
    <Container>
      {!stocks && <p>Nenhum índice de bolsa obtido</p>}

      {stocks &&
        Object.keys(stocks)
          .filter((key) => key !== 'source')
          .map((stockKey) => (
            <Currency
              title={
                stockKey === 'CAC'
                  ? `Ver evolução de preços`
                  : 'Preços indisponíveis'
              }
              onClick={() => {
                if (stockKey !== 'CAC') return;

                return history.push(`/stockdetails/${stockKey}`);
              }}
              key={stockKey}
            >
              <div>
                <p>{`${getStock(stocks[stockKey]).name}`}</p>
              </div>

              <div>
                <Variation variation={getStock(stocks[stockKey]).variation}>
                  {getFormattedVariation(getStock(stocks[stockKey]).variation)}
                </Variation>
              </div>
            </Currency>
          ))}
    </Container>
  );
};

export default StocksSection;
