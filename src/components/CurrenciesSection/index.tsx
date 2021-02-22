import React from 'react';
import { Currencies, getCurrency } from '../../interfaces/IFinances.response';
import getBrlValue from '../../utils/getBrlValue';

import { Currency, Variation } from './styles';

interface Props {
  currencies: Currencies | undefined;
}

const CurrenciesSection: React.FC<Props> = ({ currencies }: Props) => {
  // TODO: Adicionar comportamento para renderizar um gráfico ao clicar aqui

  return (
    <>
      {!currencies && <p>Nenhuma cotação de moeda obtida</p>}

      {currencies &&
        Object.keys(currencies)
          .filter((key) => key !== 'source')
          .map((currencyKey) => (
            <Currency key={currencyKey}>
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
    </>
  );
};

export default CurrenciesSection;
