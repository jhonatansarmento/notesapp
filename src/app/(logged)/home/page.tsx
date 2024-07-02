'use client';

import AddCategory from '@/components/AddCategory';
import AddNote from '@/components/AddNote';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <p>Bem-vindo à página Home!</p>
      <AddCategory />
      <h1>Bem-vindo ao Cadastro de Notas</h1>
      <AddNote />
    </div>
  );
}
