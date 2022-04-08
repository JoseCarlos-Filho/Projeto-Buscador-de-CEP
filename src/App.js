import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import './estilos/style.css';

function App() {

  const [input, setInput] = useState('')

  function handleSearch() {
    alert("Click funcionando!")
  }


  return (
    <div className="container">
      <div className="Box">
        <h1 className="title">Buscador CEP</h1>
        
        <div className="InputBox">
          <input 
              type="text" 
              placeholder="Digite seu CEP..." 
              value={input}
              onChange={ (e) => setInput(e.target.value) }/>

          <button type="button" className="buttonSearch" onClick={handleSearch}>
              <FiSearch size={25} color="grey"/>
          </button>
        </div>
        

        <main className="main">
            <h2>CEP: 000.00-000</h2>

            <span>Rua: Teste</span>
            <span>Logradouro: Teste</span>
            <span>Bairro: Teste</span>
            <span>Cidade: Teste</span>
        </main>
        </div>
    </div>
  );
}

export default App;
