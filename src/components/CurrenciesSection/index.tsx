import React from 'react';
import { useHistory } from 'react-router-dom';
import { Currencies, getCurrency } from '../../interfaces/IFinances.response';
import getBrlValue from '../../utils/getBrlValue';
import getFormattedVariation from '../../utils/getFormattedVariation';

import { Container, Currency, Variation } from './styles';

interface Props {
  currencies: Currencies | undefined;
}

const CurrenciesSection: React.FC<Props> = ({ currencies }: Props) => {
  const history = useHistory();

  return (
    <Container>
      {!currencies && <p>Nenhuma cotação de moeda obtida</p>}

      {currencies &&
        Object.keys(currencies)
          .filter((key) => key !== 'source')
          .map((currencyKey) => (
            <Currency
              title={`Ver evolução de preços`}
              onClick={() => history.push(`/currencydetails/${currencyKey}`)}
              key={currencyKey}
            >
              <div>
                <p>
                  {`${currencies['source']} / ${
                    getCurrency(currencies[currencyKey]).name
                  }`}
                </p>
              </div>

              <div>
                <h2>{getBrlValue(getCurrency(currencies[currencyKey]).buy)}</h2>
              </div>

              <div>
                <Variation
                  variation={getCurrency(currencies[currencyKey]).variation}
                >
                  {getFormattedVariation(
                    getCurrency(currencies[currencyKey]).variation
                  )}
                </Variation>
              </div>
            </Currency>
          ))}
    </Container>
  );
};

export default CurrenciesSection;
