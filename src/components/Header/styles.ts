// src/components/styles.ts
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Header = styled.header`
  padding: 34px;
  background: #f0f0f0;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeMessage = styled.div`
  flex: 1;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const UserIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-right: 8px;
`;

export const Menu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 150px;
`;

export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background: #f0f0f0;
  }
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
  padding: 5px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SearchIcon = styled(FaSearch)`
  margin-right: 10px;
  color: #aaa;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  outline: none;
`;
