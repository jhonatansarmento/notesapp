import { useState, useEffect } from 'react';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        if (response.ok) {
          setCategories(data);
        } else {
          setError(data.error || 'Erro ao obter categorias');
        }
      } catch (err) {
        setError('Erro ao obter categorias');
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, categoryId, userId: 'user-id' }), // Substituir 'user-id' pelo ID do usuário real
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Nota cadastrada com sucesso!');
        setTitle('');
        setContent('');
        setCategoryId('');
      } else {
        setError(data.error || 'Erro ao cadastrar nota');
      }
    } catch (err) {
      setError('Erro ao cadastrar nota');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Cadastrar Nota</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Título:</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='content'>Conteúdo:</label>
          <textarea
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor='category'>Categoria:</label>
          <select
            id='category'
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value=''>Selecione uma categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
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

export default AddNote;
