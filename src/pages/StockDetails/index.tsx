import React from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import DefaultLayout from '../_layouts/default';
import StockChart from './StockChart';
import { Container } from './styles';

interface Props {
  stock: string;
}

const StockDetails: React.FC = () => {
  const { stock } = useParams<Props>();

  return (
    <DefaultLayout>
      <StockChart stock={stock} />
      <Container>
        <Link to="/dashboard">
          <FiArrowLeftCircle />
          Voltar ao dashboard
        </Link>
      </Container>
    </DefaultLayout>
  );
};

export default StockDetails;
