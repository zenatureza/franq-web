import React from 'react';
import { useHistory } from 'react-router-dom';
import { Currencies, getCurrency } from '../../interfaces/IFinances.response';
import getBrlValue from '../../utils/getBrlValue';

import { Currency, Variation } from './styles';

interface Props {
  currencies: Currencies | undefined;
}

const CurrenciesSection: React.FC<Props> = ({ currencies }: Props) => {
  const history = useHistory();

  return (
    <div>
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
              <strong>{`${currencies['source']} / ${
                getCurrency(currencies[currencyKey]).name
              }`}</strong>
              <div>
                <strong>
                  {getBrlValue(getCurrency(currencies[currencyKey]).buy)}
                </strong>
                <Variation
                  variation={getCurrency(currencies[currencyKey]).variation}
                >
                  {getBrlValue(getCurrency(currencies[currencyKey]).variation)}
                </Variation>
              </div>
            </Currency>
          ))}
    </div>
  );
};

export default CurrenciesSection;
