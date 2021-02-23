import React from 'react';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../../assets/logo.svg';
import { useAuth } from '../../../hooks/auth';
import { Header, HeaderContent, Profile } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  const { signOut, user } = useAuth();

  return (
    <>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="FranqApp" />

          <Profile>
            <div>
              <span>Bem vindo ao FranqApp,</span>
              <strong>{user.name}</strong>
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
