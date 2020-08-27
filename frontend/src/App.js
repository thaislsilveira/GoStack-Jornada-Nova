import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & imutabilidade
 */

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
  

  // useState retorna um array com 2 posições
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor


  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`)

    setProjects([...projects, `Novo projeto ${Date.now()}` ]);

  }
  
  return (
    <>
      <Header title="Projects"/>

      <img width={300} src={backgroundImage} alt="plano de fundo"/>

      <ul>
         {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;