import { FiSearch } from "react-icons/fi";
import './estilos/style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      
      <input type="text" placeholder="Digite seu CEP..." />

      <button type="button" placeholder="buttonSearch">
        <FiSearch size={25} color="#fff" />
      </button>

      <main className="main">
          <h2>CEP: 000.00-000</h2>

          <span>Rua: Teste</span>
          <span>Logradouro: Teste</span>
          <span>Bairro: Teste</span>
          <span>Cidade: Teste</span>
      </main>
    </div>
  );
}

export default App;
