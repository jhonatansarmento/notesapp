'use client';

import * as S from './styles';
import { IFormInputProps } from './types';

export default function FormInputPassword({
  placeholder,
  value,
  onChange,
  required,
}: IFormInputProps) {
  return (
    <S.Input
      type='password'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
