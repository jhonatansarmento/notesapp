'use client';

import * as S from './styles';
import { IFormInputProps } from './types';

export default function FormInput({
  type,
  placeholder,
  value,
  onChange,
  required,
}: IFormInputProps) {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
