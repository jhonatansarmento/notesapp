import { useAuth } from '@/context/AuthContext';
import React, { useState } from 'react';
import * as S from './styles';
import { FaSearch } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import LogoutButton from '@/components/LogoutButton';

const Header: React.FC = () => {
  const { user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <S.Header>
      <S.TopSection>
        <S.WelcomeMessage>
          {user ? (
            <span>Bem vindo, {user.name}</span>
          ) : (
            <span>Carregando...</span>
          )}
        </S.WelcomeMessage>
        <S.UserIconWrapper onClick={toggleMenu}>
          <S.UserIcon>{user ? user.name.charAt(0) : '?'}</S.UserIcon>
          {showMenu ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
          {showMenu && (
            <S.Menu>
              <LogoutButton />
            </S.Menu>
          )}
        </S.UserIconWrapper>
      </S.TopSection>
      <S.SearchBarWrapper>
        <S.SearchIcon />
        <S.SearchInput type='text' placeholder='Procurar notas...' />
      </S.SearchBarWrapper>
    </S.Header>
  );
};

export default Header;
