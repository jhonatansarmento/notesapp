'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import FormInput from '@/components/Form/FormInput/form-input';
import FormInputPassword from '@/components/Form/FormInput/form-input-password';
import PrimaryButton from '@/components/Buttons';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    setIsSubmitting(false);

    if (res?.ok) {
      router.push('/home');
    } else {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <FormInput
        type='email'
        placeholder='Digite seu email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInputPassword
        placeholder='Senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <PrimaryButton type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </PrimaryButton>
    </form>
  );
}
