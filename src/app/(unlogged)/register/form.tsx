import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormInput from '@/components/Form/FormInput/form-input';
import FormInputPassword from '@/components/Form/FormInput/form-input-password';
import PrimaryButton from '@/components/Buttons';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    setIsSubmitting(true);

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    setIsSubmitting(false);

    if (res.ok) {
      router.push('/login');
    } else {
      const errorData = await res.json();
      setErrorMessage(errorData.error || 'Falha no cadastro');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <FormInput
        type='text'
        placeholder='Nome'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormInput
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInputPassword
        type='password'
        placeholder='Senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <FormInputPassword
        type='password'
        placeholder='Confirmar Senha'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <PrimaryButton type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
      </PrimaryButton>
    </form>
  );
};

export default RegisterForm;
