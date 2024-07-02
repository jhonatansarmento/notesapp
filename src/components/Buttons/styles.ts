import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0066ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
