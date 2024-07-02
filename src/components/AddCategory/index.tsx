import { useState } from 'react';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Categoria cadastrada com sucesso!');
        setName('');
      } else {
        setError(data.error || 'Erro ao cadastrar categoria');
      }
    } catch (err) {
      setError('Erro ao cadastrar categoria');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Cadastrar Categoria</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nome da Categoria:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type='submit' disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AddCategory;
