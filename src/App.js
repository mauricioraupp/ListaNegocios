import React, { useState } from 'react';
import ListaDeTarefas from './Components/ListaDeTarefas';
import AdicionarTarefa from './Components/AdicionarTarefa';
import MoonIcon from './Components/MoonIcon';

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, descricao: 'Serviços de Entrega Local', estado: 'Moderado' },
    { id: 2, descricao: 'E-commerce e Vendas Online', estado: 'Moderado' },
    { id: 3, descricao: 'Serviços de Saúde e Bem-Estar', estado: 'Simples' },
    { id: 4, descricao: 'Educação e Treinamento', estado: 'Moderado' },
    { id: 5, descricao: 'Tecnologia e Desenvolvimento', estado: 'Complexo' },
    { id: 6, descricao: 'Serviços para Animais de Estimação', estado: 'Simples' },
    { id: 7, descricao: 'Alimentação e Bebidas', estado: 'Simples' },
    { id: 8, descricao: 'Sustentabilidade e Meio Ambiente', estado: 'Complexo' },
  ]);

  const adicionarTarefa = (descricao, estado) => {
    const novaId = tarefas.length ? tarefas[tarefas.length - 1].id + 1 : 1;
    const novaTarefaObj = {
      id: novaId,
      descricao,
      estado
    };
    setTarefas([...tarefas, novaTarefaObj]);
  };

  return (
    <div className="w-full flex justify-center">
      <header className="w-5/6 flex flex-col gap-10 justify-center">
        <h1 className="text-center text-3xl font-semibold pt-10 text-slate-900 dark:text-slate-50">Lista de ideias para negócios</h1>
        <MoonIcon/>
        <AdicionarTarefa adicionarTarefa={adicionarTarefa} />
        <ListaDeTarefas tarefas={tarefas} setTarefas={setTarefas}/>
      </header>
    </div>
  );
}

export default App;