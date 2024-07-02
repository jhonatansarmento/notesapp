'use client';

import Link from 'next/link';
import * as S from './styles';
import LoginForm from './form';

export default function Login() {
  return (
    <S.Container>
      <S.FormWrapper>
        <S.Title>Acesse sua conta</S.Title>
        <LoginForm />
        <S.SignUpLink>
          Ainda não tem uma conta?{' '}
          <Link href='/register'>Cadastre-se aqui</Link>
        </S.SignUpLink>
      </S.FormWrapper>
    </S.Container>
  );
}
