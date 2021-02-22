import React from 'react';
import { Header, HeaderContent, Profile } from '../../Dashboard/styles';

// import { Container } from './styles';
import logoImg from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';
import { FiPower } from 'react-icons/fi';

const DefaultLayout: React.FC = ({ children }) => {
  const { signOut, user } = useAuth();

  return (
    <>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="FranqApp" />

          <Profile>
            {/* <img src={user.avatar_url} alt={user.name} /> */}
            <div>
              <span>Bem vindo ao FranqApp,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut} title="Sair">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      {children}
    </>
  );
};

export default DefaultLayout;
