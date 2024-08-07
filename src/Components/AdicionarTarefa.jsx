import React, { useState } from 'react';

function AdicionarTarefa({ adicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [estadoTarefa, setEstadoTarefa] = useState('Simples');

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      adicionarTarefa(novaTarefa, estadoTarefa);
      setNovaTarefa('');
    }
  };

  return (
    <div className="flex justify-center">
      <article className="self-center">
        <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)}
          className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-200 
          text-slate-900 dark:text-slate-200 rounded-l placeholder:text-slate-500 dark:placeholder:text-slate-300" placeholder="Novo item"/>
        <select name="estado" value={estadoTarefa} onChange={(e) => setEstadoTarefa(e.target.value)}
          className="px-3 pt-2 bg-white dark:bg-slate-800 border border-l-none border-slate-900 dark:border-slate-200 
          text-slate-900 dark:text-slate-200 rounded-r">
            <option value="Simples">Simples</option>
            <option value="Moderado">Moderado</option>
            <option value="Complexo">Complexo</option>
        </select>
      </article>
      <button onClick={handleAdicionarTarefa} 
        className="ml-2 px-5 py-3 bg-slate-800 dark:bg-slate-100 text-slate-200 dark:text-slate-800 
        rounded-xl font-semibold text-base hover:bg-black dark:hover:bg-slate-400">Adicionar</button>
    </div>
  );
}

export default AdicionarTarefa 