'use client';

import * as S from './styles';

interface FormButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
}

export default function PrimaryButton({
  type,
  children,
  disabled = false,
}: FormButtonProps) {
  return (
    <S.Button type={type} disabled={disabled}>
      {children}
    </S.Button>
  );
}
