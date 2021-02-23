import React from 'react';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import { getStock, Stocks } from '../../interfaces/IFinances.response';
import getFormattedVariation from '../../utils/getFormattedVariation';
import { Container, Currency, Variation } from './styles';

interface Props {
  stocks: Stocks | undefined;
}

const StocksSection: React.FC<Props> = ({ stocks }: Props) => {
  const history = useHistory();
  const { addToast } = useToast();

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
                if (stockKey !== 'CAC') {
                  return addToast({
                    type: 'info',
                    title: 'Índice indisponível',
                    description: 'Este índice não está disponível no provedor.',
                  });
                }

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
