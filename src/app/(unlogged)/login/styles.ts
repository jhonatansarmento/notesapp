import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const FormWrapper = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
`;

export const SignUpLink = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #777;

  a {
    color: #0066ff;
    cursor: pointer;
  }
`;
