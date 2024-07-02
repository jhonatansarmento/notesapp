// src/components/LogoutButton.tsx
'use client';

import { logout } from '@/services/Auth/Auth.service';
import { useRouter } from 'next/navigation';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    console.log('Logout successful, redirecting to login');
    router.push('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
