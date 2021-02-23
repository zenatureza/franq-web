import React from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import DefaultLayout from '../_layouts/default';
import CurrencyChart from './CurrencyChart';
import { Container } from './styles';

interface Props {
  currency: string;
}

const CurrencyDetails: React.FC = () => {
  const { currency } = useParams<Props>();

  return (
    <DefaultLayout>
      <CurrencyChart currency={currency} />
      <Container>
        <Link to="/dashboard">
          <FiArrowLeftCircle />
          Voltar ao dashboard
        </Link>
      </Container>
    </DefaultLayout>
  );
};

export default CurrencyDetails;
