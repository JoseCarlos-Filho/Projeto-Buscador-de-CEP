// import da api de CEP
import api from './services/api';

// Import do uso de estados do React 
import { useState } from 'react';

// import do componente de busca de icones no react
import { FiSearch } from "react-icons/fi";

// import da folha de estilos
import './estilos/style.css';

function App() {

  // Declaração e trabalho da manipulação dos estados em React
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  // função assincrona que busca informação da API do Cep no formato Json
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
        
        {/* reinderização condicional para apresentação do quadro branco na aplicação */}
        {Object.keys(cep).length > 0 && (

            <main className="main">
                <h2>CEP: {cep.cep}</h2>

                <span>{cep.logradouro}</span>
                <span>Complemento: {cep.complemento}</span>
                <span>{cep.bairro}</span>
                <span>{cep.localidade} - {cep.uf}</span>
            </main>

        )}
        
        </div>
    </div>
  );
}

export default App;
