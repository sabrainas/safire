import React, { useState } from 'react';
import PasseEscolar from './components/Forms/PasseEscolar';

function App() {
  const [rg, setRG] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const formatarRG = (input: string): string => {
    const rgNumerico = input.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    const rgFormatado = rgNumerico.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
    return rgFormatado;
  };

  const handleRGChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rgInput = e.target.value;
    const rgFormatado = formatarRG(rgInput);
    setRG(rgFormatado);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação
    const rgSemPontuacao = rg.replace(/[.-]/g, '');
    const rgValid = rgSemPontuacao.length === 9 && /^\d+$/.test(rgSemPontuacao);

    // Verificar se outros campos obrigatórios foram preenchidos
    const semestreValue = (e.currentTarget.elements.namedItem('semestre') as HTMLSelectElement)?.value;

    setIsValid(rgValid && semestreValue !== '');
  };

  return (
    <>
      <section className='flex items-center justify-center min-h-screen bg-red-900'>
        <div>
          <PasseEscolar />
        </div>
      </section>
    </>
  );
}

export default App;
