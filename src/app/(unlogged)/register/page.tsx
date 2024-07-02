'use client';

import Link from 'next/link';
import RegisterForm from './form';
import * as S from './styles';

export default function Register() {
  return (
    <S.Container>
      <S.FormWrapper>
        <S.Title>Cadastro</S.Title>
        <RegisterForm />
        <S.SignUpLink>
          Já tem uma conta? <Link href='/login'>Faça login aqui</Link>
        </S.SignUpLink>
      </S.FormWrapper>
    </S.Container>
  );
}
