import React from 'react';
import { useParams } from 'react-router-dom';
import CurrencyChart from './CurrencyChart';

interface Props {
  currency: string;
}

const CurrencyDetails: React.FC = () => {
  const { currency } = useParams<Props>();

  return (
    <>
      <CurrencyChart currency={currency} />
    </>
  );
};

export default CurrencyDetails;
