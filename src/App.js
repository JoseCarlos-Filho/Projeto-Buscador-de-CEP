import api from './services/api';
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import './estilos/style.css';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    // alert("Click funcionando! valor do input : " + input);
    
    if(input === '') {
      alert("Preencha o CEP no campo!");
    }

    try {
      const resposta = await api.get(`${input}/json`);
      setCep(resposta.data);
      setInput("");
      // console.log(resposta.data);
    } catch {
      alert("CEP não existe");
      setInput("");
    }
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
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
        </main>
        </div>
    </div>
  );
}

export default App;
